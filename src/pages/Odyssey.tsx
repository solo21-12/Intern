import Image from "next/image"
import Link from "next/link"
import { AiOutlineHeart } from 'react-icons/ai'
import { FiMessageCircle } from 'react-icons/fi'
import { TiArrowForwardOutline } from 'react-icons/ti'
import { BsBookmark } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'


function Odyssey() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="flex justify-center items-center ">
                <h1 className="flex font-bold text-2xl p-4 "> Odyssey </h1>
                <button type="button" className="absolute text-white bg-[#0361ff] rounded-[12px] px-8 py-2 mt-2 right-0 mr-4">
                    Subscribe in Web3
                </button>
            </div>
            {/* Upper Section */}
            <div>
                <div className="flex justify-center border-t border-b font-bold p-4 ">
                    <Link href="#"><a><span className="mx-4 hover:border-b-black hover:border-b-4 pb-2 active:border-b-black active:border-b-4 ">About</span></a></Link>
                    <Link href="#"><a><span className="mx-4 hover:border-b-black hover:border-b-4 pb-2 active:border-b-black active:border-b-4">Feed</span></a></Link>
                    <Link href="#"><a><span className="mx-4 hover:border-b-black hover:border-b-4 pb-2 active:border-b-black active:border-b-4">Community room</span></a></Link>
                </div>
                <div className="flex justify-center ">
                    <div className="mt-6 ">
                        <Image src="https://hips.hearstapps.com/hmg-prod/images/super-blue-blood-full-moon-over-cold-night-water-royalty-free-image-913435108-1553715664.jpg"
                            width="500" height="300" />
                    </div>
                    <div className="ml-12 mt-8">
                        <h1 className="text-3xl font-bold"> A letter from Odyssey's founder </h1>
                        <p> Why we plan to consolidate this newsletter with creatoreconomy.so </p>
                        <div className="flex">
                            <p className="text-xs m-2"> PETER YANG </p>
                            <p className="m-2"><AiOutlineHeart /></p>
                            <p className="m-2">11</p>
                            <p className="m-2"><FiMessageCircle /></p>
                            <p className="m-2">4</p>
                            <p className="m-2"><TiArrowForwardOutline /></p>
                            <p className="m-2"><BsBookmark /></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Section */}
            <div className="flex justify-center mt-12 ">
                {/* Left Side */}
                <div className="max-w-lg">
                    <div className="flex justify-between border-b font-bold shadow-sm">
                        <div className="flex ">
                            <Link href="#"><a><span className="mx-4 hover:border-b-black hover:border-b-4 pb-2 active:border-b-black active:border-b-4 ">New</span></a></Link>
                            <Link href="#"><a><span className="mx-4 hover:border-b-black hover:border-b-4 pb-2 active:border-b-black active:border-b-4">Top</span></a></Link>
                            <Link href="#"><a><span className="mx-4 hover:border-b-black hover:border-b-4 pb-2 active:border-b-black active:border-b-4">Community</span></a></Link>
                        </div>
                        <div>
                            <form className="flex items-center">
                                <label className="sr-only">Search</label>
                                <div className="relative w-full">

                                    <input type="text" id="simple-search" className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="p-2.5 ml-2 text-sm font-medium rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <FaSearch />
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-lg font-bold "> The future of web3 gaming </p>
                        <p> Good morning This week, we hosted an event on the future of Web3 gaming.
                            Next week, we have our weekly study group on multi-sig wallets. we've also... </p>
                            <div className="flex">
                            <p className="text-xs m-2"> KRISHNA </p>
                            <p className="text-xs m-2"> JUL 31 </p>
                            <p className="m-2"><AiOutlineHeart /></p>
                            <p className="m-2">1</p>
                            <p className="m-2"><FiMessageCircle /></p>
                            <p className="m-2"><TiArrowForwardOutline /></p>
                            <p className="m-2"><BsBookmark /></p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-lg font-bold "> Etherium's long-term roadmap </p>
                        <p> A round up of EthCC and everything else in Web3 </p>
                            <div className="flex">
                            <p className="text-xs m-2"> KRISHNA </p>
                            <p className="text-xs m-2"> JUL 24 </p>
                            <p className="m-2"><AiOutlineHeart /></p>
                            <p className="m-2"><FiMessageCircle /></p>
                            <p className="m-2"><TiArrowForwardOutline /></p>
                            <p className="m-2"><BsBookmark /></p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="ml-24">
                    <div className="border-b font-bold shadow-sm pb-4 ">
                        Recommendations
                    </div>
                    <div>
                        <img src = "" />
                        <p className="text-lg font-bold"> Creator Economy by P... </p>
                        <p className="text-sm"> Peter Yang </p>
                    </div>
                    <div>
                        <img src = "" />
                        <p className="text-lg font-bold"> Krishna's Newsletter </p>
                        <p className="text-sm"> Krishna </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Odyssey