"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    getimages();
    console.log("UseEffect Function Call");
  }, []);

  const getimages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(data);
    } catch (error) {
      console.error("Error Fetching images");
    }
  };

  return (
    <div>
      <button
        onClick={getimages}
        className="px-5 py-3 bg-green-600 text-white font-bold"
      >
        Get Images
      </button>

      <div className="p-10">
        {Images.map((elem, i) => {
          return (
            <img
              key={i}
              src={elem.download_url}
              width={300}
              height={300}
              className="m-10 rounded inline-block"
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
