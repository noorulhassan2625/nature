import React from "react";
import { NavLink } from "react-router-dom"; 
import logo from "../Assets/Images/logo.png";

function TopNavbar() {
  return (
    <>
      <div className="top-navbar flex w-full px-10 border-b-[1px] shadow-[0px_1px_2px_1px_rgba(245,204,245,1);] border-[#B7F1E1]">
        <div className="logoImg">
          <img src={logo} width={"180px"} alt="logo" />
        </div>
        <div className="navlist ml-auto mt-10">
          <nav>
            <ul className="navbar flex flex-wrap">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "mx-5 text-white bg-[#EE1E46] mt-4 px-4 py-2 rounded-[5px]" : 
                               "mx-5 border-b-2 border-[#EE1E46] text-white bg-[#4E1624] mt-4 px-4 py-2"
                  }
                  end>Home</NavLink>
              </li>
              <li>
                <NavLink 
                  to="/stars-and-trees" 
                  className={({ isActive }) => 
                    isActive ? "mx-5 text-white bg-[#EE1E46] mt-4 px-4 py-2 rounded-[5px]" : 
                               "mx-5 border-b-2 border-[#EE1E46] text-white bg-[#4E1624] mt-4 px-4 py-2"
                  }>Deserts</NavLink>
              </li>
              <li>
                <NavLink 
                  to="/walk-with-nature" 
                  className={({ isActive }) => 
                    isActive ? "mx-5 text-white bg-[#EE1E46] mt-4 px-4 py-2 rounded-[5px]" : 
                               "mx-5 border-b-2 border-[#EE1E46] text-white bg-[#4E1624] mt-4 px-4 py-2"
                  }>Oceans</NavLink>
              </li>
              <li>
                <NavLink 
                  to="/beauty-of-nature-speaks" 
                  className={({ isActive }) => 
                    isActive ? "mx-5 text-white bg-[#EE1E46] mt-4 px-4 py-2 rounded-[5px]" : 
                               "mx-5 border-b-2 border-[#EE1E46] text-white bg-[#4E1624] mt-4 px-4 py-2"
                  }>Greenlands</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
