/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import Comment from "./comment";

type Props = {
  letter: string;
  name: string;
  date: string;
  title: string;
  description: string;
  image: string;
  id: number;
};
const FeedSection = (props: Props) => {
  const [like, setLike] = useState(true);
 
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className="#2c2c34 bg-[#1e1f24] rounded-[12px] border border-gray-700 text-gray-200 mt-8">
      <div className="flex flex-col lg:flex-row lg:justify-between border-teal-600 rounded-[12px] px-7 pb-5 pt-5 w-[100%] lg:w-[80%] ">
        <div className="flex justify-between items-center ">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="flex items-center">
                <div className="z-0 flex justify-center items-center bg-blue-600 rounded-full h-10 w-10">
                  {props.letter}
                </div>
              </a>
            </Link>
            <div className=" text-xs md:text-base">
              <p className="font-bold ">{props.name}</p>
              <p className="text-[#656774]">{props.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2  mb-3">
        <div className="flex flex-col w-[100%] justify-between px-10">
          <h1 className="font-bold md:text-2xl pb-3">{props.title}</h1>
          <p className=" pb-5 text-xs md:text-base">
              {truncate(props.description, 150)}
              <button
                className=" text-xs md:text-base ml-0 md:ml-5 text-[#0660FE]"
              >
                <Link href={`newFeed/${props.id}`}>
                Read more
                </Link>
              </button>
            </p>
        </div>
      </div>
      <div>
        <div className="ImageWrapper  mb-3  ">
          <img src={props.image} alt="" className=" w-full Image " />
        </div>
        <div className="flex justify-start items-center space-x-5 text-[15px] md:py-2 px-10">
          <div className="flex flex-col  text-[12px] gap-5">
            <div className={` flex flex-row  `}>
              <p className="text-[#6d778a] mr-2">
                {like ? (
                  <AiFillHeart
                    className=" cursor-pointer text-pink-600 text-xl"
                    onClick={() => setLike(false)}
                  />
                ) : (
                  <AiFillHeart
                    className=" cursor-pointer text-xl"
                    onClick={() => setLike(true)}
                  />
                )}
              </p>
              <div className="z-0 flex justify-center items-center bg-blue-300 rounded-full h-5 w-5 -mr-3   ">
                S
              </div>
              <div className="z-10 flex justify-center items-center bg-green-600 rounded-full h-5 w-5 -mr-3">
                F
              </div>
              <div className="z-20 flex justify-center items-center bg-purple-600 rounded-full h-5 w-5 -mr-3">
                Q
              </div>
              <div className=" flex flex-row ml-5">
              
                  <p
                    className=" cursor-pointer"
                    
                  >
                    <Link href={`newFeed/${props.id}`}>
                    see comments
                    </Link>
                  </p>
                
                <p className="background  ml-1 rounded px-1 text-[12px] text-white">
                  + 3
                </p>
                {/* {showComment ? (
                  <p
                    className=" cursor-pointer"
                    onClick={() => setShowComment(false)}
                  >
                    hide comments
                  </p>
                ) : (
                  <p
                    className=" cursor-pointer"
                    onClick={() => setShowComment(true)}
                  >
                    see comments
                  </p>
                )}
                <p className="background  ml-1 rounded px-1 text-[12px] text-white">
                  + 3
                </p> */}
              </div>
            </div>
            {/* <div className="text-[#1754bb] ">
              {showComment && comments.length >= 1 && (
                <>
                  {comments.map((comment) => {
                    return (
                      <Comment
                        key={comment.id}
                        id={comment.id}
                        letter={comment.letter}
                        name={comment.name}
                        date={comment.date}
                        comment={comment.comment}
                      />
                    );
                  })}
                </>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedSection;
