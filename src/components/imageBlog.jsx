import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { SessionContext } from "@/contexts/sessionprovider";

function imageBlog({id}) {
    
    const [posts, setPosts] = useState(null);
    const { token } = useContext(SessionContext);
    const authToken = token;
      
    useEffect(() => {
      const fetchData = async () => {
        try {
          const headers = {
            Authorization: `Bearer ${authToken}`,
          };
          const response = await axios.get(`/wp-json/wp/v2/media/${id}`, { headers });
   
          setPosts(response.data);
          // setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []); 
    if(posts===null) return null; 
  return (
    <div>
        <Image className="object-cover w-[1312px] h-[800px]"
              src={posts?.guid.rendered}
              alt="My-alt"
              width={1312}
            height={800}
            />
    </div>
  )
}

export default imageBlog;