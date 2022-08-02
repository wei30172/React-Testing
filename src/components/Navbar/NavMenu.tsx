import React from "react";
import "./NavMenu.scss";

type Props = {
  menuItems: {
    name: string;
    href: string;
  }[];
};

const NavMenu = ({ menuItems }: Props) => {
  return (
    <li className="nav-menu flex">
      {menuItems.map((item) => (
        <a
          key={item.href}
          role="navigation"
          className="navbar_menu_item cursor-pointer"
          href={item.href}
        >
          {item.name}
        </a>
      ))}
    </li>
  );
};

export default NavMenu;
