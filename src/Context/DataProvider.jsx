import { useState, useEffect } from "react";
import DataContext from "./DataContext";


const DataProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch(
          "/data.json"
        );
        const data = await response.json();
        setAllData (data); 
      } catch (error) {
        console.error("Failed to fetch Data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);


    return (
      <DataContext.Provider value={{ allData, loading }}>
        {children}
      </DataContext.Provider>
    );
};

export default DataProvider;
