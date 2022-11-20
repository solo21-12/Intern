import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Switch } from "@headlessui/react";
import Link from "next/link";

function PostSettings() {
  const [togglebutton1, settogglebutton1] = useState(false);
  const [togglebutton2, settogglebutton2] = useState(false);
  const [togglebutton3, settogglebutton3] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <main className="flex m-0 flex min-h-screen bg-[#141517] justify-between">
      <div className="lg:w-[20%]  flex m-5 lg:m-0 self-start lg:self-start">
        <Sidebar />
      </div>
      <div className="w-[100%]">
        <div className="flex mt-20 px-20">
          <div className="w-[70%]">
            <div className="text-white font-bold text-2xl">
              <h1>Post Settings</h1>
            </div>
            <div className="w-full bg-[#1e1f24] rounded-[12px] border border-gray-700 text-gray-200 flex flex-col mt-10 p-5 items-center px-10">
            <div className="flex flex-col space-y-10 justify-between w-full">
              <div className="flex flex-col lg:flex-row justify-between w-[100%] m-5 text-white">
                <div className="w-[100%] flex flex-col space-y-5 ">
                  <div>
                    <div className="flex justify-start">
                      <Switch
                        checked={togglebutton1}
                        onChange={settogglebutton1}
                        className={`${
                          togglebutton1 ? "bg-blue-600" : "bg-[#3c404c]"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">Enable notifications</span>
                        <span
                          className={`${
                            togglebutton1 ? "translate-x-6" : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                      <h2 className="mb-3 ml-10">Free Post</h2>
                    </div>
                    <p className="mb-3 mr-5 text-[#616370]">
                      Do you want to limit acess to certain token of NFT
                      holders?
                    </p>
                    <input
                      type="text"
                      className="w-[80%] bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1 px-5"
                      placeholder="contact Address"
                    />{" "}
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-[80%] bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1 px-5"
                      placeholder="Number of token holders"
                    />{" "}
                  </div>
                </div>
                <div className="w-[100%] lg:w-[100%] flex flex-col space-y-10">
                  <div className="flex mr-20 items-center justify-between">
                    <h2 className="w-[100%]">Upload member's Email</h2>
                  </div>
                  <div className="flex justify-start items-center w-full ">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col justify-center items-center w-full h-32 w-[80%] bg-[#2c2c34] rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-[#2c2c34] hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className="mb-3 w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          CSV
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 py-2 px-4 rounded-[12px]">
                     Let's Go
                      </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostSettings;
