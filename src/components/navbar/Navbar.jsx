import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";
import BurgerMenu from "../burger menu/BurgerMenu";
import "./navbar.scss";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

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
      <div className="btn-nav">
        <div className="login-btn">Login</div>
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
    </nav>
  );
}
