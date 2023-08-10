import React from "react";

const Customer = () => {
  return (
    <div className="w-[768px] border-[1px] border-[#EAECF0] mt-[64px] container mx-auto p-[24px] rounded-2xl">
      <div className="flex justify-between">
        <div>
          <h6 className="text-[#3538CD] font-semibold text-[14px]">
            Customer Success
          </h6>
        </div>
        <div className="flex gap-[8px]">
          <div>
            <h6 className="text-[#3538CD] font-semibold">View job</h6>
          </div>
          <div>
            <img src="https://i.ibb.co/c3swCBT/arrow-up-right.png"></img>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex gap-[8px]">
            <div>
              <h3 className="font-semibold mt-[4px] text-[18px]">
                Customer Success Manager
              </h3>
            </div>
            <div className="flex justify-between    border-[1px] border-[#ABEFC6] w-[52px] h-[24px] bg-[#ECFDF3]  rounded-2xl relative">
              <img
                className="h-[8px] w-[8px] top-[8px] absolute left-[8px]"
                src="https://i.ibb.co/tXtNBr2/Dot-2.png"
              ></img>
              <h6 className="text-[#067647]   text-[14px] absolute top-[0px] left-[20px] font-medium">
                CX
              </h6>
            </div>
          </div>
          <p className="mt-[16px] text-[16px] text-[#475467]">
            We’re looking for a mid-level product designer to join our team.
          </p>
        </div>
        <div className="flex gap-[91px] mt-[16px]">
          <div className="flex gap-[8px]">
            <img
              className="h-[20px] w-[20px] mt-[2px]"
              src="https://i.ibb.co/LPLsLCg/marker-pin-02.png"
            ></img>
            <h6 className="font-medium text-[#475467]">Remote</h6>
          </div>
          <div className="flex gap-[8px]">
            <img
              className="h-[20px] w-[20px] mt-[2px]"
              src="https://i.ibb.co/K0BDBRJ/clock.jpg"
            ></img>
            <h6 className="font-medium text-[#475467]">Full-time</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
