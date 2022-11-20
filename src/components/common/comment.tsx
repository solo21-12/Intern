import Link from "next/link";
import { useState } from "react";
import SingleComment from "./singleComment";
type Props = {
  letter: string;
  name: string;
  date: string;
  comment: string;
  id: number;
};
const Comment = (props: Props) => {
  const [hideComment, setHideComment] = useState(true);
  const [reply, setReplay] = useState(false);
  const comments = [
    {
      id: 1,
      letter: "J",

      name: "Jone Don",
      date: "Today, 10:20",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti aspernatur debitis ex itaque. Unde adipisci consequuntur cupiditate expedita veritatis, nisi, ipsa labore explicabo, esse enim maxime alias doloribus repellat.",
    },
    {
      id: 2,
      letter: "D",
      name: "David",
      date: "Today, 10:22",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti aspernatur debitis ex itaque. Unde adipisci consequuntur cupiditate expedita veritatis, nisi, ipsa labore explicabo, esse enim maxime alias doloribus repellat.",
    },
    {
      id: 3,
      letter: "J",
      name: "Jone Don",
      date: "Today, 10:25",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti aspernatur debitis ex itaque. Unde adipisci consequuntur cupiditate expedita veritatis, nisi, ipsa labore explicabo, esse enim maxime alias doloribus repellat.",
    },
  ];
  const mainComments = comments.slice(0, 2);
  return (
    <>
      <div className=" flex flex-col lg:flex-col lg:justify-between border-gray-600 rounded-[12px] md:p-7 pb-5 w-[100%] lg:w-[80%] ">
        <div className="flex justify-between items-center ">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="flex items-center">
                <div className="z-0 flex justify-center items-center bg-[#B149C2] text-white lg:text-sm rounded-full h-10 w-10">
                  {props.letter}
                </div>
              </a>
            </Link>
            <div>
              <p className="font-bold">{props.name}</p>
              <p className="text-[#656774]">{props.date}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#2C2C34] p-3 ml-5 rounded-r-xl rounded-bl-3xl mt-2 lg:mt-5 text-white">
          <p className=" text-[10px] md:text-[12px] lg:text-[14px] left-1 ">
            {props.comment}
          </p>
        </div>
      </div>
      <div className=" flex flex-col">
        {reply ? (
          <div>
            {comments.length >= 1 && comments.length >= 2 && hideComment ? (
              <div>
                {mainComments.map((comment) => {
                  return (
                    <SingleComment
                      key={comment.id}
                      id={comment.id}
                      letter={comment.letter}
                      name={comment.name}
                      date={comment.date}
                      comment={comment.comment}
                    />
                  );
                })}
                <p
                  className=" text-left ml-10 cursor-pointer font-bold text-[10px] pb-2 md:text-[12px] lg:text-[14px] text-[#0660FE]"
                  onClick={() => setHideComment(false)}
                >
                  + {comments.length - mainComments.length} replies
                </p>
              </div>
            ) : (
              <div>
                {comments.map((comment) => {
                  return (
                    <SingleComment
                      key={comment.id}
                      id={comment.id}
                      letter={comment.letter}
                      name={comment.name}
                      date={comment.date}
                      comment={comment.comment}
                    />
                  );
                })}
                <p className=" cursor-pointer font-bold text-[#0660FE] lg:ml-20" onClick={() => setReplay(false)}>
                  Hide replies
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <p className=" cursor-pointer text-[#0660FE] lg:ml-20" onClick={() => setReplay(true)}>
              + {comments.length} replies
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Comment;
