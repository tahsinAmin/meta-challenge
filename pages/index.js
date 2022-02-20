import Head from "next/head";
import Login from "../components/Login";
import Messages from "../components/Messages";
import Header from "../components/Header";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900'>
      <Head>
        <title>Metaverse Challenge</title>
      </Head>
      <div className='max-w-screen-2xl mx-auto'>
        <Header />
        <Messages />
        {/* Messages */}
      </div>
    </div>
  );
}

// It's all under the protection block that is usedfor authenticaation. So, we know the user will
// be there. And he can safely use information about the user.

// https://youtu.be/oE8FxN49Wo8?t=4913
