import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetHomepageMusicQuery } from '../redux/services/spotify';
// import { useGetTop20MonthlyListenersSongsQuery } from '../redux/services/spotify';
// import { useGetNewRealeasesQuery } from '../redux/services/spotifyNew';
import { genres } from '../assets/constants';
import playMusic from '../components/playMusic';

const Home = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetSongsByGenreQuery(
  //   genreListId || 'POP'
  // );
  // const { data, isFetching, error } = useGetNewRealeasesQuery();
  // const { data, isFetching, error } = useGetTop20MonthlyListenersSongsQuery();
  const { data, isFetching, error } = useGetHomepageMusicQuery();
  //console.log('useGetHomepageMusicQuery()  ', useGetHomepageMusicQuery());

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  // const genreTitle = genres.find(({ value }) => value === genreListId)?.title;
  // console.log(data.albums.items);
  //console.log('payload -- ', data);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <div>
          <h2 className="font-bold text-4xl text-white text-left">Discover</h2>
          <h4 className="font-bold text-2xl text-white text-left">
            {genreTitle}
          </h4>
        </div>

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <playMusic songUri={'spotify:track:3CWq0pAKKTWb0K4yiglDc4'} />

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.payload?.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data.payload}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
