/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import MainContainer from "../../components/MainContainer";
import Sidebar from "../../components/Sidebar";
import { Switch } from "@headlessui/react";
import Link from "next/link";
import { CreateCommunityInput } from "../../schema/community.schema";
import {useForm} from 'react-hook-form'
import { useRouter } from "next/router";
import { trpc } from "../../utilis/trpc";

function CreatorHub() {
  const [togglebutton1, settogglebutton1] = useState(false);
  const [togglebutton2, settogglebutton2] = useState(false);
  const [togglebutton3, settogglebutton3] = useState(false);
  const [show, setShow] = useState(false);

  const {handleSubmit,register}=useForm<CreateCommunityInput>()
  const router=useRouter()

  const {mutate,error}=trpc.useMutation(['communities.create-community'],{
   onSuccess({id}){
    router.push(`/Creatorhub/${id}`)
   },
  })

  function onSubmit(values:CreateCommunityInput){
    mutate(values)
    console.log({values})
  }

  return (
    <div className="flex m-0 flex min-h-screen bg-[#141517] justify-between">
      {/* <div className="lg:w-[25%] lg:m-0 self-start lg:self-start">
          <Sidebar setShow={setShow} show={show}/>
        </div> */}
      <div className="mt-10 m-10 w-[80%] lg:w-[100%] ">
        <MainContainer
          title="Creator hub"
          description="create your own publication and share with your community"
          
        >
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              {error&&error.message}
              <div className="flex flex-col space-y-10 justify-between w-full">
                <div className="flex flex-col lg:flex-row justify-center items-start w-[100%]">
                  <div className="w-[100%] lg:w-[50%]">
                    <div>
                      <div>
                        <h2 className="">Name</h2>
                        <input
                          type="text"
                          className="w-[80%] bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1"
                          {...register('title')}
                        />
                      </div>
                      <div>
                        <h2 className="mb-3">Description</h2>
                        <input
                          type="text"
                          className="w-[80%] bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1"
                          {...register('body')}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] lg:w-[50%]">
                    <div>
                      <h2>Name</h2>
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
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
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
                </div>
                <div className="flex flex-col lg:flex-row justify-between w-[100%] border-t border-gray-700 ">
                  <div className="w-[100%]  mt-5 flex flex-col space-y-5 ">
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
                        <h2 className="mb-3 ml-10">
                          Make token-gated communtiy
                        </h2>
                      </div>
                      <p className="mb-3 mr-5 text-[#616370]">
                        you'll be able to close individual posts as well{" "}
                      </p>
                      <input
                        type="text"
                        className="w-[80%] bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1"
                      />{" "}
                    </div>
                    <div>
                      <h2>Upload members(emails or wallets) </h2>
                      <input
                        type="text"
                        className="w-[80%] bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1"
                      />{" "}
                    </div>
                  </div>
                  <div className="w-[100%] mt-5 flex flex-col space-y-5">
                    <div>
                      <div className="flex justify-start">
                        <Switch
                          checked={togglebutton2}
                          onChange={settogglebutton2}
                          className={`${
                            togglebutton2 ? "bg-blue-600" : "bg-[#3c404c]"
                          } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                          <span className="sr-only">Enable notifications</span>
                          <span
                            className={`${
                              togglebutton2 ? "translate-x-6" : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                          />
                        </Switch>
                        <p className="mb-3 ml-10">Turn on paid subscription</p>
                      </div>
                      <p className="mb-3 text-[#616370]">
                        when making posts you will able to make it paid
                      </p>
                      <input
                        type="text"
                        className="w-[80%] bg-[#2c2c34] h-10 rounded-[12px] outline outline-[#313237] outline-offset-2 outline-1"
                      />
                    </div>
                    <div className="flex justify-start">
                      <Switch
                        checked={togglebutton3}
                        onChange={settogglebutton3}
                        className={`${
                          togglebutton3 ? "bg-blue-600" : "bg-[#3c404c]"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">Enable notifications</span>
                        <span
                          className={`${
                            togglebutton3 ? "translate-x-6" : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                      <p className="ml-10">
                        Do you need general communtiy chat?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between w-[100%] border-t border-gray-700  pt-5">
                  <div className="w-[100%] lg:w-[50%] flex flex-col space-y-10">
                    <div className="flex mr-20 items-center justify-between">
                      <h2 className="w-[60%]">
                        Embed & share your communtiy sbuscription on the website{" "}
                      </h2>
                      <button className="bg-[#2c2c34] rounded-[12px] w-[30%] py-3">
                        copy code
                      </button>
                    </div>
                    <div>
                      {/* <Link href="/Creatorhub/SucessPage"> */}
                      <button className="bg-blue-600 py-2 px-4 rounded-[12px]" type="submit">
                      launch web-3 communtiy
                      </button>
                    {/* </Link> */}
                    </div>
                  </div>
                  <div className="w-[100%] lg:w-[50%] flex flex-col lg:flex justify-between text-start items-start mt-5">
                    <p>
                      Add discord bot to start communicating nativelyin web3
                    </p>
                    <button className="bg-[#2c2c34] rounded-[12px] w-[100%] lg:w-[40%] py-3">
                      Add discord chat bot
                    </button>
                  </div>
                </div>
              </div>
              </form>
            </>
        </MainContainer>
      </div>
    </div>
  );
}

export default CreatorHub;

