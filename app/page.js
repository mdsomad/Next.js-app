"use client";
import React, { useState } from "react";


const page = () => {
  const [username, setUsername] = useState('')
  return (
    <>
       

      <h1 className="text-2xl font-bold">This is Home Page</h1>
      <a href='/Contact'>Contact</a>
    
    
    
       {/* <h1 className="mb-5 text-2xl">Enter your name : </h1>
         <form>
          <input type="text" className="border-2 border-zinc-800 px-4 py-2 text-xl" 
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value)
              console.log(username)
            }}
          />
         </form> */}
    </>
  );
};

export default page;
