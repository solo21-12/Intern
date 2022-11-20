import React, { FunctionComponent } from "react";

type Props = {
  title: string;
  description: string;
};

const Header: FunctionComponent<Props> = ({ title, description }) => (
  <div className="flex justify-between">
    <div>
      <h1 className="text-white font-bold text-sm md:text-2xl ">{title}</h1>
      <p className="text-gray-600 text-[8px] md:text-[10px] lg:text-[16px] font-medium">{description} </p>
    </div>
    <div>
      <div className="md:px-6 flex items-center justify-between space-x-4 2xl:container">
        <div className="flex">
          <div className="text-gray-400 bg-[#212227] p-4 rounded-[12px]">
            <svg
              xmlns="http://ww50w3.org/2000/svg"
              className="w-4 fill-current"
              viewBox="0 0 35.997 36.004"
            >
              <path
                id="Icon_awesome-search"
                data-name="search"
                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
              />
            </svg>
          </div>
          <button className="text-white md:ml-10 bg-[#0361ff] px-3 text-[10px] md:text-[15px] w-full lg:px-8 rounded-[12px]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
