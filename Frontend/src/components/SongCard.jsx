// import {Link} from 'react-router-dom';
// import {useDispatch} from 'react-redux';

// import PlayPause from 'PlayPause';
// import { playPause,setActiveSong } from '../redux/features/playerSlice';

// const SongCard = () => (
//   <div>SongCard</div>
// );

// export default SongCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  // const SongCard = ({ song, i }) => {
  // const activeSong = 'Test';
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    // console.log(activeSong.trackMetadata?.trackUri);
  };
  // console.log('activeSong?.songName  ', activeSong?.songName);
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.songName === song.songName
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          alt="song_img"
          // src={song.images[0].url}
          src={song.songImageUrl}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          {/* <Link to={`/songs/${song?.key}`}>{song.title}</Link> */}
          <Link to={`/songs/${song?.key}`}>{song.songName}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song.songArtists.map((artist, index) => (
              <li key={index}>{artist.name}</li>
            ))}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
