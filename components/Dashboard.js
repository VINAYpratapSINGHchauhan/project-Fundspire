"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})
    const [originalForm, setOriginalForm] = useState({})


    useEffect(() => {
        getpreviousData()
        // If session exists, set the form with user data
        // If no session, redirect to Login page
        if (!session) {
            router.push('/Login')
        }
    }, [router, session])
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const getpreviousData = async () => {
        if (session) {
            let user = await fetchuser(session.user.name)
            setform(user)
            setOriginalForm(user)
        }
    }

    const isFormChanged = JSON.stringify(form) !== JSON.stringify(originalForm)


    const handleSubmit = async (e) => {
        e.preventDefault()
        update()
        let a = await updateProfile(form, session.user.name)
        if (a) {
            alert("Profile updated successfully")
            router.push(`/profile/${form.username}`)
        } else {
            alert("Error updating profile")
        }

    }
    return (
        <>
            <div className='container mx-auto py-5 px-6 '>
                <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

                <form className="max-w-2xl mx-auto" onSubmit={handleSubmit} >

                    <div className='my-2'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium ">Name</label>
                        <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id="name" className="block w-full p-2 text-black  border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>
                    {/* input for email */}
                    <div className="my-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email</label>
                        <input value={form.email ? form.email : ""} onChange={handleChange} type="email" readOnly name='email' id="email" className="block w-full p-2 text-black  border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>
                    {/* input forusername */}
                    <div className='my-2'>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium ">Username</label>
                        <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id="username" className="block w-full p-2 text-black  border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>
                    {/* input for cover pic  */}
                    <div className="my-2">
                        <label htmlFor="coverpic" className="block mb-2 text-sm font-medium ">Cover Picture</label>
                        <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name='coverpic' id="coverpic" className="block w-full p-2 text-black  border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>
                    {/* input for profile picture of input type text */}
                    <div className="my-2">
                        <label htmlFor="profilepic" className="block mb-2 text-sm font-medium ">Profile Picture</label>
                        <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name='profilepic' id="profilepic" className="block w-full p-2 text-black  border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* input razorpay id */}
                    <div className="my-2">
                        <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium ">Razorpay Id</label>
                        <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name='razorpayid' id="razorpayid" className="block w-full p-2 text-black  border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>
                    {/* input razorpay secret */}
                    <div className="my-2">
                        <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium ">Razorpay Secret</label>
                        <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name='razorpaysecret' id="razorpaysecret" className="block w-full p-2 text-black  border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Submit Button  */}
                    <div className="my-6">
                        <button
                            type="submit"
                            disabled={!isFormChanged}
                            className={`... ${isFormChanged
                                    ? 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500  py-2 px-7 font-medium text-sm rounded-lg'
                                    : 'bg-gray-400 cursor-not-allowed  py-2 px-7 font-medium text-sm rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
                                }`}
                        >
                            Update
                        </button>

                       
                    </div>
                </form>


            </div>
        </>
    )
}

export default Dashboard