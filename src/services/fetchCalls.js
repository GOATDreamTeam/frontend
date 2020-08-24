export const fetchPlantSearch = commonName => { 
  return fetch(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token==${commonName}`)
    .then(res => res.json())
    .then(plants => plants.data.map(plant => ({
      common_name: plant.common_name, 
      scientific_name: plant.scientific_name, 
      image: plant.image_url
    })));
};

// PLEASE NOTE, I REMOVED THE KEY SO IT WOULDN'T BE EXPOSED AND WILL NEED TO PLACE IT BACK HERE TO MAKE IT WORK
