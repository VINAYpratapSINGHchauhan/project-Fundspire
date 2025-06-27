"use client"
import React from 'react'
import Script from 'next/script'
import { initiate, fetchpayments, fetchuser } from '@/actions/useractions'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';

const Username = ({ }) => {
  const params = useParams()
  const searchParams = useSearchParams()
  const { data: session } = useSession()
  const [CurrentUser, setCurrentUser] = useState({})
  const [Payments, setPayments] = useState([])
  const [paymentform, setpaymentform] = useState({
    name: '',
    message: '',
    amount: ''
  })
  const router = useRouter()

  const getData = async () => {
    let username = decodeURIComponent(params.username)
    let u = await fetchuser(username);
    setCurrentUser(u);
    let p = await fetchpayments(username);
    setPayments(p);
  }

  useEffect(() => {
    getData();
  }, [params.username]);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast('Thanks for the donation!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
      router.push(`/profile/${params.username}`);
    }
  }, [session])




  const pay = async (amount) => {
    const finalAmount = parseInt(amount);
    if (!finalAmount || isNaN(finalAmount)) {
      alert("Please enter a valid amount");
      return;
    }

    let a = await initiate(finalAmount, params.username, paymentform);
    let orderId = a.id;

    var options = {
      key: CurrentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      currency: "INR",
      name: "Fundspire",
      description: "Test Transaction",
      image: "/Fundspire.png",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentform.name || "",
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
  }

  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  return (

    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover relative">
        <img src={CurrentUser.coverpic || "/cover-image.png"} alt="Cover" className="w-full h-[47vh]" />
        <div className="profile-pic absolute left-[46.6%] -bottom-12  size-24 ">
          <img
            data-tag="creator-public-page-avatar"
            style={{ borderRadius: '10px' }}
            className=" object-contain rounded-md size-24"
            src={CurrentUser.profilepic || "/avatar.gif"}
            alt="Profile"
          />
        </div>
      </div>
      <div className="info gap-1 text-sm flex flex-col justify-center items-center mt-16">
        <div className="font-bold text-2xl">{decodeURIComponent(params.username)}</div>
        <div className="text-gray-600">{CurrentUser.profession} - {CurrentUser.work}</div>
        <div className="text-gray-500 text-lg"><span className='font-bold'>{CurrentUser.name}</span> is raising funds · <span className='font-bold'> {Payments.length}</span> payments are  made</div>
        <div className="text-gray-300 font-medium">Lets help him reach his goal!</div>
        <div className="payment flex gap-3 w-[80%]">
          <div className="supporters rounded-md w-1/2 bg-slate-900 my-5">
            <h2 className='text-2xl font-bold m-5'>Supporters</h2>

            {/* show list of all the supporters as a leaderboard */}
            <ul className='text-sm mx-9 my-3'>
              {Payments.length === 0 && <p className='text-gray-500'>No payments made yet</p>}
              {Payments.map((Payment, index) => {
                return <li key={index} className='mb-1.5 aaaaaaaaaaaz flex items-center gap-1'><img src="/avatar.gif" className='h-[24] w-[24]' alt="" /><span>{Payment.name} donated <span className='font-bold'>&#8377;{Payment.amount / 100}</span> with a message " {Payment.message} ❤"</span></li>
              })}
            </ul>
          </div>
          <div className="makepayment rounded-md w-1/2 bg-slate-900 my-5">
            <h2 className='text-2xl font-bold m-5'>Make a Payment </h2>
            <div className="mx-9 my-3">
              <div className="flex gap-2 ">
                <input onChange={handlechange} value={paymentform.name} name="name" type="text" className='w-full rounded-lg bg-slate-800 p-3' placeholder='Enter Name' />
                <input onChange={handlechange} value={paymentform.message} name="message" type="text" className='w-full rounded-lg bg-slate-800 p-3' placeholder='Enter Message' />
              </div>
              <div className="flex  flex-col gap-3 mt-3 ">
                <input onChange={handlechange} value={paymentform.amount} name="amount" type="text" className='w-full rounded-lg bg-slate-800 p-3' placeholder='Enter Amount' />
                <button onClick={() => { pay(paymentform.amount * 100) }} className='text-white bg-gradient-to-br from-black to-purple-900 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center disabled:bg-slate-900 disabled:from-purple-100' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 3||paymentform.amount?.length<1} >Pay</button>
              </div>
              {/* or choose from these amounts */}
              <div className="flex gap-2 mt-3">
                <button onClick={() => { pay(1000) }} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center ">Pay &#8377;30</button>
                <button onClick={() => { pay(2000) }} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center ">Pay &#8377;50</button>
                <button onClick={() => { pay(3000) }} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center">Pay &#8377;100</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
