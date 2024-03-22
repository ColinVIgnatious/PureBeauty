"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Serif_Display } from "next/font/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/contexts/sessionprovider";
import ImageTile from '@/components/imageTile';
import Link from "next/link";


const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Bloglist() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState([]);
  const { token } = useContext(SessionContext);
  const authToken = token;
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const response = await axios.get("/wp-json/wp/v2/posts/", { headers });
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();  
  }, []);

  console.log(posts);

  return (
    <>
      <Header />
      <div className="bg-[#FDF2DB]">
        <div className={`text-[#FDF2DB] bg-[#842A3A] text-xl indent-5 align-middle min-h-16 rounded-b-xl ${dmSerifDisplay.className}`}>
          Blogs
        </div>
        <div className="bg-[#FDF2DB] min-h-2"></div>
      </div>
      <div>
        <div className="bg-[#FDF2DB] grid grid-cols-2 gap-0 max-w-[1440px]">
        {posts.map((post,index) => (
          <Link href={`/blogdetail/${post.id}`} className="grid grid-cols-2" key={post.id}>

        <div className={`text-[#FDF2DB] bg-[#842A3A] h-[360px] flex flex-col gap-2 p-6 justify-end text-xl ${dmSerifDisplay.className}`} style={{order:Math.floor(index/2)%2}}>{post.categories.length > 0 && <p>Category: {post.categories[0].name}</p>}{post.title.rendered}</div>
        <div className="size-[360px]" style={{order:0}}><ImageTile id={post.featured_media} /></div>
        </Link>
        ))}
        </div>
      </div>
     
      <Image
        className=" "
        src="/bloglistpic.png"
        alt="My image"
        width={1440}
        height={717}
      />
      <Footer />
    </>
  );
}
