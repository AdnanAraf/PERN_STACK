import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0C111D] w-full h-[336px] mt-[96px]">
        <div className="flex justify-center pt-[64px] gap-[9px]">
          <img
            className="w-[32px] h-[32px]"
            src="https://i.ibb.co/jvYRxJk/Pern-Logo-1.png"
          ></img>
          <img src="https://i.ibb.co/wyLt2Lv/Logo-Title.png"></img>
        </div>
        <div>
          <ul className="flex gap-[32px] mt-[32px] justify-center">
            <Link
              className="text-[#EAECF0] text-[16px] font-semibold font-titleFont"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-[#EAECF0] text-[16px] font-semibold font-titleFont"
              to="/"
            >
              About
            </Link>
            <Link
              className="text-[#EAECF0] text-[16px] font-semibold font-titleFont"
              to="/"
            >
              Pricing
            </Link>
            <Link
              className="text-[#EAECF0] text-[16px] font-semibold font-titleFont"
              to="/"
            >
              Contract
            </Link>
          </ul>
        </div>
        <div className="border-[1px] border-[#475467] w-full container mx-auto mt-[64px]"></div>
        <div className="mt-[32px] flex justify-between container mx-auto">
          <div>
            <h3 className="text-[#D0D5DD] text-[16px] font-titleFont">
              © 2023 PernStack. All rights reserved.
            </h3>
          </div>
          <div>
            <ul className="flex gap-[16px]">
              <Link
                className="text-[#D0D5DD] text-[16px] font-titleFont"
                to="/"
              >
                Terms
              </Link>
              <Link
                className="text-[#D0D5DD] text-[16px] font-titleFont"
                to="/"
              >
                Privacy
              </Link>
              <Link
                className="text-[#D0D5DD] text-[16px] font-titleFont"
                to="/"
              >
                Cookies
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
