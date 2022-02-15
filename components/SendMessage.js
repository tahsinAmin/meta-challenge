import React from "react";
import { useMoralis } from "react-moralis";

export default function SendMessage() {
  const { user, Moralis } = useMoralis();
  return (
    <form className='flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4'>
      <input
        className='flex-grow outline-none bg-transparent text-white placeholder-gray-500'
        type='text'
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button className='font-bold text-pink-500'>Send</button>
    </form>
  );
}

// https://youtu.be/oE8FxN49Wo8?t=4026
