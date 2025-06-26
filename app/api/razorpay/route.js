import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import Payment from "@/models/Payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import User from "@/models/User";
import { fetchRZPdetails } from "@/actions/useractions";

export const POST = async (request) => {

    await connectDb();
    let body = await request.formData();
    body = Object.fromEntries(body);
    // check if the razorpay orderid present in the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json({ success: false, message: "order ID not found in the server" });
    }

    // fetch the user who is getting the payment
    let user= await fetchRZPdetails(p.to_user);
    if (!user) {
        return NextResponse.json({ success: false, message: "User not found" });
    }
    // fetch the secret of the user
    const secret = user.secret;
    // verify the payment

    let isValid = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret);
    if (isValid) {
        // update the paymnent status
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/profile/${updatedPayment.to_user}?paymentdone=true`)
    } else {
        // if the payment is not valid, return an error
        return NextResponse.json({ success: false, message: "Payment verification failed" });
    }
} 