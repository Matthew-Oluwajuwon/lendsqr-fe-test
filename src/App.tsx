import { ConfigProvider } from "antd"
import { RouterProvider } from "react-router-dom"
import { router } from "./route/router.config"
import { antdThemeConfig } from "./antdTheme.config"

const App = () => {
  return (
    <ConfigProvider theme={antdThemeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App