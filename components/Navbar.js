"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setshowdropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleDropdownClick = () => setshowdropdown((prev) => !prev)

  const handleDropdownItemClick = () => setshowdropdown(false)

  return (
    <nav className='bg-black font-medium  text-white flex md:flex-row flex-col px-3 py-3  justify-between items-center h-content border border-b-gray-500/50 border-black'>
      <div>
        <Link className="logo font-bold mb-2 flex items-center" href="/">
          <img src="/Fundspire.png" width={40} height={30} alt="logo" />
          <span className='text-2xl'>Fundspire</span>
        </Link>
      </div>
      <div className="flex gap-7 justify-center">
        <ul className='md:flex  md:visible gap-4 items-center hidden '>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact-us">Contact</Link></li>
        </ul>
        <div className="buttons relative" ref={dropdownRef}>
          {session ? (
            <>
              <button
                onClick={handleDropdownClick}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
              >
                Welcome {session.user.name}
                <svg className="w-2.5 h-2.5 ms-3" viewBox="0 0 10 6">
                  <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={`z-10 ${showdropdown ? "" : "hidden"} absolute right-[0] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="/Dashboard" onClick={handleDropdownItemClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href={`/profile/${session.user.name}`} onClick={handleDropdownItemClick} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setshowdropdown(false)
                        signOut({ callbackUrl: "/Login" })
                      }}
                      className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link href="/Login">
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
