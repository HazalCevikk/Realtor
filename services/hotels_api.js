import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://realtor.p.rapidapi.com",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "9e5e0256d7mshde6c2ce9477b80ap10b230jsn84dd74ae2df5",
    "X-RapidAPI-Host": "realtor.p.rapidapi.com",
  },
});

export const realtor_api = {
  properties: async () =>
    api
      .post(
        "/properties/v3/list",
        {
          limit: 200,
          offset: 0,
          postal_code: "90004",
          status: ["for_sale", "ready_to_build"],
          sort: {
            direction: "desc",
            field: "list_date",
          },
        },
        { params: {} }
      )
      .then((res) => res.data),
};
