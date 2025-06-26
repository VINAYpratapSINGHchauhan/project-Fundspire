import React from 'react'
import Username from './Username'
import{Metadata} from 'next'

const page = () => {
  
  return (
    <div>
      <Username />
    </div>
  )
}

export const generateMetadata = async ({ params }) => {
  const u= await params.username
  const username = decodeURIComponent(u);
  return {
    title: `${username} - Fundspire`,
    description: `Profile of ${username} on Fundspire`,
  };
}
export default page
