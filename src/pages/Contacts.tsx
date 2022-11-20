import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

function Contacts() {
  const [show, setShow] = useState(false);

  return (
    <main className="  m-0 flex min-h-screen bg-[#141517] justify-between">
      <div className="lg:w-[25%] lg:m-0 self-start lg:self-start">
          <Sidebar setShow={setShow} show={show}/>
        </div>
        <div className=" mt-10 mr-20">
            <h1 className='text-white'>Contacts</h1>
            </div>
            </main>
  )
}

export default Contacts