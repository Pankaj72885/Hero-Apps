import formatNumber from "../../Utils/formatNumber";
import download from "../../assets/icons/download.svg";
import rating from "../../assets/icons/star.svg";

const Card = ({ data }) => {
  return (
    <div className=" rounded p-4 flex flex-col justify-start items-center gap-4 bg-white">
      <div>
        <img
          className="h-[17.8125rem] w-auto bg-cover rounded-lg"
          src={data.image}
          alt={`${data.title} logo`}
        />
      </div>
      <div>
        <h2 className="text-xl font-medium text-[#001931]">{data.title}</h2>
      </div>
      <div className="flex justify-between items-center w-full ]">
        <div className="flex justify-center items-center rounded gap-2 px-2.5 py-1.5 bg-[#f1f5e8]">
          <img src={download} alt="" />
          <p className="text-[#00d390]">{formatNumber(data.downloads)}</p>
        </div>
        <div className="flex justify-center items-center rounded gap-2 px-2.5 py-1.5 bg-[#fff0e1]">
          <img src={rating} alt="" />
          <p className="text-[#ff8811]">{formatNumber(data.ratingAvg)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
