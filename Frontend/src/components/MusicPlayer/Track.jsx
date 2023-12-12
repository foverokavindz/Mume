import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div
      className={`${
        isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''
      } hidden sm:block h-16 w-16 mr-4`}
    >
      <img
        src={activeSong?.songImageUrl}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div style={{ maxWidth: '350px', minWidth: '350px' }}>
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.songName ? activeSong?.songName : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.songArtists?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </p>
    </div>
  </div>
);

export default Track;
