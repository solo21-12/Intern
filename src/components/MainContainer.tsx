import React from "react";
import Header from "./Header";
import FeedSection from "./common/feedSection";
type Props = {
  title:string,
  description:string,
  children:JSX.Element,
};

const MainContainer: React.FC<Props> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
        <div className="mt-10">
          <Header
            title={title}
            description={description}
          />

          <div className="w-full  flex flex-col mt-10 items-center ">
                {children}
            </div>
          </div>
    </>
  );
};

export default MainContainer;