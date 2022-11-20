/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import { FiPaperclip,FiSmile } from "react-icons/fi";
import SecondSidebar from "../components/SecondSidebar";
import {useStateContext} from "../context/context"
function DirectMessage3() {
  const chatdata = [
    {
      name: " You",
      Time: "Today,3:45PM",
      imgsrc:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
      message: "OK,Thanks.",
    }
  ];
  const [show,setShow] = useState(true)
  return (
    <main className="flex m-0 flex min-h-screen bg-[#141517] justify-between">
      <div className="lg:w-[20%] flex m-5 mr-3 lg:m-0 self-start lg:self-start mr-[3rem]">
        {/* <Sidebar /> */}
        {/* <Sidebar setShow={setShow} show={show} /> */}
      </div>
      <div className="mt-10 m-10 w-[60%] lg:w-[65%]">
        <MainContainer
          title="Direct Messages"
          description="this is your feed. Send a meesage create a communtiy"
    
        >
          <div className="overflow-y-auto w-[100%]">
              {chatdata.map((item, index) => (
                <div className="w-[100%] flex flex-col rounded-[12px] mt-5">
                  <div className="py-4 flex items-start" key={item.name} >
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
                        className="text-xs text-[#d2d6e1] -mt-0.5 font-semibold"
                        x-text="user.email"
                      >
                        {item.Time}
                      </p>
                      <p className=" text-white">{item.message}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center mt-5">
                <FiPaperclip className="z-10 ml-5"/>
                <input
                  type="text"
                  className="w-[100%] bg-[#d7d7e7] h-10 rounded-[12px] outline outline-[#313237] pl-11  outline-offset-2 outline-1 -mx-10"
                />
                <FiSmile />
              </div>
            </div>
        </MainContainer>
      </div>
    </main>
  );
}

export default DirectMessage3;
