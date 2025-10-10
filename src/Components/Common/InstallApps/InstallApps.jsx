import formatNumber from "../../../Utils/formatNumber";
import { removeData } from "../../../Utils/localData";
import download from "../../../assets/icons/download.svg";
import rating from "../../../assets/icons/star.svg";
import { getLocalData } from "../../../Utils/localData";

const InstallApps = ({ apps, setInstallApp }) => {
  const handleClick = () => {
    removeData(apps);
    setInstallApp(getLocalData());
  };
  return (
    <div className=" rounded p-4 flex justify-between items-center w-full gap-4 bg-white ">
      <div className="size-20 flex justify-center items-center">
        <img
          className="bg-cover rounded-lg w-auto h-full"
          src={apps.image}
          alt={`${apps.title} logo`}
        />
      </div>
      <div className="flex-1">
        <div>
          <h2 className="text-xl font-medium text-[#001931]">{apps.title}</h2>
        </div>
        <div className="flex items-center w-full ]">
          <div className="flex justify-center items-center rounded gap-2 px-2.5 py-1.5">
            <img className="size-4" src={download} alt="" />
            <p className="text-[#00d390]">{formatNumber(apps.downloads)}</p>
          </div>
          <div className="flex justify-center items-center rounded gap-2 px-2.5 py-1.5">
            <img className="size-4" src={rating} alt="" />
            <p className="text-[#ff8811]">{formatNumber(apps.ratingAvg)}</p>
          </div>
          <div className="flex justify-center items-center rounded gap-2 px-2.5 py-1.5">
            <p className="text-[#627382]">{`${apps.size} MB`}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleClick}
          className="px-4 py-3 rounded-xl bg-[#00D390] text-white font-semibold cursor-pointer"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallApps;
