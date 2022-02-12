import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

export default function Header() {
  const { user } = useMoralis();
  return (
    <div>
      <div className=''>
        <div
          className='relative h-24 w-24 mx-auto hidden 
        lg:inline-grid'
        >
          <Image
            className='rounded-full'
            src='https://links.papareact.com/3pi'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div>
          <div>
            <Avatar logoutOnPress />
          </div>
          {/* Welcome Message */}
          {/* Username */}

          {/* Change username comonent */}
        </div>
      </div>
    </div>
  );
}
