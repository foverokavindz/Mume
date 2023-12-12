import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicMuseApi = createApi({
  reducerPath: 'musicMuseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005/api',
    /*
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'f877bea268msh061a527e3d8b062p17f85fjsnb74d7871ea3d'
      );
      

      return headers;
      
    },*/
  }),
  endpoints: (builder) => ({
    getHomepageMusic: builder.query({
      query: () => '/songs/get-homepage-songs/6569cd41593866373a9e2e17',
    }),
  }),
});

export const { useGetHomepageMusicQuery } = musicMuseApi;
