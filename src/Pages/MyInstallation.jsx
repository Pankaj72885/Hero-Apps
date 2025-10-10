import { useEffect, useRef, useState } from "react";
import Container from "../Components/Layout/Container";
import { getLocalData } from "../Utils/localData";

import InstallApps from "../Components/Common/InstallApps/InstallApps";

const MyInstallation = () => {
  const selectRef = useRef(null);
  const [installApps, setInstallApp] = useState([]);
  const [renderApps, setRenderApps] = useState([]);
  const [selectedValue, setSelectedValue] = useState("default");
  useEffect(() => {
    setInstallApp(getLocalData());
  }, []);

  const handleChange = () => {
    const value = selectRef.current.value;
    setSelectedValue(value);
  };

  useEffect(() => {
    switch (selectedValue) {
      case "High-Low": {
        const sortedHighLow = [...installApps].sort(
          (a, b) => b.downloads - a.downloads
        );
        setRenderApps(sortedHighLow);
        break;
      }

      case "Low-High": {
        const sortedLowHigh = [...installApps].sort(
          (a, b) => a.downloads - b.downloads
        );
        setRenderApps(sortedLowHigh);
        break;
      }

      default: {
        setRenderApps(installApps);
        break;
      }
    }
  }, [selectedValue, installApps]);

  return (
    <Container className={`bg-[#F5F5F5] h-full`}>
      <div className="py-20 flex flex-col gap-y-10 justify-start items-center">
        <header
          className={`${
            renderApps.length ? "visible" : "invisible"
          } flex flex-col justify-between w-full items-center mx-auto space-y-4`}
        >
          <h1 className="text-center text-5xl font-bold text-[#001931]">
            Your Installed Apps
          </h1>
          <p className="text-center text-xl font-normal text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </header>
        <section
          className={`${
            renderApps.length ? "visible" : "invisible"
          } flex justify-between w-full items-center`}
        >
          <p>{`(${installApps.length}) `} Apps Found</p>
          <div>
            <select
              className="border border-gray-300 rounded px-3 py-1"
              onChange={handleChange}
              ref={selectRef}
              defaultValue="default"
            >
              <option value="default">Short By</option>
              <option value="High-Low">High-Low</option>
              <option value="Low-High">Low-High</option>
            </select>
          </div>
        </section>
        <section className="flex flex-col w-full gap-y-6 justify-stretch">
          {renderApps.length > 0 ? (
            renderApps.map((apps) => (
              <InstallApps
                key={apps.id}
                apps={apps}
                setInstallApp={setInstallApp}
              ></InstallApps>
            ))
          ) : (
            <p className=" col-span-4 text-center text-gray-500 text-5xl font-extrabold">
              No applications are Installed.
            </p>
          )}
        </section>
      </div>
    </Container>
  );
};

export default MyInstallation;
