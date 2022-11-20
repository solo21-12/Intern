import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContainer from "../components/MainContainer";
import Link from "next/link";
import SecondSidebar from "../components/SecondSidebar";
import { useStateContext } from "../context/context";
function DirectMessage1() {
  const { show, setShow } = useStateContext();
  const Messagedata = [
    {
      name: "Yarosl Zubkp",
      message: "is is long ipsum avaliable.",
      imgsrc:
        "https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
      link: "/DirectMessage1",
    },
    {
      name: " Alison Alison",
      message: "Hello",
      imgsrc:
        "https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500",
      link: "/DirectMessage2",
    },
    {
      name: "Mircel Jones",
      message: "Ok, Thanks.",
      imgsrc:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
      link: "/DirectMessage3",
    },
    {
      name: "Uran Poland",
      message: "We own hidden lake..",
      imgsrc:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
      link: "/DirectMessage4",
    },
  ];
  return (
    <main className=" flex m-0 min-h-screen bg-[#141517] justify-between">
      <div className={show ? "w-[30%] flex flex-row" : ""}>
        {/* <div className="w-[50%]">
          <Sidebar setShow={setShow} show={show} />
        </div> */}
        <div className={show ? "  w-[100%] h-[100vh]" : "hidden"}>
          <SecondSidebar setShow={setShow} data={Messagedata} category="Chats" />
        </div>
      </div>
      <div className="mt-10 m-10 w-[65%] lg:w-[70%]">
        <MainContainer
          title="Creator hub"
          description="create your own publication and share with your community"
        >
          <div className="flex flex-col w-full lg:w-[60%] lg:-ml-[40%] justify-start space-y-2 h-[30rem]">
            <h1 className="mb-5 text-2xl font-bold text-white">
              New Direct Message
            </h1>
            <p className="text-[#c7c8cc]">wallet address1</p>
            <input
              type="text"
              className="bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1"
            />
            <p className="text-[#c7c8cc]">wallet address2</p>
            <input
              type="text"
              className="bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1"
            />

            <div className="flex justify-between pt-5 text-blue-600">
              <p>Add address</p>
              <p>Start messaging</p>
            </div>
          </div>
        </MainContainer>
      </div>

      {/* <div className="mt-10 m-10 w-[65%]">
        <div className="mt-10">
          <Header
            title={"Direct Messages"}
            description={"Contact people saftey in the XX blocakchain"}
          />

          
        </div>
      </div> */}
    </main>
  );
}

export default DirectMessage1;
