// EmotionSelector.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import SongCard from '../components/SongCard'; // Update the path based on your actual file structure

const EmotionSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EmotionButton = styled.button`
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  margin: 8px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #2980b9;
  }
`;

const SongList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const EmotionSelector = ({ songsData }) => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const emotions = ['Happy', 'Sad', 'Excited', 'Calm'];

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
  };

  return (
    <EmotionSelectorWrapper>
      <h2>Select an Emotion:</h2>
      {emotions.map((emotion) => (
        <EmotionButton key={emotion} onClick={() => handleEmotionClick(emotion)}>
          {emotion}
        </EmotionButton>
      ))}
      {selectedEmotion && (
        <>
          <h2>{`Recommended Songs for ${selectedEmotion}:`}</h2>
          <SongList>
            {songsData[selectedEmotion]?.slice(0, 20).map((song, i) => (
              <SongCard
                key={song.id}
                song={song}
                // Add any additional props needed by your SongCard component
              />
            ))}
          </SongList>
        </>
      )}
    </EmotionSelectorWrapper>
  );
};

export default EmotionSelector;
