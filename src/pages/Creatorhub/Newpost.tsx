import Link from "next/link";
import React from "react";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";

function Newpost() {
  return (
    <main className="flex m-0 flex min-h-screen bg-[#141517] justify-between">
      <div className="lg:w-[20%]  flex m-5 lg:m-0 self-start lg:self-start">
        <Sidebar />
      </div>
      <div className="w-[100%]">
        <div className="flex mt-20 px-20">
          <div className="w-[70%]">
            <div className="text-white font-bold text-2xl">
              <h1>Create A Post</h1>
            </div>

            <div className=" flex flex-col border border-gray-700 bg-[#1e1f24] rounded-[12px] text-white mt-10 text-start px-5">
              <textarea
                id="message"
                rows={2}
                className="block py-5 font-bold text-[20px] w-full text-sm text-gray-900 bg-[#1e1f24] rounded-lg  dark:bg-[#1e1f24] dark:text-white focus:outline-none focus:border-none focus:ring-transparent"
                placeholder="Post Title"
                defaultValue={""}
              />

              <textarea
                id="message"
                rows={6}
                className="block py-2.5 border-b border-gray-700 w-full text-sm text-gray-900 bg-[#1e1f24] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1e1f24] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:border-none focus:ring-transparent"
                placeholder="Your message..."
                defaultValue={""}
              />

              <div>
                <label
                  className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  className="my-5 border-b border-gray-700 block w-full text-sm text-gray-900 bg-gray-700 py-2 border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="file_input"
                >
                  Tags
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-[#1e1f24] rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1e1f24] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:border-none focus:ring-transparent"
                  placeholder="Your Tags..."
                  defaultValue={""}
                />
              </div>
              <Link href={"/Creatorhub/PostSettings"}>
              <button className="bg-blue-600 py-2 px-8 mx-5 my-5 rounded-[12px]">
                Post
              </button>
              </Link>
            </div>
          </div>
          <div className="w-[20%] h-full p-5 border border-gray-700 bg-[#1e1f24] rounded-[5px] text-white ml-10">
            <div>
              <label
                className="block mb-2 border-b border-gray-700 pb-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="file_input"
              >
                Text Preview
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-[#1e1f24] rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1e1f24] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:border-none focus:ring-transparent"
                placeholder="Your Previews..."
                defaultValue={""}
              />

              <div className="flex flex-col justify-start items-start">
                <button>Delete</button>
                <button>Save as Draft</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Newpost;
