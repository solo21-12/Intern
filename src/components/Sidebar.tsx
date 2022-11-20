/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import {
  FiSend,
  FiMessageSquare,
  FiGlobe,
  FiLayout,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { AiTwotoneSound, AiOutlineAppstore } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import SecondSidebar from "./SecondSidebar";
// import {Route, Link, Routes, useLocation} from 'react-router-dom';

export default function Sidebar(props:any) {
  const [show, setShow] = useState(false);
  const [open, setopen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSecondSidebar, setshowSecondSidebar] = useState(false);
  const [path, setpath] = useState<string>();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  // function secondsidebarShower(show: any) {
  //     setshowSecondSidebar(false);
  // }
  useEffect(() => {
    console.log("isLoading is: ", show);
    setpath(window.location.pathname);
    // console.log("path",path)
  }, [show]);

  const data = [
    {
      name: "Feed",
      icon: AiOutlineAppstore,
      link: "/newFeed",
      secondsidebar: false,
    },
    {
      name: "Direct Messages",
      icon: FiSend,
      link: "/DirectMessage1",
      secondsidebar: true,
    },
    {
      name: "My Community",
      icon: FiMessageSquare,
      link: "/MyCommunity",
      secondsidebar: true,
    },
    {
      name: "Community Verse",
      icon: FiGlobe,
      link: "/CommunityVerse",
      secondsidebar: false,
    },
    {
      name: "Creator Hub",
      icon: FiLayout,
      link: "/Creatorhub/CreatorHub",
      secondsidebar: false,
    },
    {
      name: "Settings",
      icon: FiSettings,
      link: "/Setting",
      secondsidebar: false,
    },
  ];
  const dataFooter = [
    {
      name: "Contacts",
      icon: BiGroup,
      link: "/Contacts",
    },
    {
      name: "Profile",
      icon: AiTwotoneSound,
      link: "/profile",
    },
  ];

  return (
    <div className=" h-full fixed ">
      <>
        <div className="text-right inset-0 flex items-center justify-center lg:hidden block h-6 w-6 text-slate-100 cursor-pointer">
          <button
            type="button"
            onClick={openModal}
            className="text-white rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium  hover:bg-opacity-30"
          >
            <FiMenu onClick={() => setopen(!open)} />
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Navigation
                    </Dialog.Title>

                    <div>
                      {data.map((item, index) => (
                        <Link key={index} href={item.link}>
                          <div className="px-7 py-4 m-1 text-slate-500 hover:text-gray-200 group cursor-pointer flex items-center hover:bg-[#2c2c34] hover:rounded-[12px]">
                            <div className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500 text-[20px]">
                              <item.icon />
                            </div>
                            <div className="font-bold"> {item.name}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-[#2c2c34] mt-[5rem]">
                      {dataFooter.map((item, index) => {
                        if (item.name == "Profile") {
                          return (
                            <Link key={index} href={item.link}>
                              <div className="px-7 py-4 m-1 text-slate-500 hover:text-gray-200 group cursor-pointer flex items-base hover:bg-[#2c2c34] hover:rounded-[12px] items-center">
                                <div className="h-9 stroke-slate-400 mr-1 group-hover:stroke-blue-500 text-lg">
                                  <img
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                                    className="-ml-2 h-8 w-10 border-2 border-white rounded-full"
                                    alt=""
                                  />
                                </div>
                                <div className="font-bold">{item.name}</div>
                              </div>
                            </Link>
                          );
                        }
                        return (
                          <Link key={index} href={item.link}>
                            <div className="px-7 py-4 m-1 text-slate-500 hover:text-gray-200 group cursor-pointer flex items-base hover:bg-[#2c2c34] hover:rounded-[12px]">
                              <div className="h-9 stroke-slate-400 mr-4 group-hover:stroke-blue-500 text-[20px]">
                                <item.icon />
                              </div>
                              <div className="font-bold">{item.name}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <div className="flex  ">
        <div
          className="bg-[#1e1f24] lg:block hidden border-r pt-10 border-[#2c2c34] justify-start text-[15px] w-full min-h-screen "
        >
          <div >
            <Link href={"/"}>
              {/* <Image
              // className="block lg:hidden h-8 w-auto"
              src="/logo.svg"
              alt="Workflow"
              width="200"
              height="50"
            /> */}
              <h1 className="text-white text-2xl ml-6 my-10">Logo</h1>
            </Link>
            {data.map((item, index) => (
              <Link key={index} href={item.link}>
                <div
                  className="px-7 py-4 m-1 text-slate-500 hover:text-gray-200 group cursor-pointer flex items-center hover:bg-[#2c2c34] hover:rounded-[12px]"
                  onClick={() => {
                    if (item.name == "Direct Messages" || item.name== "My Community") {
                      props.setShow(!props.show);
                    }
                  }}
                >
                  <div className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500 text-[15px]">
                    <item.icon />
                  </div>
                  <div className="font-bold"> {item.name}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="border-t border-[#2c2c34] mt-[7rem]">
            {dataFooter.map((item, index) => {
              if (item.name == "Profile") {
                return (
                  <Link key={index} href={item.link}>
                    <div className="px-7 py-4 m-1 text-slate-500 hover:text-gray-200 group cursor-pointer flex items-base hover:bg-[#2c2c34] hover:rounded-[12px] items-center">
                      <div className="h-9 stroke-slate-400 mr-1 group-hover:stroke-blue-500 text-lg">
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                          className="-ml-2 h-8 w-10 border-2 border-white rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </Link>
                );
              }
              return (
                <Link key={index} href={item.link}>
                  <div className="px-7 py-4 m-1 text-slate-500 hover:text-gray-200 group cursor-pointer flex items-base hover:bg-[#2c2c34] hover:rounded-[12px]">
                    <div className="h-9 stroke-slate-400 mr-4 group-hover:stroke-blue-500 text-[20px]">
                      <item.icon />
                    </div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
