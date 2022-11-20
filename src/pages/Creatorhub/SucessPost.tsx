import React from "react";
import Link from "next/link";

function SucessPost() {
  return (
    <main className="flex m-0 flex min-h-screen bg-[#141517] justify-between ">
      <div className="m-20 w-full flex flex-col justify-center items-center space-y-10 bg-[#1e1f24] text-white rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <div className="text-white p-0 text-yellow-400">
          <h1>Post Sucessful!</h1>
        </div>
        <h1 className="text-white text-2xl">
          Start spreading the word about your Content
        </h1>
        <div className="flex flex-col justify-between items-center space-y-5 px-5">
          <div className="flex items-center w-full">
            <h1 className="text-white w-[50%]">
              Enable and share your community subscription on the website
            </h1>
            <div className="flex flex-col space-y-5 w-[50%] items-end">
              <button className="text-white bg-[#0361ff] rounded-[12px] w-[50%] py-2">
                Show Code
              </button>
              <button className="text-white bg-[#0361ff] rounded-[12px] w-[50%] py-2">
                Copy Code
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-12 w-full">
            <h1 className="text-white w-[50%]">Link for your community</h1>
            <div className="flex">
              <input
                className="bg-[#2c2c34] appearance-none block w-full text-gray-200 border border-gray-700 rounded py-2 px-4 "
                id="grid-first-name"
                type="text"
                placeholder="website.com/2x35fyl"
              />
              <button className="text-white bg-[#0361ff] w-40  -ml-2">
                Copy Link
              </button>
            </div>
          </div>
            <Link href={'/MyCommunity'}>
            <button className="mt-5 bg-[#0361ff] text-black px-3 py-3 rounded-[12px]">Go to my community</button>
            </Link>
        </div>
      </div>
    </main>
  );
}

export default SucessPost;
