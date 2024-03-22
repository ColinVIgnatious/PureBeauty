'use client';
import React,{useState,useContext} from 'react';
import Image from "next/image";
import { DM_Serif_Display, Source_Code_Pro} from "next/font/google";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SessionContext } from '@/contexts/sessionprovider';


const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

export default function Home() {
const[username,setUsername]=useState('');
const[password,setPassword]=useState('');
const router = useRouter();
const{setToken}=useContext(SessionContext)

const handleLogin = async() => {
  try {
    console.log('Hi')
  const response=await axios.post('/wp-json/api/v1/token',{
    username: username,
    password: password
  },{withCredentials:true})
  console.log(response.data);
  
  if (response.data) { 
    setToken(response.data.jwt_token);
    router.push('/bloglist');
  } else {
    console.log('Error login');
  } // This will log the data retrieved from the API
  } catch (error) {
    console.log(error)
  }
  
}
  return (
    <div className="bg-[#842A3A] min-h-screen relative flex justify-between ">
      <div className="flex-grow px-[50px]">
        <Image
          className="mt-[70px] "
          src="/Logo+Brand.svg"
          alt="My image"
          width={199}
          height={49}
        />
        <div
          className={`text-[#FDF2DB] text-3xl mt-[70px] ${dmSerifDisplay.className}`}
        >
          Login
        </div>
        <div
          className={`text-[#FDF2DB] text-sm mt-[70px] ${sourceCodePro.className}`}
        >
          
            <div>
              <input onChange={(e)=>{setUsername(e.target.value)}}
                className="bg-transparent border-b p-2 w-full font-extralight focus:outline-none placeholder:text-[#FDF2DB]"
                type="text"
                id="username"
                name="username"
                placeholder="USERNAME"
              />
            </div>
            <div>
              <input onChange={(e)=>{setPassword(e.target.value)}}
                className="mt-6 bg-transparent border-b p-2 w-full font-extralight focus:outline-none placeholder:text-[#FDF2DB]"
                type="password"
                id="password"
                name="password"
                placeholder="PASSWORD"
              />
            </div>
            <button onClick={handleLogin}
              className="mt-10 border font-light p-2 inline-block w-full rounded-full overflow-hidden px-0 bg-transparent hover:bg-[#842A3A]"
              type="submit"
            >
              LOGIN
            </button>
        
        </div>
        <div
          className={`text-[#FDF2DB] text-center text-xl mt-6 ${sourceCodePro.className}`}
        >LOGIN OR SHOP</div>
      </div>
      <Image
        className="mt-[100px] mb-[100px]"
        src="/Loginpicture.png"
        alt="My image"
        width={932}
        height={800}
      />
    </div>
  );
}
