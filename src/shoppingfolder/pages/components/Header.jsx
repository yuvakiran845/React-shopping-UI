import React from "react";

const Header = () => {
  return (
    <div className="Headersection">
      <div className="left">
        <div className="title">
          <h2>Shopping Mall</h2>
        </div>
      </div>
      <div className="center">
        <ul>
          <li>Woman</li>
          <li>Men</li>
          <li>children</li>
          <li>beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="search..."/>
      </div>
      <div className="right">
        <div className="signin">
          Signin/Signup
        </div>
        <div className="cart">
          Cart
        </div>
      </div>
    </div>
  );
};

export default Header;
