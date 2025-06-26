import React from 'react';
import Link from 'next/link';
export default function Home() {
  return (<>
    <div className="flex justify-center text-white items-center flex-col h-[90vh] gap-4">
      <div className="font-bold text-5xl flex gap-2 items-center">Welcome to Fundspire🔥 </div>
      <p> A platform where creators get funded by fans and followers. start building your dream with community support</p>
      <div className="buttons ">
        <Link href={"/Login"}><button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Become a Creator</button></Link>
        <Link href={"/about"}><button type="button" className="cursor-pointer hover:bg-gray-700 text-white bg-gradient-to-br border border-purple-600 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Read more</button></Link>
      </div>
    </div>
    <div className="bg-white opacity-10 h-1 mx-5">
    </div>
    <div className="text-white container mx-auto pb-16 pt-10 px-10">
      <h2 className="text-3xl font-bold text-center mb-14">Your Fans can Fund you</h2>
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
          <p className="font-bold text-center">Fans want to help</p>
          <p className="text-center">Your fans are available to support you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
          <p className="font-bold text-center">Fans want to contribute</p>
          <p className="text-center">Your fans are willing to contribute financially</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
          <p className="font-bold text-center">Fans want to collaborate</p>
          <p className="text-center">Your fans are ready to collaborate with you</p>
        </div>
      </div>
    </div>
    <div className="bg-white opacity-10 h-1 mx-5">
    </div>
    <div className="text-white container mx-auto pb-16 pt-10 px-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SiL7GNrGofgsi=uO3hOyzQJ7LV10hk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
      
    </div>
    
  </>
  );
  m
}

