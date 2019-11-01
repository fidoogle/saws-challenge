import axios from "axios";

export const getFolders = async (source='SA') => {
  let url = "https://services.arcgis.com/g1fRTDLeMgspWrYp/ArcGIS/rest/services?f=json";
  if (source!=='SA') {
    url = 'https://qagis.sanantonio.gov/arcgis/rest/services?f=pjson';
  }
  try {
    const responseForFolders = await axios.get(url);
    //console.log("fidel", { responseForFolders });
    return responseForFolders.data.services;
  } catch (e) {
    //console.warn("Could not get folders");
    return null;
  }
};

export const pickFavorite = async ({email, favorite, picked}) => {
  try {
    await axios({
      method: "post",
      url:
        "https://prod-20.centralus.logic.azure.com:443/workflows/3be3af27834140ebacac577a2f6bbae9/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vtv6rvs2LQLz3FIMB1HDS6gL5ivwc7oCBJsM4EsszRM",
      data: {
        email,
        favorite,
        picked
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (e) {
    return null;
  }
};