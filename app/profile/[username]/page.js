import React from 'react'
import Username from './Username'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const page = async ({ params }) => {
  const u = await params
  const username = decodeURIComponent(u.username);
  await connectDb();
  const user = await User.findOne({ username: username });
  if (!user) {
    notFound();

  }
  // If user exists, render the profile page
  return (
    <div>
      <Username />
    </div>
  )

}

export const generateMetadata = async ({ params }) => {
  const u = await params
  const username = decodeURIComponent(u.username);
  return {
    title: `${username} - Fundspire`,
    description: `Profile of ${username} on Fundspire`,
  };
}
export default page
