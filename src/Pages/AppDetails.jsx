import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import download from "../assets/icons/download.svg";
import star from "../assets/icons/star.svg";
import thump from "../assets/icons/thump.svg";
import AppNotFound from "../Components/Common/AppNotFound";
import Container from "../Components/Layout/Container";
import DataContext from "../Context/DataContext";
import formatNumber from "../Utils/formatNumber";
import { matchingData, setLocalData } from "../Utils/localData";
import Loading from "../Components/Common/Loading";

const AppDetails = () => {
  const { allData, loading } = useContext(DataContext);
  const [appData, setAppdata] = useState(null);
  const [appInstalled, setAppInstalled] = useState(false);

  const param = useParams();

  useEffect(() => {
    if (allData && allData.length > 0) {
      const findData = allData.find((data) => data.id === Number(param.id));
      setAppdata(findData);
    }
  }, [allData, param]);

  useEffect(() => {
    if (appData) {
      setAppInstalled(matchingData(appData));
    }
  }, [appData]);

  const handleClick = () => {
    if (appInstalled) {
      toast.warn(`${appData.title} is already installed.`);
    } else {
      setLocalData(appData);
      toast.success(`${appData.title} has been Installed Successful`);
      setAppInstalled(true);
    }
  };

  if (loading)
    return (
      <div className="h-full flex items-center justify-center">
        <Loading />
      </div>
    );

  if (!appData) {
    return <AppNotFound />;
  }

  return (
    <Container className={`bg-[#F5F5F5]`}>
      <div className="py-20">
        <div className="flex gap-x-10 pb-7 border-b border-[#001931]/30 space-y-2">
          <div className="size-87.5">
            <img
              className="object-cover h-full w-auto"
              src={appData.image}
              alt=""
            />
          </div>
          <div className="flex-1">
            <div className="pb-7 border-b border-[#001931]/30 space-y-2">
              <h1 className="text-[#001931] text-3xl font-bold">
                {appData.title}
              </h1>
              <p className="text-xl text-[#001931d3] font-medium">
                Developed by <span>{appData.companyName}</span>
              </p>
            </div>
            <div className="flex gap-x-6 py-7 ">
              <div className="w-37.5 space-y-2">
                <img className="size-10" src={download} alt="" />
                <p className="text-[#001931]">Downloads</p>
                <p className="text-[2.5rem] font-extrabold">
                  {formatNumber(appData?.downloads)}
                </p>
              </div>
              <div className="w-37.5 space-y-2">
                <img className="size-10" src={star} alt="" />
                <p className="text-[#001931]">Average Ratings</p>
                <p className="text-[2.5rem] font-extrabold">
                  {appData?.ratingAvg}
                </p>
              </div>
              <div className="w-37.5 space-y-2">
                <img className="size-10" src={thump} alt="" />
                <p className="text-[#001931]">Total Reviews</p>
                <p className="text-[2.5rem] font-extrabold">
                  {formatNumber(appData?.reviews)}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handleClick}
                className={`px-5 py-3.5 rounded text-white text-xl font-semibold cursor-pointer ${
                  appInstalled ? "bg-gray-500" : "bg-[#00d390]"
                }`}
                disabled={appInstalled}
              >
                {appInstalled
                  ? "Installed"
                  : `Install Now (${appData.size} MB)`}
              </button>
            </div>
          </div>
        </div>
        <div className="py-10">
          <p className="text-2xl font-semibold">Ratings</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={appData.ratings} layout="vertical">
              {/* 2. Define the axes but hide them */}
              <XAxis type="number" hide={false} />
              <YAxis
                dataKey="name"
                type="category"
                hide={false}
                reversed={true}
              />

              <Tooltip
                cursor={{ fill: "#777" }}
                contentStyle={{ backgroundColor: "#555", border: "none" }}
              />

              {/* 3. Define the bars */}
              <Bar dataKey="count" fill="#FFA500" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-[#001931]">Description</h1>
          <p className="text-xl font-normal  text-[#627382]">
            {appData.description}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AppDetails;
