import { createBrowserRouter } from "react-router-dom";
import { routePath } from "../utils/helper";
import { Login, User, UserDetails } from "../views";
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
    path: routePath.User,
    children: [
      {
        index: true,
        Component: User,
      },
      {
        path: routePath.UserDetails + ":id",
        Component: UserDetails
      }
    ],
  },
]);
