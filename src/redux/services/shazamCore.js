
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '01f31f30f5mshaf3dcb37e0360b7p1bd686jsnbdb09da2e30e',
//         'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
// };

// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam.p.rapidapi.com',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '01f31f30f5mshaf3dcb37e0360b7p1bd686jsnbdb09da2e30e');
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({
        query: () => ({
            url: 'https://shazam.p.rapidapi.com/charts/track',
            method: 'GET',
        }),
      }),
    }),
  });
  
  export const { useGetTopChartsQuery } = shazamCoreApi;
