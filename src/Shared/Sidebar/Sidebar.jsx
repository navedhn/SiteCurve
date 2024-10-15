import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Logo from "../../assets/Logo.svg";
import SelectorDropdown from "../../assets/SelectorDropdown.svg";
import "./Sidebar.scss";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Stats from "../Header/Components/Stats";
import { IoChevronDownOutline } from "react-icons/io5";
import CustomButton from "../CustomButton/CustomButton";

const Sidebar = () => {
  const menu = [{ name: "Features", icon: <IoChevronDownOutline />, dropdown: true }, { name: "Pricing" }, { name: "Company", icon: <IoChevronDownOutline />, dropdown: true }, { name: "Resources", icon: <IoChevronDownOutline />, dropdown: true }, { name: "Enterprise" }, { name: "Login" }];
  const [show, setShow] = useState(false);
  return (
    <div id="header-desktop">
      <div id="sidebar">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <ReactSVG src={Logo} className="logo" />
            <div className="dropdown">
              <ReactSVG src={SelectorDropdown} className="selector" />
            </div>
          </div>
          <button className="side-btn" onClick={() => setShow(!show)}>
            {show === false ? <IoMdMenu color="#fff" size={20} /> : <IoMdClose color="#fff" size={20} />}
          </button>
        </div>
        <div className="my-2">
          <Stats />
        </div>
        {show !== false && (
          <div>
            <ul className="menu">
              {menu &&
                menu.map((item, idx) => (
                  <li className="menu-items" key={idx}>
                    <div>{item.name}</div>&nbsp;{item.dropdown === true && <div>{item.icon}</div>}
                  </li>
                ))}
            </ul>
            <div className="mt-3 -mx-2">
              <CustomButton title="Create Landscapes" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
