const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f877bea268msh061a527e3d8b062p17f85fjsnb74d7871ea3d',
    'X-RapidAPI-Host': 'spotify117.p.rapidapi.com',
  },
};

fetch('https://spotify117.p.rapidapi.com/new_releases/?country=us', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
