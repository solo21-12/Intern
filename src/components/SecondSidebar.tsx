/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

function SecondSidebar(props:any) {
  return (
    <div
      className="grow w-full h-full border flex flex-col bg-[#1e1f24] border-[#2c2c34] text-[#f7f6f9]"
    >
      <div className="h-16 border-b border-[#2c2c34] flex items-center justify-center lg:px-7 md:justify:between space-x-4">
        <div className="w-[0%] invisible lg:visible lg:px-1 lg:py-4 lg:w-[100%]">
          All {props.category}
        </div>
        <IoCloseSharp
          className="text-2xl bg-[#2c2c35] rounded text-gray-500 cursor-pointer"
          onClick={() => props.setShow(false)}
        />
      </div>
      <div className="mx-5">
        {props.data.map((item:any, index:any) => (
          <Link key={index} href={item.link}>
            <div className="lg:px-1 py-4 flex items-center cursor-pointer border-l-4 border-l-transparent hover:bg-[#2c2c34] hover:rounded-[12px]">
              <img
                src={item.imgsrc}
                className="border-2 h-10 w-10 lg:h-12 lg:w-12 lg:mr-5 border-white rounded-full"
                alt=""
              />
              <div className="invisible lg:visible w-full pr-5">
                <p
                  x-text="user.name"
                  className="text-md font-semibold text-[#d2d3d6] m-0 p-0"
                >
                  {item.name}
                </p>
                <p
                  className="text-xs text-slate-400 -mt-0.5 font-semibold"
                  x-text="user.email"
                >
                  {item.message}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SecondSidebar;
