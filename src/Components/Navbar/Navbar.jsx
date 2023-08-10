import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto container gap-[40px] h-[80px] font-titleFont font-semibold ">
      <img src="https://i.ibb.co/ccfDq66/Logo-1.png"></img>

      <ul className="flex gap-[32px] mr-auto ">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Pricing</Link>
        <Link>Contract</Link>
      </ul>
      <div className="flex">
        <button className="h-[44px] w-[95px]">
          <Link to="">Login</Link>
        </button>
        <button className="bg-[#444CE7] h-[44px] w-[95px] rounded-[8px]">
          <Link className="text-white" to="">
            Signup
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
