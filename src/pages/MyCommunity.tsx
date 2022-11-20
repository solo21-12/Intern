/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { IoCloseSharp } from "react-icons/io5";
import { Popover, Transition } from "@headlessui/react";
import { AiFillHeart, AiFillRightSquare } from "react-icons/ai";
import { IoMdLink } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Tab } from "@headlessui/react";
import MainContainer from "../components/MainContainer";
import SecondSidebar from "../components/SecondSidebar";
import Community from "../components/common/community";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const Communitydata = [
  {
    name: "Community Hub",
    message: "is is long ipsum avaliable...",
    imgsrc:
      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
    link: "#",
  },
  {
    name: " We love Skates",
    message: "Jumping is cool",
    imgsrc:
      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
    link: "#",
  },
  {
    name: "Mircel Jones",
    message: "Ok, Thanks.",
    imgsrc:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
    link: "#",
  },
  {
    name: "Uran Poland",
    message: "We own hidden lake..",
    imgsrc:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
    link: "#",
  },
];
function MyCommunity() {
  const [show, setShow] = useState(true);

  return (
    <main className=" flex m-0 min-h-screen bg-[#141517] justify-between">
       <div className={show?"w-[30%] flex flex-row":""}>
        {/* <div className="w-[50%]">
          <Sidebar setShow={setShow} show={show} />
        </div> */}
        <div className={show ?   " lg:ml-0 2xl:ml-1 xl:ml-0 w-[100%] h-[100 vh]" : "hidden"}>
          <SecondSidebar setShow={setShow} data={Communitydata} category="Communites" />
        </div>
      </div>

      <div className="mt-10 m-10 w-[65%] md:w-[90%] lg:w-[80%]">
        <MainContainer
          title="My community"
          description="this is your feed. Send a meesage create a communtiy"
          
        >
          <div className="w-full sm:px-0">
              <div className="flex flex-col md:flex-row justify-between items-start ">
                <div className="w-[100%]">
                  <Tab.Group>
                    <Tab.List className="flex justify-start space-x-10 p-1 border-b border-[#2c2c34] mb-5">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "rounded-lg py-2.5 px-2 text-sm font-medium leading-5 text-white",
                            selected
                              ? " shadow"
                              : "text-[#6f7988] hover:bg-white/[0.12] hover:text-white"
                          )
                        }
                      >
                        About
                      </Tab>

                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "rounded-lg py-2.5 px-2 text-sm font-medium leading-5 text-white",
                            selected
                              ? " shadow"
                              : "text-[#6f7988] hover:bg-white/[0.12] hover:text-white"
                          )
                        }
                      >
                        Feed
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "rounded-lg py-2.5 px-2 text-sm font-medium leading-5 text-white",
                            selected
                              ? " shadow"
                              : "text-[#6f7988] hover:bg-white/[0.12] hover:text-white"
                          )
                        }
                      >
                        Community Room
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2 w-full">
                      <Tab.Panel className={classNames("rounded-xl ")}>
                        <Community/>
                        <Community/>
                      </Tab.Panel>
                    </Tab.Panels>
                    <Tab.Panels className="mt-2">
                      <Tab.Panel className={classNames("rounded-xl  p-3")}>
                      <Community/>
                      </Tab.Panel>
                    </Tab.Panels>
                    <Tab.Panels className="mt-2">
                      <Tab.Panel className={classNames("rounded-xl  p-3")}>
                      <Community/>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
                <button className="bg-white text-black rounded-[12px] px-1 py-1 w-1/4 text-[12px] font-semibold">
                  Community hub
                </button>
              </div>
            </div>
        </MainContainer>
      </div>
    </main>
  );
}

export default MyCommunity;
