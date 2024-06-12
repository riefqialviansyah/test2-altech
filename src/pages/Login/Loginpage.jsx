import Navbar from "../../components/navbar/Navbar";
import Contact from "../../components/contact/Contact";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { successAlert } from "../../helpers/Alerts";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./login.scss";

export default function LoginPage() {
  const [inputUser, setInputUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handlerChage = (e) => {
    const { name, value } = e.target;
    setInputUser({ ...inputUser, [name]: value });
  };
  return (
    <>
      <Navbar />
      <div className="login-page">
        <ToastContainer />
        <div className="box-login">
          <div className="title">Login</div>
          <div className="form-input">
            <div className="input-user">
              <input
                type="text"
                name="email"
                placeholder="Email..."
                onChange={handlerChage}
              />
              <input
                type="password"
                name="password"
                placeholder="Password..."
                onChange={handlerChage}
              />
            </div>
            <div className="btn-login">
              <div
                className="btn-submit"
                onClick={() => {
                  successAlert(`Success Login! `);
                  setTimeout(() => {
                    navigate("/");
                  }, 2000);
                }}
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
