"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";


const page = () => {
  const [user, setUser] = useState("Somad")
  return (
    <>
      <Header user={user}/>
      {user}
    </>
  );
};

export default page;
