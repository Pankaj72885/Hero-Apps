import { useContext } from "react";
import { Link } from "react-router";
import DataContext from "../../../Context/DataContext";
import Card from "../Card";
import Loading from "../Loading";

const TrendingApps = () => {
  const { allData, loading } = useContext(DataContext);

  const trendingData = allData.slice(0, 8);

  if (loading)
    return (
      <div className="h-full flex items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <div className="py-20 flex flex-col gap-y-10 justify-start items-center">
      <header className="w-fit mx-auto space-y-4">
        <h1 className="text-center text-5xl font-bold text-[#001931]">
          Trending Apps
        </h1>
        <p className="text-center text-xl font-normal text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {trendingData.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </section>
      <div className="custom-gradient  px-4 py-3 rounded-sm text-base font-semibold text-white hover:scale-100 md:hover:scale-105  scale-90 md:scale-100 transition-all duration-300 ease-in-out">
        <Link to="/apps">Show All</Link>
      </div>
    </div>
  );
};

export default TrendingApps;
