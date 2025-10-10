import AppStore from "../../../assets/icons/AppStore.svg"
import GooglePlay from "../../../assets/icons/GooglePlay.svg";

const Banner = () => {
  return (
    <div className="pt-20 pb-10 space-y-10">
      <div className="space-y-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center opacity-90">
          We Build <br />{" "}
          <span className="custom-gradient bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-base md:text-xl text-[#627382] text-center lg:w-[70%]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <a
          href="https://play.google.com/store/apps"
          target="_blank"
          className="border rounded px-3 py-1 md:px-6 md:py-3 border-[#D2D2D2] flex items-center justify-center cursor-pointer hover:bg-[#D2D2D2]/80 font-semibold text-[#001931] gap-x-2.5"
        >
          <img
            className="size-5 md:size-8"
            src={GooglePlay}
            alt="Google Play icon"
          />{" "}
          Google Play
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          className="border rounded px-3 py-1 md:px-6 md:py-3 border-[#D2D2D2] flex items-center justify-center cursor-pointer hover:bg-[#D2D2D2]/80 font-semibold text-[#001931] gap-x-2.5"
        >
          <img
            className="size-5 md:size-8"
            src={AppStore}
            alt="App Store Logo"
          />{" "}
          App Store
        </a>
      </div>
    </div>
  );
};

export default Banner;