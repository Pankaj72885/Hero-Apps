import AppStore from "../../../assets/icons/AppStore.svg"
import GooglePlay from "../../../assets/icons/GooglePlay.svg";

const HeaderSection = () => {
  return (
    <div className="pt-20 pb-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-7xl font-bold text-center opacity-90">
          We Build <br />{" "}
          <span className="custom-gradient bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-xl text-[#627382] text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button className="border rounded px-6 py-3 border-[#D2D2D2] flex items-center justify-center cursor-pointer hover:bg-[#D2D2D2]/80 font-semibold text-[#001931] gap-x-2.5"> <img className="size-8" src={GooglePlay} alt="Google Play icon" /> Google Play</button>
        <button className="border rounded px-6 py-3 border-[#D2D2D2] flex items-center justify-center cursor-pointer hover:bg-[#D2D2D2]/80 font-semibold text-[#001931] gap-x-2.5"> <img className="size-8" src={AppStore} alt="App Store Logo" /> App Store</button>
      </div>
    </div>
  );
};

export default HeaderSection;