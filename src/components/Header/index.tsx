import React from "react";
import "./header.css";

const Header: React.FunctionComponent = () => {
  return (
    <header className="header-wrapper">
      <div className="dashboard-logo">
        <img
          src="https://smartalentit.com/wp-content/uploads/2024/06/Logo-02-e1717467285460.png"
          alt="User Profile Image"
        />
      </div>
      <div className="user-profile"></div>
      <div className="responsive-menu"></div>
    </header>
  );
};

export default Header;
