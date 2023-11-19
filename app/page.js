"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [users, setusers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    setusers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <button
        onClick={getUsers}
        className="bg-green-600  text-white px-4 py-2 rounded font-bold"
      >
        Get Data
      </button>
      <div className="p-8 bg-slate-100 mt-5">
        <ul>
          {users.map((e) => {
            return (
              <li>
                {e.username} --- <Link href={`/${e.id}`}>Exprole</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default page;
