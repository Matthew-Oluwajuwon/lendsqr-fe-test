import { createBrowserRouter } from "react-router-dom";
import { routePath } from "../utils/helper";
import { Login, User } from "../views";
import { AppLayout } from "../common/layouts/App/AppLayout";
import { AuthLayout } from "../common/layouts/Auth/AuthLayout";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: routePath.Login,
        Component: Login,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: routePath.User,
        Component: User,
      },
    ],
  },
]);
