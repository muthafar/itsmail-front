import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a
              className="nav-link"
              href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}
            >
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1" className="nav-item me-5">
            <Payments />
          </li>,
          <li key="2" className="nav-item me-5 text-white">
            Credits: {auth.credits}
          </li>,
          <li key="3" className="nav-item">
            <a
              className="nav-link"
              href={`${process.env.REACT_APP_SERVER_URL}/api/logout`}
            >
              Log Out
            </a>
          </li>,
        ];
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to={auth ? "/surveys" : "/"}>
          ItsMail
        </Link>
        <ul className="navbar-nav flex-row align-items-center ">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
