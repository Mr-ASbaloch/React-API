import React, { useContext } from "react";

// react-router-dom
import { Link, useLocation, useNavigate } from "react-router-dom";
// react-icons
import { slMenu } from "react-icons/sl";
// images
import ytlogomobile from "../Images/ytlogomobile.png";
import ytlogo from "../Images/ytlogo.png";

import { Context } from "../context/contextApi";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] =useState("")

  const {loading, mobileMenu,setMobileMenu} = useContext (Context)


  return <div></div>;
};

export default Header;
