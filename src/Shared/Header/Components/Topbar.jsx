import React from "react";
import { ReactSVG } from "react-svg";

// assets
import Logo from "../../../assets/Logo.svg";
import SelectorDropdown from "../../../assets/SelectorDropdown.svg";
import { IoChevronDownOutline } from "react-icons/io5";
import CustomButton from "../../CustomButton/CustomButton";

const TopBar = () => {
  const menu = [{ name: "Features", icon: <IoChevronDownOutline />, dropdown: true }, { name: "Pricing" }, { name: "Company", icon: <IoChevronDownOutline />, dropdown: true }, { name: "Resources", icon: <IoChevronDownOutline />, dropdown: true }, { name: "Enterprise" }, { name: "Login" }];

  return (
    <div className="top-bar">
      <div className="logo">
        <ReactSVG src={Logo} />
        <div className="dropdown">
          <ReactSVG src={SelectorDropdown} />
        </div>
      </div>
      <ul className="menu">
        {menu &&
          menu.map((item, idx) => (
            <li className="menu-items" key={idx}>
              {item.name}&nbsp;{item.dropdown === true && <div>{item.icon}</div>}
            </li>
          ))}
      </ul>
      <div className="header-btns">
        <CustomButton title="Create Landscape" />
        <button className="primary-btn-border">Discover Landscapes</button>
      </div>
    </div>
  );
};

export default TopBar;
