import React from "react";
import "../index.css";

const menuItems = [
  { name: "Pollo 80", href: "#", current: false },
  { name: "Entradas y Piqueos", href: "#", current: false },
  { name: "Parrillas", href: "#", current: false },
  { name: "Promociones", href: "#", current: false },
  { name: "Delivery", href: "#", current: false },
  { name: "Carta", href: "#", current: false },
];

const Menu = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={
              item.current ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            <a
              href={item.href}
              className={`hover:text-blue-500 transition duration-300 ${
                item.current ? "border-b-2 border-blue-500" : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
