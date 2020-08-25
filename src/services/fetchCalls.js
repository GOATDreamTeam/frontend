export const fetchPlantSearch = (plant, page) => { 
  return fetch(`https://goatdreamteam.herokuapp.com/api/v1/apiroutes?plant=${plant}&page=${page}`)
    .then(res => res.json());
};

export const fetchTopPlantSearch = (search) => { 
  return fetch(`https://goatdreamteam.herokuapp.com/api/v1/topsearch?search=${search}`);
};

export const fetchPlantById = (id) => { 
  return fetch(`https://goatdreamteam.herokuapp.com/api/v1/apiroutes/${id}`)
    .then(res => res.json());
};
