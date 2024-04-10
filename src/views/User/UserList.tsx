/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from "../../common/components/DataTable";
import { useAppSelector } from "../../store/hooks";
import useRetriveDataFromStorage from "../../hooks/useRetriveDataFromStorage";
import { useState } from "react";
import moment from "moment";
import useColumn from "./column";
import TableMoreItems from "./TableMoreItems";

const UserList: React.FC = () => {
  const state = useAppSelector((state) => {
    return state.app;
  });
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    status: "",
    dateJoined: null,
  });

  const { items } = TableMoreItems()

  const { column } = useColumn(setFilters, filters, items);

  //   Hook to retrieve the user list stored in the localstorage
  useRetriveDataFromStorage();

  const filteredData = Array.isArray(state.users)
    ? state.users.filter((user) => {
        // Check if each field matches the corresponding filter value
        return (
          (!filters.organization ||
            user.organization.includes(filters.organization)) &&
          (!filters.username || user.username.includes(filters.username)) &&
          (!filters.email || user.email.includes(filters.email)) &&
          (!filters.phoneNumber ||
            user.phoneNumber.includes(filters.phoneNumber)) &&
          (!filters.status || user.status === filters.status) &&
          (!filters.dateJoined ||
            moment(user.dateJoined, "YYYY-MM-DD").isSame(
              moment(filters.dateJoined),
              "day"
            ))
        );
      })
    : [];

  // Transform the filtered data into the dataSource format
  const dataSource = filteredData.map((user, index) => ({
    ...user,
    key: index + 1,
  }));

  return (
    <div className="user-table">
      <DataTable column={column} dataSource={dataSource} />
    </div>
  );
};

export default UserList;
