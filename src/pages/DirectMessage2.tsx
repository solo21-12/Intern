/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import { FiPaperclip,FiSmile } from "react-icons/fi";

function DirectMessage2() {
  const chatdata = [
    {
      name: "Yaroslav Zubkp",
      Time: "Today,3:00PM",
      imgsrc:
        "https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores nam laudantium ipsam illum esse ea ducimus, obcaecati quo possimus.",
    },
    {
      name: " You",
      Time: "Today,3:45PM",
      imgsrc:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
      message: "Love it!",
    },
    {
      name: "Mircel Jones",
      Time: "Today,3:50PM",
      imgsrc:
        "https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
      message:
        "Sed asperiores nam laudantium ipsam illum esse ea ducimus, obcaecati quo possimus.",
    },
  ];

  return (
    <main className="flex m-0 flex min-h-screen bg-[#141517] justify-between">
    <div className="lg:w-[20%] mr-3 flex m-5 lg:m-0 self-start lg:self-start mr-[3rem]">
        {/* <Sidebar /> */}
        {/* <Sidebar setShow={setShow} show={show} /> */}
      </div>
      <div className="mt-10 m-10 w-[60%] md:w-[90%] lg:w-[100%]">
        <MainContainer
          title="Direct Messages"
          description="Contact People safley in the XX blockhain"
         
        >
            <div className="overflow-y-auto w-[100%]">
              {chatdata.map((item, index) => (
                <div className="flex flex-col rounded-[12px] mt-5">
                  <div className="py-4 flex items-start">
                    <img
                      src={item.imgsrc}
                      className="h-12 w-12 border-2 border-white rounded-full mr-5"
                      alt=""
                    />
                    <div className="">
                      <p
                        x-text="user.name"
                        className="text-md font-semibold text-[#d2d3d6] m-0 p-0"
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-xs text-[#383c48] -mt-0.5 font-semibold"
                        x-text="user.email"
                      >
                        {item.Time}
                      </p>
                      <p>{item.message}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center mt-5">
                <FiPaperclip className="z-10 ml-5"/>
                <input
                  type="text"
                  className="w-[100%] bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1 -mx-10"
                />
                <FiSmile />
              </div>
            </div>
        </MainContainer>
      </div>
    </main>
  );
}

export default DirectMessage2;
