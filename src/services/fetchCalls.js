export const fetchPlantSearch = (plant, page) => { 
  return fetch(`http://localhost:7890/api/v1/apiroutes?plant=${plant}&page=${page}`)
    .then(res => res.json());
};
