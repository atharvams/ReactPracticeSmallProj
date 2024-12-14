import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";


function TopHotels() {
    const [data, setData] = useState([])

    const getTopRestaurants = async () =>{
        const apiData = await fetch("http://localhost:5000/top-restaurant-chains")
        const jsonData = await apiData.json()
        setData(jsonData);
    }

    useEffect(()=>(
        getTopRestaurants()
    ),[])

  return (
    <div className="max-w-[1200px] h-full mx-auto">
      <div className="flex justify-between my-5 items-center mt-10">
        <div className="text-2xl font-bold">Top restaurant chains in Nanded</div>
        <div className="flex ">
          <div className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#02060c26] mx-2 cursor-pointer">
            <FaArrowLeft />
          </div>
          <div className=" flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#02060c26] mx-2 cursor-pointer">
            <FaArrowRight />
          </div>
          
        </div>
      </div>
      <div className="flex">
            <Card/>
      </div>
      <hr className="mt-10 border-[1px]" />
    </div>
  );
}

export default TopHotels;
