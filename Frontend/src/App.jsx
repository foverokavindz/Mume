import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import React, { useEffect } from 'react';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Home,
  Search,
  SongDetails,
  TopCharts,
} from './pages';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import { useStateProvider } from './utils/StateProvide';
// import { reducerCases } from './utils/Constants';
// import SpotifyPage from './components/SpotifyPage';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  // const [{ token }, dispatch] = useStateProvider();

  // useEffect(() => {
  //   const hash = window.location.hash;

  //   if (hash) {
  //     const token = hash.substring(1).split('&')[0].split('=')[1];
  //     dispatch({ type: reducerCases.SET_TOKEN, token });
  //     console.log(token);
  //   }
  // }, [token, dispatch]);


  //       if (token) {
  //         dispatch({ type: reducerCases.SET_TOKEN, token });
  //       }
  //     }
  //     document.title = "Spotify";
  //   }, [dispatch, token]);
  //   return <div>{token ? <Spotify /> : <Login />}</div>;
  // }

  return (
    <div className="relative flex">
      {/* {token ? <SpotifyPage /> : <Login />} */}
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.trackMetadata && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
