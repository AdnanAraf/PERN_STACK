import React from "react";
import Remote from "../Remote/Remote";
import Elements from "../Elements/Elements";

const Main = () => {
  return (
    <div>
      <header>
        <div className="py-[96px] ">
          <h1 className="text-[16px] text-[#3538CD] font-titleFont font-semibold text-center ">
            The team
          </h1>
          <h1 className="text-center text-[48px] text-[#101828] font-semibold">
            A small team with impressive cred.
          </h1>
          <h2 className="text-[#475467] text-[20px] font-titleFont text-center w-[768px] mx-auto mt-[24px] mb-[96px]">
            Want to work with some of the best global talent and build software
            used by all the companies you know and love? Join the team — we’re
            hiring!
          </h2>
        </div>
      </header>
      <div className="grid grid-cols-3  container mx-auto gap-[32px] ">
        <div>
          {/****************1st Image**************************** */}
          <div className="relative">
            <img
              className="h-[480px] w-full"
              src="https://i.ibb.co/smYjfHc/313e04574aeefdb9336d75b8b4509449-Expires-1692576000-Signature-HOImmb-BT-GQKx-Zkx-Br56-RCqofo-WFn-JQS.jpg"
            ></img>

            <div>
              <div className="absolute bottom-[24px] border-[0.1px] border-white  backdrop-blur-md  mx-[24px] px-[20px] py-[24px] h-[238px]  ">
                <div className="flex gap-[16px]">
                  <h1 className="text-[30px] font-semibold text-[#FFF] w-full">
                    Fahim Rahman
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[24px] w-[24px]"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col mt-[16px]">
                  <span className="text-[18px] font-semibold text-[#FFF] ">
                    Founder & CEO
                  </span>
                  <span className="text-[16px] font-normal font-titleFont text-[#FFF] leading-6">
                    Former co-founder of Opendoor. Early staff at IIUC IT and
                    Clearbit.
                  </span>
                </div>
                <div className="flex  gap-[20px] mt-[32px]">
                  <img src="https://i.ibb.co/BKSCsjn/Social-icon.png"></img>
                  <img src="https://i.ibb.co/RSc4Xkb/Group.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/************************  2nd image********************** */}
        <div>
          <div className="relative">
            <img
              className="h-[480px] w-full"
              src="https://i.ibb.co/N1pH1TH/a31a929677ba7b8a6c0f70236e078f14-Expires-1692576000-Signature-Orym-Ptd-Q5-RUh-I-y-Is4-Kw8-K-Pq-LPX8.png"
            ></img>
            <div>
              <div className="absolute bottom-[24px] border-[0.1px] border-white  backdrop-blur-md  mx-[24px] px-[20px] py-[24px] h-[238px]  ">
                <div className="flex gap-[16px]">
                  <h1 className="text-[30px] font-semibold text-[#FFF] w-full">
                    Aryan Ahmed
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[24px] w-[24px]"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col mt-[16px]">
                  <span className="text-[18px] font-semibold text-[#FFF] ">
                    Engineering Manager
                  </span>
                  <span className="text-[16px] font-normal font-titleFont text-[#FFF] leading-6">
                    Lead engineering teams at Figma, Pitch, and Protocol Labs.
                  </span>
                </div>
                <div className="flex  gap-[20px] mt-[32px]">
                  <img src="https://i.ibb.co/BKSCsjn/Social-icon.png"></img>
                  <img src="https://i.ibb.co/RSc4Xkb/Group.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*********** 3rd Image*********************/}
        <div>
          <div className="relative ">
            <img
              className="h-[480px] w-full"
              src="https://i.ibb.co/RpXz7MS/a3de0f761eb83bdf5b91e56d53a844cd-Expires-1692576000-Signature-I9wa1-Gz-XSSQg47bo3ga-Wj0ay-DAMHMl8z2.jpg"
            ></img>
            <div>
              <div className="absolute bottom-[24px] border-[0.1px] border-white  backdrop-blur-md  mx-[24px] px-[20px] py-[24px] h-[238px]  ">
                <div className="flex gap-[16px]">
                  <h1 className="text-[30px] font-semibold text-[#FFF] w-full">
                    Samir Islam
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[24px] w-[24px]"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col mt-[16px]">
                  <span className="text-[18px] font-semibold text-[#FFF] ">
                    Product Manager
                  </span>
                  <span className="text-[16px] font-normal font-titleFont text-[#FFF] leading-6">
                    Former PM for Airtable, Medium, Ghost, and Lumi.
                  </span>
                </div>
                <div className="flex  gap-[20px] mt-[32px]">
                  <img src="https://i.ibb.co/BKSCsjn/Social-icon.png"></img>
                  <img src="https://i.ibb.co/RSc4Xkb/Group.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*************** 4th Image************* */}
        <div className="relative mt-[32px]">
          <img
            className="h-[480px] w-full"
            src="https://i.ibb.co/cyKY5gT/84c2501a19b15782d0c0a08691aee554-Expires-1692576000-Signature-Sp-Jh-Y8s7-Ix-Vh-C-NI65csyi-A0ppin2hy.png"
          ></img>
          <div>
            <div className="absolute bottom-[24px] border-[0.1px] border-white  backdrop-blur-md  mx-[24px] px-[20px] py-[24px] h-[238px]  ">
              <div className="flex gap-[16px]">
                <h1 className="text-[30px] font-semibold text-[#FFF] w-full">
                  Hasanul Bari
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[24px] w-[24px]"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col mt-[16px]">
                <span className="text-[18px] font-semibold text-[#FFF] ">
                  Frontend Developer
                </span>
                <span className="text-[16px] font-normal font-titleFont text-[#FFF] leading-6">
                  Former frontend dev for Linear, Coinbase, and Postscript.
                </span>
              </div>
              <div className="flex  gap-[20px] mt-[32px]">
                <img src="https://i.ibb.co/BKSCsjn/Social-icon.png"></img>
                <img src="https://i.ibb.co/RSc4Xkb/Group.png"></img>
              </div>
            </div>
          </div>
        </div>
        {/*************  5th Image ********************/}
        <div className="relative mt-[32px]">
          <img
            className="h-[480px] w-full"
            src="https://i.ibb.co/2NF0yJ7/f94d16ff2a69fddde1d57225453725ff-Expires-1692576000-Signature-l-OWvrz-N9-B1-M06-Zav-PF-Hm-Ui-XPD3b-T.jpg"
          ></img>
          <div>
            <div className="absolute bottom-[24px] border-[0.1px] border-white  backdrop-blur-md  mx-[24px] px-[20px] py-[24px] h-[238px]  ">
              <div className="flex gap-[16px]">
                <h1 className="text-[30px] font-semibold text-[#FFF] w-full">
                  Nabil Ahmed
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[24px] w-[24px]"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col mt-[16px]">
                <span className="text-[18px] font-semibold text-[#FFF] ">
                  Backend Developer
                </span>
                <span className="text-[16px] font-normal font-titleFont text-[#FFF] leading-6">
                  Lead backend dev at Clearbit. Former Clearbit and Loom.
                </span>
              </div>
              <div className="flex  gap-[20px] mt-[32px]">
                <img src="https://i.ibb.co/BKSCsjn/Social-icon.png"></img>
                <img src="https://i.ibb.co/RSc4Xkb/Group.png"></img>
              </div>
            </div>
          </div>
        </div>
        {/********** 6th image ********/}
        <div className="mt-[32px]">
          <div className="relative">
            <img
              className="h-[480px] w-full"
              src="https://i.ibb.co/X2DPkWb/c3832f8fe1225e50e55a54834c3c2588-Expires-1692576000-Signature-EM-Bf-T2-XNv-Gt-UV8-X4-PPgwyo-V3-J-Osq.png"
            ></img>
            <div>
              <div className="absolute bottom-[24px] border-[0.1px] border-white  backdrop-blur-md  mx-[24px] px-[20px] py-[24px] h-[238px]  ">
                <div className="flex gap-[16px]">
                  <h1 className="text-[30px] font-semibold text-[#FFF] w-full">
                    Rafiqul Haque
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[24px] w-[24px]"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col mt-[16px]">
                  <span className="text-[18px] font-semibold text-[#FFF] ">
                    Product Designer
                  </span>
                  <p className=" font-normal font-titleFont text-[#FFF] leading-6">
                    Founding design team at Figma. Former Pleo, Stripe, and
                    Tile.
                  </p>
                </div>
                <div className="flex  gap-[20px] mt-[32px]">
                  <img src="https://i.ibb.co/BKSCsjn/Social-icon.png"></img>
                  <img src="https://i.ibb.co/RSc4Xkb/Group.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <hr class="w-full h-1   bg-gray-100 border-0  dark:bg-gray-700 mt-[96px]"></hr>
      </div>
      <Remote></Remote>
      <Elements />
    </div>
  );
};

export default Main;
