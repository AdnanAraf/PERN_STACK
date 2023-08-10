import React from "react";

const Contract = () => {
  return (
    <div className="bg-[#F9FAFB] w-[100%] h-[332px] container mx-auto mt-[96px] rounded-2xl p-[64px]">
      <div>
        <div>
          <h1 className="text-[#101828] font-semibold text-[36px] text-center">
            Can’t see a position that suits you?
          </h1>
          <h3 className="container leading-8 mx-auto text-center text-[20px] mt-[20px]  h-[60px] font-normal text-[#475467]">
            We’re always looking for smart, motivated people.<br></br>Send us
            your CV and let’s have a chat. We’d love to meet you!
          </h3>
        </div>
        <div className="flex gap-[20px] justify-center ">
          <div className="bg-[#FFF] w-[128px] h-[48px] border-[1px] border-[#D0D5DD] rounded-lg mt-[32px]  shadow-3xl ">
            <button className="text-[#344054] font-semibold py-[12px] px-[20px] ">
              Learn more
            </button>
          </div>
          <div>
            <div className="bg-[#444CE7] w-[128px] h-[48px] border-[1px] border-[#444CE7] rounded-lg mt-[32px]  shadow-3xl">
              <button className="text-[#FFF] font-semibold py-[12px] px-[20px] ">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
