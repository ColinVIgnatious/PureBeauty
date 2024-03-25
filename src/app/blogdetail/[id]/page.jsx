"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Serif_Display,Source_Code_Pro } from "next/font/google";
import axios from "axios";
import { useParams } from "next/navigation";
import { SessionContext } from "@/contexts/sessionprovider";
import ImageBlog from '@/components/imageBlog'

const dmSerifDisplay = DM_Serif_Display({
    subsets: ["latin"],
    weight: ["400"],
  });
const sourceCodePro = Source_Code_Pro({
    subsets: ["latin"],
  });

function Blogdetail() {
 
  const params = useParams();
  console.log(params)
  const id = params.id;
  const [post, setPost] = useState(null);
  const { token } = useContext(SessionContext);
  const authToken = token;
  useEffect(() => {
    console.log('Hi')
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };        
        const response = await axios.get(`/wp-json/wp/v2/posts/${id}`, { headers });
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  
  }, []);

  console.log(post);
  if(post===null) return null; 
  return (
    <>
      <Header/>
        <div className="bg-[#FDF2DB]">
          <div className={`text-[#FDF2DB] bg-[#842A3A] text-xl indent-5 align-middle min-h-16 rounded-b-xl ${dmSerifDisplay.className}`}>{post.title.rendered}</div>
          {post && <div className="w-[1312] h-[800]"><ImageBlog id={post.id}/></div>}
          <div className={`text-md ${sourceCodePro.className}`} dangerouslySetInnerHTML={{ __html:post.content.rendered }} />
        </div>
      <Footer/>
    </>
  )
}

export default Blogdetail