import blacklistUser from "../../assets/icons/user-blacklist.png";
import activateUser from "../../assets/icons/activate-user.png";
import viewUser from "../../assets/icons/eye-outline.png";
import { MenuProps } from "antd";

const TableMoreItems = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#545F7D",
            margin: ".3rem 0",
          }}
        >
          <img src={viewUser} alt="" />
          <p>View Details</p>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#545F7D",
            margin: ".3rem 0",
          }}
        >
          <img src={blacklistUser} alt="" />
          <p>Blacklist User</p>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#545F7D",
            margin: ".3rem 0",
          }}
        >
          <img src={activateUser} alt="" />
          <p>Activate User</p>
        </div>
      ),
      key: "3",
    },
  ];

  return { items };
};

export default TableMoreItems;
