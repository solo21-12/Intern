/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import SecondSidebar from "../components/SecondSidebar";
import MainContainer from "../components/MainContainer";
import {useStateContext} from "../context/context"
function CommunityVerse() {
  const [show, setShow] = useState(true);

  return (
    <main className="flex m-0 min-h-screen bg-[#141517] justify-between">
      {/* Left Side */}
      {/* <div className="lg:w-[25%] flex m-5 lg:m-0 self-start lg:self-start bg-green-700">
        <Sidebar setShow={setShow} show={show} />
      </div> */}

      {/* Right Side */}
      <div className=" m-10 w-[80%] lg:w-[75%]">
        <MainContainer
          title="Communityverse"
          description=" Discover communities gathered in categories you may be interested
            in" 
        >
           <div className="w-full text-gray-500 items-start">
              <div className="flex flex-col lg:flex-row lg:space-x-5 border-b border-gray-700 pb-4 w-full items-start">
                <div className="flex space-x-5">
                  <p className="">
                    <Link href="#">
                      <a>For You</a>
                    </Link>
                  </p>
                  <p className="">
                    <Link href="#">
                      <a>NFTs</a>
                    </Link>
                  </p>
                  <p className="">
                    <Link href="#">
                      <a>Games</a>
                    </Link>
                  </p>
                  <p className="">
                    <Link href="#">
                      <a>DeFi</a>
                    </Link>
                  </p>
                  <p className="">
                    <Link href="#">
                      <a>Art</a>
                    </Link>
                  </p>
                  <p className="">
                    <Link href="#">
                      <a>Sport</a>
                    </Link>
                  </p>
                  <p className="">
                    <Link href="#">
                      <a>News</a>
                    </Link>
                  </p>
                  <p className="">
                    <Link href="#">
                      <a>Crypto</a>
                    </Link>
                  </p>
                </div>

                <div className="flex space-x-5">
                  <p className="ml-0">
                    <Link href="#">
                      <a>Politics</a>
                    </Link>
                  </p>
                  <p className="">
                    <Link href="#">
                      <a>Hi-Fi</a>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <form className="flex items-center">
                  <label className="sr-only">Search</label>
                  <div className="relative ">
                    <input
                      type="text"
                      id="simple-search"
                      className="text-gray-900 text-sm bg-zinc-600 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 pl-10 h-10 w-80"
                      placeholder="Search"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-10 px-4 bg-zinc-600 text-sm font-medium rounded-r-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    <FaSearch />
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
              <div className="mt-6 flex items-center text-sm">
                <h1 className="text-white text-xl"> Recommended for you </h1>
                <p className="text-gray-500 ml-4"> Based on Web3 activity </p>
              </div>

              <div className="flex mt-4 flex-nowrap overflow-x-scroll scrollbar  w-[60%]">
                <div className="flex flex-nowrap">
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm">
                <h1 className="text-white text-xl"> Popular </h1>
              </div>
              <div className="flex mt-4 flex-nowrap overflow-x-scroll scrollbar w-[60%]">
                <div className="flex flex-nowrap">
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                  <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                    <img
                      src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                      width="180"
                      height="180"
                    />
                    <p className="text-gray-300 p-3">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </MainContainer>

        {/* Upper Section */}
        {/* <div className="flex justify-between">
          <div>
            <h1 className="text-white text-xl ">Communityverse</h1>
            <p className="text-gray-500 mt-2 ">
              Discover communities gathered in categories you may be interested
              in
            </p>
          </div>
          <div>
            <form className="flex items-start ">
              <label className="sr-only">Search</label>
              <div className="relative ">
                <input
                  type="text"
                  id="simple-search"
                  className="text-gray-900 text-sm bg-[#141517] rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-10 p-2.5 "
                  required
                />
              </div>
              <button
                type="submit"
                className="p-4 ml-4 bg-[#1e1f24] text-sm font-medium rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <FaSearch />
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
          <div>
            <button
              type="button"
              className="absolute right-0 mr-12 text-white bg-[#0361ff] rounded-[12px] px-8 py-2"
            >
              Send Message
            </button>
          </div>
        </div> */}

        {/* Lower Section */}
        {/* <div className="w-full bg-[#1e1f24] rounded-[12px] border border-[#2c2c34] text-gray-500 mt-10 p-5 items-start">
          <div className="flex flex-col lg:flex-row lg:space-x-5 border-b border-gray-700 pb-4 w-full items-start">
            <div className="flex space-x-5">
              <p className="">
                <Link href="#">
                  <a>For You</a>
                </Link>
              </p>
              <p className="">
                <Link href="#">
                  <a>NFTs</a>
                </Link>
              </p>
              <p className="">
                <Link href="#">
                  <a>Games</a>
                </Link>
              </p>
              <p className="">
                <Link href="#">
                  <a>DeFi</a>
                </Link>
              </p>
              <p className="">
                <Link href="#">
                  <a>Art</a>
                </Link>
              </p>
              <p className="">
                <Link href="#">
                  <a>Sport</a>
                </Link>
              </p>
              <p className="">
                <Link href="#">
                  <a>News</a>
                </Link>
              </p>
              <p className="">
                <Link href="#">
                  <a>Crypto</a>
                </Link>
              </p>
            </div>

            <div className="flex space-x-5">
              <p className="ml-0">
                <Link href="#">
                  <a>Politics</a>
                </Link>
              </p>
              <p className="">
                <Link href="#">
                  <a>Hi-Fi</a>
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-4">
            <form className="flex items-center">
              <label className="sr-only">Search</label>
              <div className="relative ">
                <input
                  type="text"
                  id="simple-search"
                  className="text-gray-900 text-sm bg-zinc-600 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 pl-10 h-10 w-80"
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                className="h-10 px-4 bg-zinc-600 text-sm font-medium rounded-r-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <FaSearch />
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
          <div className="mt-6 flex items-center text-sm">
            <h1 className="text-white text-xl"> Recommended for you </h1>
            <p className="text-gray-500 ml-4"> Based on Web3 activity </p>
          </div>

          <div className="flex mt-4 flex-nowrap overflow-x-scroll scrollbar w-[60%]">
            <div className="flex flex-nowrap">
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center text-sm">
            <h1 className="text-white text-xl"> Popular </h1>
          </div>
          <div className="flex mt-4 flex-nowrap overflow-x-scroll scrollbar w-[60%]">
            <div className="flex flex-nowrap">
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="bg-[#2c2c34] w-48 rounded-lg mr-4">
                <img
                  src="https://images.freeimages.com/variants/wRSq1uDsVFrz8CdB9dhETTHh/5a0bd68e593adb18739fe6fe526aa40368c6d1e5924c85e47ba06f7a665f1000"
                  width="180"
                  height="180"
                />
                <p className="text-gray-300 p-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default CommunityVerse;
