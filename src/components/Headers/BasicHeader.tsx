import React from "react";

type Props = {
  title: string;
  navigate: () => void;
};

const BasicHeader = (props: Props) => {
  return (
    <div className="p-[16px]">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <i
            className="icon-arrow-left text-[32px]"
            onClick={props.navigate}
          ></i>
        </div>
        <h5 className="font-[600] text-center px-4">{props.title}</h5>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default BasicHeader;
