const localStorageKey = "installedApp";

export const getLocalData = () => {
  try {
    const localData = localStorage.getItem(localStorageKey);
    if (!localData) {
      return [];
    } else {
      return JSON.parse(localData);
    }
  } catch (error) {
    console.error(`Error getting localStorage data: `, error);
    return [];
  }
};

export const setLocalData = (value) => {
  try {
    const existData = getLocalData();
    const newData = [...existData, value];
    const setData = JSON.stringify(newData);
    localStorage.setItem(localStorageKey, setData);
  } catch (error) {
    console.error(`Error setting localStorage data:`, error);
  }
};

export const removeData = (removeApp) => {
  try {
    const existData = getLocalData();
    const newData = existData.filter((data) => data.id !== removeApp.id);
    const setData = JSON.stringify(newData);
    localStorage.setItem(localStorageKey, setData);
  } catch (error) {
    console.error(`Error removing localStorage data:`, error);
  }
};

export const matchingData = (appToCheck) => {
  try {
    const existData = getLocalData();
    const dataMatch = existData.some((data) => data.id === appToCheck.id);
    return dataMatch;
  } catch (error) {
    console.log(`Data matching error: ${error}`);
    return false;
  }
};

 
