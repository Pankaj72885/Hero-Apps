import { useContext, useEffect, useRef, useState } from "react";
import mGlass from "../assets/icons/mGlass.svg";
import Card from "../Components/Common/Card";
import Loading from "../Components/Common/Loading";
import Container from "../Components/Layout/Container";
import DataContext from "../Context/DataContext";

const AllApps = () => {
  const { allData, loading } = useContext(DataContext);
  const [renderData, setRenderData] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    setRenderData(allData);
  }, [allData]);

  const handleInputChange = () => {
    const currentValue = inputRef.current.value;
    if (currentValue === "") {
      setRenderData(allData);
    } else {
      const filteredData = allData.filter((data) =>
        data.title.toLowerCase().includes(currentValue.toLowerCase())
      );
      setRenderData(filteredData);
    }
  };

  if (loading) return (
    <div className="h-full flex items-center justify-center">
      <Loading />
    </div>
  );

  return (
    <Container className={`bg-[#F5F5F5]`}>
      <div className="py-20 flex flex-col gap-y-10 justify-start items-center">
        <header className="w-fit mx-auto space-y-4">
          <h1 className="text-center text-5xl font-bold text-[#001931]">
            Our All Applications
          </h1>
          <p className="text-center text-xl font-normal text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </header>
        <section className="flex justify-between w-full items-center ">
          <p>{`(${renderData.length}) `} Apps Found</p>
          <div className="relative">
            <input
              className="pr-4 pl-10 py-2 rounded-xl border border-[#D2D2D2]"
              type="text"
              ref={inputRef}
              onChange={handleInputChange}
              placeholder="Search Apps"
            />
            <img className="absolute top-3 left-3" src={mGlass} alt="" />
          </div>
        </section>
        <section className="grid grid-cols-4 gap-4 w-full">
          {renderData.length > 0 ? (
            renderData.map((data) => <Card key={data.id} data={data}></Card>)
          ) : (
            <p className="col-span-4 text-center text-gray-500 text-3xl font-extrabold">
              No applications match your search.
            </p>
          )}
        </section>
      </div>
    </Container>
  );
};

export default AllApps;
