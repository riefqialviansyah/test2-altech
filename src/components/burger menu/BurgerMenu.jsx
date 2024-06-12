import { useNavigate } from "react-router-dom";
import "./burger-menu.scss";

export default function BurgerMenu() {
  const navigate = useNavigate();

  return (
    <div className="burger-menu-component">
      <div className="burger-option">
        <li
          className="login-btn-burger"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </div>
    </div>
  );
}
