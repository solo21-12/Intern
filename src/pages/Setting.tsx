import React, { useState } from "react";
import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";

function Setting() {
  const [show, setShow] = useState(false);

  return (
    <main className="flex m-0 flex min-h-screen bg-[#141517] justify-between">
      {/* <div className="lg:w-[25%] lg:m-0 self-start lg:self-start">
          <Sidebar setShow={setShow} show={show}/>
        </div> */}
      <div className="mt-10 m-10 w-[80%] lg:w-[100%]">
        <MainContainer
          title="Settings"
          description="create your own publication and share with your community"
        >
          <></>
        </MainContainer>
      </div>
    </main>
  );
}

export default Setting;
