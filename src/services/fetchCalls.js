export const fetchPlantSearch = (plant, page) => { 
  return fetch(`https://goatdreamteam.herokuapp.com/api/v1/apiroutes?plant=${plant}&page=${page}`)
    .then(res => res.json());
};

export const fetchTopPlantSearch = () => { 
  return fetch('https://goatdreamteam.herokuapp.com/api/v1/topsearch')
    .then(res => res.json());
};
