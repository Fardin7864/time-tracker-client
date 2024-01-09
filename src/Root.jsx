import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { CiMenuFries } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";
import Clock from "./components/clock/Clock";

 
const Root = () => {
    const navLinks = 
    <>
    <li><NavLink to={'/'}><FaHome/>Dashboard</NavLink></li>
    <li><NavLink to={'/projects'}><GoProjectRoadmap/>Projects</NavLink></li>
    <li><NavLink to={'/notes'}><FaRegNoteSticky/>Notes</NavLink></li>
    <li><NavLink to={'/Time'}><IoMdTimer/>Time</NavLink></li>
    </>
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-[#BBE1FA]">
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button lg:hidden  pt-5 pl-5"
        >
          <CiMenuFries className=" text-2xl font-bold text-black"/>
        </label>
        <Navbar/>
        <Outlet/>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-[#fff] gap-3 bg-[#0F4C75]">
          {/* Sidebar content here */}
          {navLinks}
        </ul>
      </div>
    </div>
  );
};


export default Root;