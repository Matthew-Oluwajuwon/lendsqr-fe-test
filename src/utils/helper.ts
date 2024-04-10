import { FormProps } from "antd";

export type FORM_ACTION =
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "READ"
  | "GET_DATA_BY_POST_METHOD";

export const routePath = {
  Login: "/",
  User: "/user",
  UserDetails: "/user-details/",
};

export const formConfig: FormProps = {
  autoComplete: "off",
  layout: "vertical",
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
  requiredMark: "optional",
};
