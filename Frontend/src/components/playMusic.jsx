import React from 'react';
import SpotifyWebPlayer from 'react-spotify-web-playback';

const playMusic = ({ songUri }) => {
  return (
    <div>
      <SpotifyWebPlayer
        uris={songUri ? [songUri] : []}
        showSaveIcon
        play={true}
        token="BQCGYmNEmN3fYoLPeEo1WrLwn8ZL8IYUFMQoamw_FxnwI5TJ5wg4kHKdJNgdqU0k2S6w5gtqtnPxm4727vHlGnTT0Xser98kwcoFfMK0NOfASAJuoYk"
      />
    </div>
  );
};

export default playMusic;
