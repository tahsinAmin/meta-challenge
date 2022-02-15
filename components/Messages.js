import React, { useReducer } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";

export default function Messages() {
  const { user } = useMoralis();
  return (
    <div className='pb-56'>
      <div className='my-5'>
        <ByMoralis
          variant='dark'
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div>{/* Each Message */}</div>
      <div className='flex justify-center'>
        <SendMessage />
      </div>
      <div className='text-center text-gray-400 mt-5'>
        <p>You are up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
}