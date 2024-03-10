import React from "react";
import Chart from "./Chart";

const BottomBar = () => {
  return (
    <div className="bg-white p-5 rounded-[15px]">
      <h2>Spending - Last 7 days</h2>
      <Chart />
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h3 className="text-[#928e85]">Total this month</h3>
          <p className="text-[28px] font-bold">$478.33</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-[14px] font-bold">+2.4%</p>
          <p className="text-[#928e85]">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
