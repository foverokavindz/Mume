import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
// import { spotifyApi } from './services/spotify';
import { spotifyNewApi } from './services/spotifyNew';

export const store = configureStore({
  reducer: {
    [spotifyNewApi.reducerPath]: spotifyNewApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyNewApi.middleware),
});
