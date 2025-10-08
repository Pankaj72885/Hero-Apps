import { createBrowserRouter } from "react-router";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MyInstallation from "../Pages/MyInstallation";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AllApps />,
        loader: () => fetch("/apps.json"),
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
        loader: () => fetch("/apps.json"),
      },
      {
        path: "/installation",
        element: <MyInstallation />,
      },
    ],
  },
]);

export default router;
