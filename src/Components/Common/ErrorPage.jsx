import Container from "../Layout/Container";
import errorPage from "../../assets/error-404.png"
import { useNavigate } from "react-router";

const ErrorPage = () => {
   const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(-1)
  }
  return (
    <Container className={`bg-[#F5F5F5]`}>
      <div className="py-20 flex flex-col items-center gap-10">
        <div className="flex justify-center items-center">
          <img className="size-auto" src={errorPage} alt="" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-semibold text-5xl text-[#001931]">
            Oops, page not found!
          </h1>
          <p className="">The page you are looking for is not available.</p>
          <button
            onClick={handleClick}
            className="custom-gradient  px-4 py-2 rounded-sm text-base font-semibold text-white hover:scale-100 md:hover:scale-105  scale-90 md:scale-100 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;
