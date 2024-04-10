import { Outlet } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import authImage from "../../../assets/images/login-img.svg";
import "./AuthLayout.scss";

export const AuthLayout: React.FC = () => {
  return (
    <div className="auth-container">
      <section className="auth-container__left">
        <img src={logo} alt="" />
        <img src={authImage} alt="" className="auth-container__image" />
      </section>
      <section className="auth-container__right">
        <Outlet />
      </section>
    </div>
  );
};
