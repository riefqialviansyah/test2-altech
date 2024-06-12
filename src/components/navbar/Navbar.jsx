import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";
import BurgerMenu from "../burger menu/BurgerMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      <div className="logo">
        <span className="logo-logo">
          <img src="./logo.png" alt="" />
        </span>
        <div className="logo-home">
          <span>SES</span>
          <p>Synergy ERP Solution</p>
        </div>
      </div>
      {location.pathname != "/login" && (
        <div className="btn-nav">
          <div
            className="login-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
          <div className="menu">
            {openMenu ? (
              <HiOutlineMenuAlt2
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
            ) : (
              <HiOutlineMenu
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
            )}
            {openMenu && <BurgerMenu />}
          </div>
        </div>
      )}
    </nav>
  );
}
