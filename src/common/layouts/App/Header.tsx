import { Button, ConfigProvider, Input } from "antd";
import logo from "../../../assets/images/logo.svg";
import search from "../../../assets/icons/search.png";
import notificationBell from "../../../assets/icons/notification.png";
import avatar from "../../../assets/images/avatar.svg"
import dropdown from "../../../assets/icons/dropdown.png"
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <section className="header__logo">
        <img src={logo} alt="" />
      </section>
      <section className="header__search">
        <ConfigProvider theme={{components: {
            Input: {
                controlHeight: 40,
                borderRadius: 8,
                
            }
        }}}>
          <Input.Search
            placeholder="Search for anything"
            rootClassName="header__search"
            enterButton={
              <Button
                type="primary"
                style={{ width: 56 }}
                className="header__search-btn"
                icon={<img src={search} />}
              />
            }
          />
        </ConfigProvider>
      </section>
      <section className="header__user">
        <Link to="#" className="header__user__link">Docs</Link>
        <img src={notificationBell} alt="" />
        <div className="header__user__account">
            <img src={avatar} alt="" />
            <h2 className="header__user__name">Adedeji</h2>
            <img src={dropdown} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
