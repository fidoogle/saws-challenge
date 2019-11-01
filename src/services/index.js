import axios from "axios";

export const getFolders = async (source='SA') => {
  let url = "https://services.arcgis.com/g1fRTDLeMgspWrYp/ArcGIS/rest/services?f=json";
  if (source!=='SA') {
    url = 'https://qagis.sanantonio.gov/arcgis/rest/services?f=pjson';
  }
  try {
    const responseForFolders = await axios.get(url);
    console.log("fidel", { responseForFolders });
    return responseForFolders.data.services;
  } catch (e) {
    console.warn("Could not get folders");
    return null;
  }
};