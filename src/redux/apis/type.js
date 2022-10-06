import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = "https://sunny-pokedex.herokuapp.com/api/";
// const baseUrl: "http://localhost:3001/api/";

const typeApi = createApi({
  reducerPath: "typeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints(build) {
    return {
      getAllTypes: build.query({
        query() {
          return "types";
        },
      }),
    };
  },
});

export const { useGetAllTypesQuery } = typeApi;

export default typeApi;
