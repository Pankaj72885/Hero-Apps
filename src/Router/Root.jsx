import { Outlet } from "react-router";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
