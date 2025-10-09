import { Outlet } from "react-router";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";

const Root = () => {
  

  return (
    <div className="font-inter flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
