import axios from "axios";
import { groupBy } from "lodash";

export const searchAPI = async term => {
  try {
    const result = await axios.get(
      `https://itunes.apple.com/search?term=${term}`
    );
    const results = result.data.results;
    const groups = groupBy(results, "kind");
    const { undefined, ...restGroups } = groups; //destruct undefined group
    return restGroups;
  } catch (e) {
    return null;
  }
};
