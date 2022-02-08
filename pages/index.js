import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen'>
      <Head>
        <title>Metaverse Challenge</title>
      </Head>
      <h1>Welcome to the app</h1>
    </div>
  );
}

// https://youtu.be/3NpZ05sDTQ4?t=3020
