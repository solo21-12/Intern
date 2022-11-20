import React, { useState } from "react";
import MainContainer from "../../components/MainContainer";
import Sidebar from "../../components/Sidebar";
import { Switch } from "@headlessui/react";
import Link from "next/link";

function SucessPage() {
  return (
    <main className="flex m-0 flex min-h-screen bg-[#141517] justify-between">
      {/* <div className="lg:w-[20%] flex m-5 lg:m-0 self-start lg:self-start mr-[3rem]">
        <Sidebar />
      </div> */}
      <div className="mt-10 m-10 w-full flex flex-col justify-center items-center space-y-20">
          <div className="border border-gray-700 p-6 bg-[#1e1f24] rounded-[12px] text-white p-20 -mt-20">
            <h1>Creation Sucessful!</h1>
          </div>
          <Link href={"/Creatorhub/Newpost"}>
            <button className="text-white bg-[#0361ff] rounded-[12px] w-60 py-2">
              Make your First Post
            </button>
          </Link>

          <Link href={"/Creatorhub/CommunityPage"}>
            <button className="text-gray-500 underline">Skip For now</button>
          </Link>
      </div>
    </main>
  );
}

export default SucessPage;
