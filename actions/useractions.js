"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"
import Query from "@/models/Query"
export const initiate = async (amount, to_user, paymentform) => {
    await connectDb()
    // get id and secret from the database
    let razorpay_details = await fetchRZPdetails(to_user);
    if (!razorpay_details) {
        throw new Error("User not found");
    }

    var instance = new Razorpay({ key_id: razorpay_details.id, key_secret: razorpay_details.secret });
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)
    // create a payment object which shows a pending payent in the database
    await Payment.create({ oid: x.id, amount: Number.parseInt(amount), to_user: decodeURIComponent(to_user), name: paymentform.name, message: paymentform.message })
    return x
}
export const fetchuser = async (username) => {
    await connectDb()
    let user = await User.findOne({ username: username })
    let u = user.toObject({ flattenObjectIds: true })
    return u
}
export const fetchRZPdetails = async (username) => {
    let user = await fetchuser(username)
    if (!user) return null;
    let razorpay_details = { id: user.razorpayid, secret: user.razorpaysecret }
    return razorpay_details
}
export const fetchpayments = async (username) => {
    await connectDb();

    let payments = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .lean();

    // Convert _id and date fields
    const fixedPayments = payments.map(p => ({
        ...p,
        _id: p._id?.toString(),
        createdAt: p.createdAt?.toISOString(),
        updatedAt: p.updatedAt?.toISOString()
    }));

    return fixedPayments;
};

export const updateProfile = async (data, oldusername) => {
    await connectDb()

    // if the user is being updated check if username is available
    if (oldusername !== data.username) {
        let existingUser = await User.findOne({ username: data.username });
        if (existingUser) {
            throw new Error("Username already exists");
        }
        await User.updateOne({ email: data.email }, data)
        // update the payments usernames also
        await Payment.updateMany({ to_user: oldusername }, { to_user: data.username });
    }
    else{
    // update the user with the new data
    await User.updateOne({ email: data.email }, data)
    return true
    }
};

export const createQuery = async (data) => {
    await connectDb()
    // create a new query
    await Query.create({ name: data.name, email: data.email, query: data.query })
    return true
};