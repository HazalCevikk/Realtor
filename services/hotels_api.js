import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://us-real-estate.p.rapidapi.com",
  headers: {
    "access-control-allow-credentials": "true",
    "access-control-allow-origin": "*",
    "alt-svc": "h3=\":443\"; ma=86400",
    "content-type": "application/json; charset=utf-8",
    "date": "Sat, 10 Jun 2023 15:23:14 GMT",
    "server": "RapidAPI-1.2.8",
    "vary": "Accept-Encoding",
    "x-rapidapi-region": "AWS - ap-southeast-1",
    "x-rapidapi-version": "1.2.8",
    "x-trace": "Add-Header",
    "x-trial-number": "None",
    "X-RapidAPI-Key": "9e5e0256d7mshde6c2ce9477b80ap10b230jsn84dd74ae2df5",
    "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com"
  },
});

export const realtor_api = {
  // properties: async () =>
  //   api
  //     .post(
  //       "/properties/v3/list",
  //       {
  //         limit: 200,
  //         offset: 0,
  //         postal_code: "90004",
  //         status: ["for_sale", "ready_to_build"],
  //         sort: {
  //           direction: "desc",
  //           field: "list_date",
  //         },
  //       },
  //       { params: {} }
  //     )
  //     .then((res) => res.data),
  forSale: async () =>
    api
      .get("/v3/for-sale", {
        params: {
          state_code: 'MI',
          city: 'Detroit',
          sort: 'newest',
          offset: '0',
          limit: '42'
        }
      }).then(res => res.data),
  propertyDetails: async (propertyID) =>
    api
      .get('/v3/property-detail', { params: { property_id: propertyID } })
      .then((res) => res.data)
};
