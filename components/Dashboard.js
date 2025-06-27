"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
    const { data: session, update, status } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})
    const [originalForm, setOriginalForm] = useState({})

    // ✅ Load saved form data from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('fundspire-dashboard-form');
        if (saved) {
            setform(JSON.parse(saved));
        }
    }, []);

    // ✅ Save form to localStorage on every change
    useEffect(() => {
        if (Object.keys(form).length > 0) {
            localStorage.setItem('fundspire-dashboard-form', JSON.stringify(form));
        }
    }, [form]);

    useEffect(() => {
        getpreviousData()
        if (status === "loading") return;
        if (!session) {
            router.push('/Login')
        }
    }, [router, session])

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const getpreviousData = async () => {
        if (session) {
            const user = await fetchuser(session.user.name);
            const savedForm = localStorage.getItem('fundspire-dashboard-form');
            if (!savedForm) {
                setform(user);
                setOriginalForm(user);
            }
        }
    };

    const isFormChanged = JSON.stringify(form) !== JSON.stringify(originalForm)

    const handleSubmit = async (e) => {
        e.preventDefault()
        update()
        let a = await updateProfile(form, session.user.name)
        if (a) {
            localStorage.removeItem('fundspire-dashboard-form'); // ✅ clear saved data
            toast('Your profile has been updated!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            router.push(`/profile/${form.username}`)
        } else {
            alert("Error updating profile")
        }
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
            <div className='container mx-auto py-5 px-6 '>
                <h1 className='text-center my-5 text-3xl underline font-bold'>Welcome to your Dashboard</h1>
                <h1 className='max-w-2xl mx-auto  my-5  font-bold'> #Complete your Profile</h1>

                <form className="max-w-2xl mx-auto" onSubmit={handleSubmit} >
                    {/* Name */}
                    <div className='my-2'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium ">Name</label>
                        <input value={form.name || ""} onChange={handleChange} type="text" name='name' id="name" className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Email */}
                    <div className="my-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email</label>
                        <input value={form.email || ""} onChange={handleChange} type="email" readOnly name='email' id="email" className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Username */}
                    <div className='my-2'>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium ">Username</label>
                        <input value={form.username || ""} onChange={handleChange} type="text" name='username' id="username" className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Profession */}
                    <div className='my-2'>
                        <label htmlFor="profession" className="block mb-2 text-sm font-medium ">Profession</label>
                        <input value={form.profession || ""} onChange={handleChange} type="text" name='profession' id="profession" className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Work */}
                    <div className='my-2'>
                        <label htmlFor="work" className="block mb-2 text-sm font-medium ">Desrcribe Your Work in One Line</label>
                        <input value={form.work || ""} onChange={handleChange} type="text" name='work' id="work" className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Cover Picture */}
                    <div className="my-2">
                        <label htmlFor="coverpic" className="block mb-2 text-sm font-medium ">Cover Picture</label>
                        <input value={form.coverpic || ""} onChange={handleChange} type="text" name='coverpic' id="coverpic" className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Profile Picture */}
                    <div className="my-2">
                        <label htmlFor="profilepic" className="block mb-2 text-sm font-medium ">Profile Picture</label>
                        <input value={form.profilepic || ""} onChange={handleChange} type="text" name='profilepic' id="profilepic" className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Razorpay ID */}
                    <div className="my-2">
                        <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium ">Razorpay Id</label>
                        <input value={form.razorpayid || ""} onChange={handleChange} type="text" name='razorpayid' id="razorpayid" className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Razorpay Secret */}
                    <div className="my-2">
                        <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium ">Razorpay Secret</label>
                        <input value={form.razorpaysecret || ""} onChange={handleChange} type="text" name='razorpaysecret' id="razorpaysecret" className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                    </div>

                    {/* Submit Button */}
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
