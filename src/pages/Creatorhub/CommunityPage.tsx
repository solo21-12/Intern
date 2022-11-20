import Link from "next/link";
import React, { useState, Fragment } from "react";
import Sidebar from "../../components/Sidebar";
import { FiEdit } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";

function CommunityPage() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <main className="flex m-0 flex min-h-screen bg-[#141517] justify-between">
      <div className="lg:w-[20%]  flex m-5 lg:m-0 self-start lg:self-start">
        <Sidebar />
      </div>
      <div className="w-[100%]">
        <div className="border-b border-gray-700 ">
          <form>
            <div className="relative w-[50%]">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                //   required=""
              />
            </div>
          </form>
        </div>
        <div>
          <>
            <div className="min-h-screen mt-20 flex items-start justify-start">
              <div className="px-10">
                <div className="bg-[#1e1f24] text-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">
                    LOGO
                  </div>
                  <div className="mt-4">
                    <h1 className="text-lg text-white font-semibold hover:underline cursor-pointer">
                      Community Name
                    </h1>
                    <p className="mt-3 text-gray-500">Description</p>
                    <p className=" text-md text-gray-200">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happines.
                    </p>
                    <div className="flex justify-end items-end">
                      <button
                        type="button"
                        onClick={openModal}
                        className="h-4 w-4 flex items-center justify-center text-2xl text-blue-600 mt-4 shadow-lg cursor-pointer"
                      >
                        <FiEdit />
                      </button>
                      <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                          as="div"
                          className="relative z-10"
                          onClose={closeModal}
                        >
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                          </Transition.Child>

                          <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                              >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#1e1f24] p-6 text-left align-middle shadow-xl transition-all">
                                  <>
                                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                                      <div className="-mx-3 md:flex mb-6">
                                        <div className="px-3 mb-6 md:mb-0 w-full">
                                          <label
                                            className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                                            htmlFor="grid-first-name"
                                          >
                                            Community Name
                                          </label>
                                          <input
                                            className="bg-[#2c2c34] appearance-none block w-full text-gray-200 border border-gray-700 rounded py-3 px-4 mb-3"
                                            id="grid-first-name"
                                            type="text"
                                            placeholder="Jane"
                                          />
                                          <p className="text-red-400 text-xs italic">
                                            Please fill out this field.
                                          </p>
                                        </div>
                                      </div>
                                      <div className="-mx-3 md:flex mb-6">
                                        <div className="px-3 mb-6 md:mb-0 w-full">
                                          <label
                                            className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                                            htmlFor="grid-first-name"
                                          >
                                            Descritption
                                          </label>
                                          <textarea
                                            id="message"
                                            rows={4}
                                            className="block py-2.5 border-b border-gray-700 w-full text-sm text-gray-900 bg-[#1e1f24] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1e1f24] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:border-none focus:ring-transparent"
                                            placeholder="Your message..."
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                      <div className="mb-8">
                                        <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2">
                                          Upload File
                                        </label>
                                        <input
                                          type="file"
                                          name="file"
                                          id="file"
                                          className="sr-only"
                                        />
                                        <label
                                          htmlFor="file"
                                          className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-6 text-center"
                                        >
                                          <div>
                                            <span className=" block text-xl font-semibold text-gray-400">
                                              Drop files here
                                            </span>
                                            <span className=" block text-base font-medium text-[#6B7280]">
                                              Or
                                            </span>
                                            <span className=" py-2 px-7 text-base font-medium text-gray-400">
                                              Browse
                                            </span>
                                          </div>
                                        </label>
                                      </div>
                                    </div>
                                  </>

                                  <div className="mt-4">
                                    <button
                                      type="button"
                                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                      onClick={closeModal}
                                    >
                                      Save
                                    </button>
                                  </div>
                                </Dialog.Panel>
                              </Transition.Child>
                            </div>
                          </div>
                        </Dialog>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </main>
  );
}

export default CommunityPage;
