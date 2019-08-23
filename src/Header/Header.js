import React from "react";
import "./Header.css";
import { API_KEY } from "../constant";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header-logo">
        {props.logoText}
        <img className="logo-image" src={props.image} alt="" />
      </div>
      <ul className="header-menu">
        {props.menu.map(item => (
          <li className="list-item" key={item}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
