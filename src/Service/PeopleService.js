import { dataPeople } from "../Service/data";

export const PeopleService = {
  getListPeople: () => {
    const listPeoples = dataPeople;
    return listPeoples;
  },
};
