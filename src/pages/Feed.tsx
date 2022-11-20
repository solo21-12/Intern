import React, { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { Popover, Transition } from "@headlessui/react";
import Header from "../components/Header";
import { AiFillHeart } from "react-icons/ai";
import { IoMdLink } from "react-icons/io";
import { BiChevronRight } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getSession, signOut } from "next-auth/react";
import MainContainer from "../components/MainContainer";
import SecondSidebar from "../components/SecondSidebar";

const data = [
  {
    letter: "G",
    title: "GreatDAO",
    time: "10:40 PM",
    description: "We're making new airpod.subscribe to recieve",
  },
  {
    letter: "Q",
    title: "GreatDAO",
    time: "10:40 PM",
    description: "We're making new airpod.subscribe to recieve",
  },
  {
    letter: "Q",
    title: "GreatDAO",
    time: "10:40 PM",
    description: "We're making new airpod.subscribe to recieve",
  },
];

function Feed() {
  const [show, setShow] = useState(false);
  return (
    <>
      <main className="flex m-0 min-h-screen bg-[#141517] justify-between">
        <div className="lg:w-[20%] lg:m-0 self-start lg:self-start">
          <Sidebar setShow={setShow} show={show}/>
        </div>
        <div className="m-10 w-[80%] lg:w-[100%]">
          
          <MainContainer 
          title="Feed"
          description="This is your feed. Send messages, create community, enjoy!">
          <div className="w-full sm:px-0">
                <div className="w-full bg-[#1e1f24] rounded-[12px] border border-gray-700 text-[#f8f8f9] flex flex-row mt-10 p-2 items-center space-x-3 overflow-auto">
                  <div className="pl-4">
                    <h1 className="font-bold">Important Notification</h1>
                    <p className="text-[14px] text-gray-600 mt-5">
                      Messages and actions you tagged as important
                    </p>
                  </div>
                  {data.map((item, index) => (
                    <div className="border-l border-[#2c2c34] p-8" key={item.letter}>
                      <div className="flex space-x-3 justify-between items-center">
                        <div>
                          <Link href="/">
                            <a className="flex ">
                              <span>
                                <div className="flex justify-center items-center bg-blue-300 rounded-full h-10 w-10">
                                  {item.letter}
                                </div>
                              </span>
                            </a>
                          </Link>
                        </div>
                        <div>
                          <p className="font-bold">{item.title}</p>
                          <p className="text-gray-600">{item.time}</p>
                        </div>
                        <BiChevronRight className="text-white bg-[#0c5af4] rounded text-2xl" />
                      </div>
                      <p className="text-[14px] text-[#c2c3c5]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="font-bold text-2xl">Today</p>
                <div className="#2c2c34 flex flex-col p-5 border border-gray-600 rounded-[12px] mt-5 w-[100%] lg:w-[80%]">
                  <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <Link href="/">
                          <a className="flex items-center">
                            <div className="z-0 flex justify-center items-center bg-blue-600 rounded-full h-10 w-10">
                              S
                            </div>
                          </a>
                        </Link>
                        <div>
                          <p className="font-bold">GreatDAO</p>
                          <p className="text-[#656774]">Today, 10:20</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-10 items-center">
                      <Popover>
                        {({ open }) => (
                          <>
                            <Popover.Button className="relative bg-blue-600 px-4 py-1 rounded-[6px] text-[12px]">
                              Nft
                            </Popover.Button>
                            <Transition
                              show={open}
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Popover.Panel className="absolute z-10 bg-gray-800 rounded-[12px] border border-gray-600 px-10 py-3">
                                <div>
                                  <p>bought</p>
                                  <p className="text-[11px]">113 of 200</p>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                      <div className="flex items-center space-x-1">
                        <IoMdLink className="text-[25px]" />
                        <p className="text-[15px]">Tx address</p>
                      </div>
                      <BsThreeDotsVertical className="text-[15px] text-[#72727c]" />
                    </div>
                  </div>
                  <div className="flex mt-5">
                    <div className="flex flex-col w-[70%] justify-between">
                      <h1 className="font-bold text-2xl">
                        Some Post title here
                      </h1>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Possimus qui officia deleniti fuga, voluptatibus
                        voluptate vitae praesentium aliquid alias incidunt,
                        beatae inventore accusantium molestiae?
                      </p>
                      <div className="flex justify-start items-center space-x-5 text-[15px]">
                        <p className="text-[#6d778a]">
                          <AiFillHeart />
                        </p>
                        <div className="flex items-center text-[12px]">
                          <div className="z-0 flex justify-center items-center bg-blue-300 rounded-full h-5 w-5 -mr-3   ">
                            S
                          </div>
                          <div className="z-10 flex justify-center items-center bg-green-600 rounded-full h-5 w-5 -mr-3">
                            F
                          </div>
                          <div className="z-20 flex justify-center items-center bg-purple-600 rounded-full h-5 w-5 -mr-3">
                            Q
                          </div>
                        </div>
                        <div className="text-[#1754bb] flex items-center">
                          <p>see comments</p>
                          <p className="background bg-[#3f414d] ml-1 rounded px-1 text-[10px] text-gray-400">
                            3
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[30%]">
                      <img
                        src="https://cdn.windowsreport.com/wp-content/uploads/2020/12/Programming-101.jpg"
                        className=" rounded-[12px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="#2c2c34 flex flex-col p-5 border border-gray-600 rounded-[12px] mt-5 w-[100%] lg:w-[80%]">
                  <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <Link href="/">
                          <a className="flex items-center">
                            <div className="z-0 flex justify-center items-center bg-blue-600 rounded-full h-10 w-10">
                              S
                            </div>
                          </a>
                        </Link>
                        <div>
                          <p className="font-bold">GreatDAO</p>
                          <p className="text-[#656774]">Today, 10:20</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-10 items-center">
                      <Popover>
                        {({ open }) => (
                          <>
                            <Popover.Button className="relative bg-blue-600 px-4 py-1 rounded-[6px] text-[12px]">
                              Nft
                            </Popover.Button>
                            <Transition
                              show={open}
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Popover.Panel className="absolute z-10 bg-gray-800 rounded-[12px] border border-gray-600 px-10 py-3">
                                <div>
                                  <p>bought</p>
                                  <p className="text-[11px]">113 of 200</p>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                      <div className="flex items-center space-x-1">
                        <IoMdLink className="text-[25px]" />
                        <p className="text-[15px]">Tx address</p>
                      </div>
                      <BsThreeDotsVertical className="text-[15px] text-[#72727c]" />
                    </div>
                  </div>
                  <div className="flex mt-5">
                    <div className="flex flex-col w-[70%] justify-between">
                      <h1 className="font-bold text-2xl">
                        Some Post title here
                      </h1>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Possimus qui officia deleniti fuga, voluptatibus
                        voluptate vitae praesentium aliquid alias incidunt,
                        beatae inventore accusantium molestiae?
                      </p>
                      <div className="flex justify-start items-center space-x-5 text-[15px]">
                        <p className="text-[#6d778a]">
                          <AiFillHeart />
                        </p>
                        <div className="flex items-center text-[12px]">
                          <div className="z-0 flex justify-center items-center bg-blue-300 rounded-full h-5 w-5 -mr-3   ">
                            S
                          </div>
                          <div className="z-10 flex justify-center items-center bg-green-600 rounded-full h-5 w-5 -mr-3">
                            F
                          </div>
                          <div className="z-20 flex justify-center items-center bg-purple-600 rounded-full h-5 w-5 -mr-3">
                            Q
                          </div>
                        </div>
                        <div className="text-[#1754bb] flex items-center">
                          <p>see comments</p>
                          <p className="background bg-[#3f414d] ml-1 rounded px-1 text-[10px] text-gray-400">
                            3
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[30%]">
                      <img
                        src="https://cdn.windowsreport.com/wp-content/uploads/2020/12/Programming-101.jpg"
                        className=" rounded-[12px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
          </MainContainer>
        </div>
      </main>
    </>
  );
}

export default Feed;
