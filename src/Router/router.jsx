import { createBrowserRouter } from "react-router";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Components/Common/ErrorPage";
import Home from "../Pages/Home";
import MyInstallation from "../Pages/MyInstallation";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: <h1>loading...</h1>,
    loader: () => fetch("/data.json"),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AllApps />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/installation",
        element: <MyInstallation />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
