import Container from "../Layout/Container";
import appError from "../../assets/App-Error.png"
import { useNavigate } from "react-router";

const AppNotFound = () => {
   const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(-1)
  }
  return (
    <Container className={`bg-[#F5F5F5]`}>
      <div className="py-20 flex flex-col items-center gap-10">
        <div className="flex justify-center items-center">
          <img className="size-auto" src={appError} alt="" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-semibold text-5xl text-[#001931] text-center">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-center">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
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

export default AppNotFound;
