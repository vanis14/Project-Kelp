import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="mid">
        <nav>
          <ul class="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ItemList">Item List</Link>
            </li>
            <li>
              <Link to="/AddItem">Add Item</Link>
            </li>
            <li>
              <Link to="/Search">Search Item</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;