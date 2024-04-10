/* eslint-disable @typescript-eslint/no-explicit-any */
import "./DataTable.scss"
import { Table } from "antd";
import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAllAppKeys } from "../../store";
import { AppProps } from "../../model/application/props";
import nextArrow from "../../assets/icons/next-btn.png";
import prevArrow from "../../assets/icons/prev-btn.png";

export const DataTable: React.FC<AppProps.TableData> = ({
  column,
  dataSource,
  loading,
  total,
  scrollX,
}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return state.app;
  });
  const onPaginate = useCallback(
    (page: number) => {
      dispatch(
        setAllAppKeys({
          ...state,
          page: page - 1,
        })
      );
    },
    [dispatch, state]
  );

  return (
    <Table
      columns={column}
      loading={loading}
      dataSource={dataSource}
      className="data-table"
      pagination={{
        position: ["bottomRight"],
        onChange: onPaginate,
        itemRender: (_current: any, type: any, originalElement: any) => {
          if (type === "prev") {
            return (
              <a className="prev">
                <img src={prevArrow} />
              </a>
            );
          }
          if (type === "next") {
            return (
              <a className="next">
                <img src={nextArrow} />
              </a>
            );
          }
          return originalElement;
        },
        showSizeChanger: false,
        hideOnSinglePage: true,
        total: total,
        pageSize: 10,
        showTotal: (total: number) => {
          return(
          <div className="pagination">
            <span className="">Showing </span>{" "}
            <span className="">
              {state.page + 1} out of {total}
            </span>
          </div>
        )},
      }}
      scroll={{ x: scrollX ? scrollX : 800 }}
    />
  );
};
