import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { musicMuseApi } from './services/spotify';
// import { spotifyNewApi } from './services/spotifyNew';

// export const store = configureStore({
//   reducer: {
//     [spotifyNewApi.reducerPath]: spotifyNewApi.reducer,
//     player: playerReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(spotifyNewApi.middleware),
// });

export const store = configureStore({
  reducer: {
    [musicMuseApi.reducerPath]: musicMuseApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicMuseApi.middleware),
});
