import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytlogo from "../Images/ytlogo.png";
import ytlogomobile from "../Images/ytlogomobile.png";

import { SlMenu } from "react-icons/sl";
// import { IoIosSearch } from "react-icons/io";
// import { RiVideoAddLine } from "react-icons/ri";
// import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import loader from "../shared/loader";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const searchQueryHandler = (e) => {
    if (e?.key === "Enter" && e === "searchButton" && searchQuery?.length > 0) {
      navigate(`SearchResult/${searchQuery}`);
    }
  };
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];

  return (
    <>
      <div className=" flex justify-between flex-row h-10 sticky z-10 top-0 px-4 md:px-5  bg-black">
        {loading && loader}

        <div className="flex items-center h-5">
          {pageName !== "video " && (
            <div
              className=" flex md:hidden md:mr-6 items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
              onClick={mobileMenuToggle}
            >
              { mobileMenu ?( <CgClose className='text-white text-xl' />) : (<SlMenu  className='text-white text-xl'/>) }
            </div>
          )}

        <Link className='flex h-full items-center bg-slate-50' to={'/'}>
        <img src={ytlogo} alt="youtube" className='hidden h-full  dark:md:block text-white' />
          <img src={ytlogomobile} alt="youtube" className='h-full  dark:md:hidden' />
         </Link>
       
        </div>
      </div>
    </>
  );
};

export default Header;
