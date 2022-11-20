import Link from "next/link";
type Props={
  letter:string
  name:string
  date:string
  comment:string
  id:number
}
const SingleComment = (props:Props) => {
  return (
    <div className="flex flex-col lg:flex-col lg:justify-between border-gray-600 rounded-[12px] ml-10 md:p-2 p-2 pb-1 w-[100%] lg:w-[80%] ">
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
            <p className="font-bold text-[10px] md:text-[12px] lg:text-[15px]">{props.name}</p>
            <p className="text-[#656774]  text-[7px] md:text-[10px] lg:text-[12px]">{props.date}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#2C2C34] p-3 ml-5 rounded-r-xl rounded-bl-3xl mt-2 lg:mt-2 text-white">
        <p className="  text-[8px] md:text-[10px] lg:text-[12px] leading-1">{props.comment}</p>
      </div>
    </div>
  );
};

export default SingleComment;
