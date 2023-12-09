const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f877bea268msh061a527e3d8b062p17f85fjsnb74d7871ea3d',
    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
  },
};

fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
