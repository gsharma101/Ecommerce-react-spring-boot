import React from "react";
import "./Demo.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Demo = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-4 md:col-span-2 lg:col-span-1 flex gap-5 items-center p-5 w-full border rounded-md h-[75px] css-1nj0gs7">
        <div className="rounded-md p-2 bg-[#000025]">
          <AccountBalanceIcon />
        </div>
        <div>
          <p className="font-bold text-lg">$203k</p>
          <p className="font-medium">Total Income</p>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1 flex gap-5 items-center p-5 w-full border rounded-md h-[75px] css-1nj0gs7">
        <div className="rounded-md p-2 bg-[#000025]">
          <AccountBalanceIcon />
        </div>
        <div>
          <p className="font-bold text-lg">$203k</p>
          <p className="font-medium">Total Income</p>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1 flex gap-5 items-center p-5 w-full border rounded-md h-[75px] css-1nj0gs7">
        <div className="rounded-md p-2 bg-[#000025]">
          <AccountBalanceIcon />
        </div>
        <div>
          <p className="font-bold text-lg">$203k</p>
          <p className="font-medium">Total Income</p>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1 flex gap-5 items-center p-5 w-full border rounded-md h-[75px] css-1nj0gs7">
        <div className="rounded-md p-2 bg-[#000025]">
          <AccountBalanceIcon />
        </div>
        <div>
          <p className="font-bold text-lg">$203k</p>
          <p className="font-medium">Total Income</p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
