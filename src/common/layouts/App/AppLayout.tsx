import "./AppLayout.scss";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

export const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <SideBar />
        <section className="layout__main__outlet">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
