import Image from "next/image";

export default function Login() {
  return (
    <div className='bg-black relative text-white'>
      <h1>I am the login screen</h1>
      <div>
        {/* Papfa, log */}
        {/* Login with button */}
      </div>
      <div className='w-full h-screen'>
        <Image
          src='https://links.papareact.com/55n'
          layout='fill'
          objectFit='cover'
        />
        {/* Login Form */}
      </div>
    </div>
  );
}
