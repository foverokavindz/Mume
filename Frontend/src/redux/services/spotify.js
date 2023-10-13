import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify81.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'f877bea268msh061a527e3d8b062p17f85fjsnb74d7871ea3d'
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/top_200_tracks' }),
    getTop20MonthlyListenersSongs: builder.query({
      query: () => '/top_20_by_monthly_listeners',
    }),
  }),
});

export const { useGetTopChartsQuery } = spotifyApi;
export const { useGetTop20MonthlyListenersSongsQuery } = spotifyApi;
