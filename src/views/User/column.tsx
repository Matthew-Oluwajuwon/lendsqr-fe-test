/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropdown } from "antd";
import { ColumnProps } from "antd/es/table";
import { Apiresponse } from "../../model/client/response";
import { userStatus } from "../../utils/helper";
import Filter from "./Filter";
import more from "../../assets/icons/more.png";
import filterIcon from "../../assets/icons/filter-btn.png";

const useColumn = (setFilters: any, filters: any, items: any[]) => {
  const column: ColumnProps<Apiresponse.Users>[] = [
    {
      title: "ORGANIZATION",
      dataIndex: "organization",
      key: "1",
      ellipsis: true,
      filterDropdown: ({ clearFilters, confirm }: any) => {
        return (
          <Filter
            setFilters={setFilters}
            filters={filters}
            clearFilters={clearFilters}
            confirm={confirm}
          />
        );
      },
      filterIcon: () => <img src={filterIcon} alt="" />,
    },
    {
      title: "USERNAME",
      dataIndex: "username",
      key: "2",
      ellipsis: true,
      filters: [],
      filterIcon: () => <img src={filterIcon} alt="" />,
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "3",
      ellipsis: true,
      filters: [],
      filterIcon: () => <img src={filterIcon} alt="" />,
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phoneNumber",
      key: "4",
      ellipsis: true,
      filters: [],
      filterIcon: () => <img src={filterIcon} alt="" />,
      render: (_, record: Apiresponse.Users) => {
        return (
          <p>
            {record.phoneNumber
              ?.replaceAll("+234", "0")
              .replaceAll("(", "")
              .replaceAll(")", "")
              .replaceAll(" ", "")
              .replaceAll("-", "")}
          </p>
        );
      },
    },
    {
      title: "DATE JOINED",
      dataIndex: "dateJoined",
      key: "5",
      ellipsis: true,
      width: "12rem",
      filters: [],
      filterIcon: () => <img src={filterIcon} alt="" />,
      render: (_, record: Apiresponse.Users) => {
        return (
          <p>{`${new Date(
            record.dateJoined.split(" ")[0]
          ).toDateString()} ${new Date(
            record.dateJoined.split(" ")[0]
          ).toLocaleTimeString()}`}</p>
        );
      },
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "6",
      ellipsis: true,
      filters: [],
      filterIcon: () => <img src={filterIcon} alt="" />,
      render: (_, record: Apiresponse.Users) => {
        return (
          <p
            style={{
              color:
                record.status?.toLowerCase() === userStatus.ACTIVE
                  ? "#39CD62"
                  : record.status?.toLowerCase() === userStatus.BLACKLISTED
                  ? "#E4033B"
                  : record.status?.toLowerCase() === userStatus.INACTIVE
                  ? "#545F7D"
                  : "#E9B200",
              backgroundColor:
                record.status?.toLowerCase() === userStatus.ACTIVE
                  ? "#39CD6210"
                  : record.status?.toLowerCase() === userStatus.BLACKLISTED
                  ? "#E4033B10"
                  : record.status?.toLowerCase() === userStatus.INACTIVE
                  ? "#545F7D10"
                  : "#E9B20010",
              textAlign: "center",
              borderRadius: "100px",
              padding: "5px 15px",
              width: "fit-content",
            }}
          >
            {record.status}
          </p>
        );
      },
    },
    {
      key: "6",
      ellipsis: true,
      fixed: "right",
      width: "50px",
      render: () => {
        return (
          <Dropdown
            trigger={["click", "hover"]}
            rootClassName="dropdown"
            overlayClassName="dropdown"
            placement="bottomLeft"
            menu={{ items }}
          >
            <button type="button">
              <img src={more} />
            </button>
          </Dropdown>
        );
      },
    },
  ];

  return {
    column,
  };
};

export default useColumn;