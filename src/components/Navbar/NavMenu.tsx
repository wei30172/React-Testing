import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  menuItems: {
    name: string;
    href: string;
  }[];
};

const NavMenu = ({ menuItems }: Props) => {
  const navigate = useNavigate();
  return (
    <li className="nav-menu flex">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.href}
            role="navigation"
            className="navbar_menu_item cursor-pointer"
            onClick={() => navigate(`${item.href}`)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavMenu;
