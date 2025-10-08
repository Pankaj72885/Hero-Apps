import { Outlet } from "react-router";
import Container from "../Components/Layout/Container";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";

const Root = () => {
  return (
    <div>
      <Container className="bg-white border-b border-[#e9e9e9]">
        <Header />
      </Container>

      <Outlet />

      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Root;
