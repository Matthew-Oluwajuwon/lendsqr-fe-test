import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/router.config";
import { antdThemeConfig } from "./antdTheme.config";
import { App as AntdApp } from "antd";

const App = () => {
  return (
    <ConfigProvider theme={antdThemeConfig}>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
