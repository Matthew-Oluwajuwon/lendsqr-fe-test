import { Button, Divider, Rate, Spin, Tabs, TabsProps } from "antd";
import useFetchSignleUser from "../../hooks/useFetchSingleUser";
import { useAppSelector } from "../../store/hooks";
import arrowBack from "../../assets/icons/arrow-back-outline.svg";
import avatar from "../../assets/icons/big-avatar.png";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../utils/helper";
import { Apiresponse } from "../../model/client/response";
import GeneralDetails from "./GeneralDetails";

export const UserDetails: React.FC = () => {
  const state = useAppSelector((state) => {
    return state.app;
  });

  document.title = state.record?.personalInformation?.username + " - Lendsqr";
  const navigate = useNavigate();
  const data: Apiresponse.Users = state.record;

  useFetchSignleUser();

  const items: TabsProps["items"] = [
    {
        label: "General Details",
        key: '1',
        children: <GeneralDetails data={data} />
    },
    {
        label: "Documents",
        key: '2'
    },
    {
        label: "Bank Details",
        key: '3'
    },
    {
        label: "Loans",
        key: '4'
    },
    {
        label: "Savings",
        key: '5'
    },
    {
        label: "App and System",
        key: '6'
    },
]

  return (
    <div className="users">
      <Spin
        spinning={state.record === undefined}
        fullscreen={state.record === undefined}
      >
        <button className="back" onClick={() => navigate(routePath.User)}>
          <img src={arrowBack} alt="" />
          <p>Back to users</p>
        </button>
        <div className="users__header">
          <h1 className="users__heading">User Details</h1>
          <div className="users__header__action">
            <Button className="users__header__action__blacklist">
              BLACKLIST USER
            </Button>
            <Button className="users__header__action__activate">
              ACTIVATE USER
            </Button>
          </div>
        </div>
        <section className="users__user">
          <div className="users__user__user-bio-wrapper">
            <div className="users__user__user-bio">
              <img src={avatar} alt="" className="users__user__avatar" />
              <div>
                <h1 className="users__user__name">
                  {data?.personalInformation?.username}
                </h1>
                <p className="users__user__code">
                  {data?._id?.slice(0, 11).toUpperCase()}
                </p>
              </div>
            </div>
            <Divider orientation="center" type="vertical" className="users__user__divider" />
            <div
              className="users__user_user-bio users__user__more"
            >
              <h3 className="users__user__tier">User's Tier</h3>
              <Rate count={3} value={Math.floor(Math.random() * 3)} disabled />
            </div>
            <Divider orientation="center" type="vertical"  className="users__user__divider"/>
            <div className="users__user_user-bio users__user__more">
              <h1 className="users__user__name">
                ₦{Intl.NumberFormat().format(data?.bankInformation?.amount)}
              </h1>
              <p className="users__user__code">
                {data?.bankInformation?.accountNo}/
                {data?.bankInformation?.bankName}
              </p>
            </div>
          </div>
          <div className="users__user__menu">
            <Tabs items={items} />
          </div>
        </section>
      </Spin>
    </div>
  );
};
