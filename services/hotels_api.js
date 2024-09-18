import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://us-real-estate.p.rapidapi.com",
  headers: {
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
          state_code: 'LA',
          city: 'Detroit',
          sort: 'newest',
          offset: '0',
          limit: '42'
        }
      }).then(res => res.data),
  propertyDetails: async (propertyID) =>
    api
      .get('/v3/property-detail', { params: { property_id: propertyID } })
      .then((res) => res.data),

  otherHomes: async (propertyID) =>
    api
      .get('/for-sale/other-homes-in-building', { params: { property_id: propertyID } })
      .then((res) => res.data),

  similarHomes: async (propertyID) =>
    api
      .get('/for-sale/similiar-homes', { params: { property_id: propertyID } })
      .then((res) => res.data)
};
