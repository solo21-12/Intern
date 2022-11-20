import React, { useState } from "react";
import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { trpc } from "../utilis/trpc";

const UserName = () => {
  const router=useRouter();
  const createMutation = trpc.useMutation(["users.register-user"], {
    onSuccess:()=>{
      router.push('/')
    },
    onError:()=>{
      console.log("Error")
    }
  });

    const [formUserName, setUserName] = useState({
        UserName: "",
      });

    function handleUserName(): void {
      createMutation.mutate({
        name: formUserName.UserName,
        email: ""
      });
    }
    function handleChange(e:any): void {
        setUserName((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
    }
    
  return (
    <div className="w-screen h-screen flex justify-center items-start pt-20 ">
      <div className="w-[25%] p-6 text-white flex flex-col items-start space-y-5">
        <h1 className="font-bold text-2xl">How can we call you?</h1>
        <p className="font-light">Your nickname will be used across Amichita. You can always change it in the settings.</p>
        <div className="mt-5 mx-auto w-full w-full">
            <form className="space-y-6" onSubmit={()=>handleUserName()}>
              <div>
                <div className="mt-5">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    placeholder="Luke Skywalker"
                    className="appearance-none block w-full px-3 py-2 border border-gray-900 bg-[#2c2c34] rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="text-white bg-[#0361ff] rounded-[12px] w-full py-2"
                  // onClick={router.push(/)}
                >
                  Continue
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-[#2c2c34] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Use my ENS
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default UserName;



