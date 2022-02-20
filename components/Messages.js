import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

// ONly show messages from the last 15 minutes
const MINS_DURATION = 15;

export default function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );
  return (
    <div className='pb-56'>
      <div className='my-5'>
        <ByMoralis
          variant='dark'
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className='space-y-10 p-4'>
        {/* component now each time you do a map you should have a key this is how react understands that i don't need to re-render every item on that list so the messages i'll need to change the one which has a different key that came in */}
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className='flex justify-center'>
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className='text-center text-gray-400 mt-5'>
        <p>You are up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
}
