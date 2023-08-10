import React from "react";
import ProductDesign from "./ProductDesign";
import SoftwareDevelopment from "./SoftwareDevelopment";
import Customer from "./Customer";
import Sales from "./Sales";
import Marketting from "./Marketting";
import Contract from "../Contract/Contract";

const Elements = () => {
  return (
    <div>
      <div>
        <ProductDesign />
        <SoftwareDevelopment />
        <Customer />
        <Sales />
        <Marketting />
        <Contract />
      </div>
    </div>
  );
};

export default Elements;
