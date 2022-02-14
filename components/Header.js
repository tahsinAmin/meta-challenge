import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

export default function Header() {
  const { user } = useMoralis();
  return (
    <div className='sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500'>
      <div>
        <div
          className='relative h-24 w-24 mx-auto hidden 
        lg:inline-grid'
        >
          <Image
            layout='fill'
            objectFit='cover'
            src='https://links.papareact.com/3pi'
            className='rounded-full'
          />
        </div>
        <div className='text-left lg:text-center'>
          <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
            <Avatar logoutOnPress />
          </div>
          <h1 className='text-3xl'>Eelcome eto papafam metaverse</h1>
          <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>

          {/* Change username comonent */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}
