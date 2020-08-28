export const fetchPlantSearch = (plant, page) => { 
  return fetch(`https://goatdreamteam.herokuapp.com/api/v1/apiroutes?plant=${plant}&page=${page}`)
    .then(res => res.json());
};

export const fetchTopPlantSearch = (search) => { 
  return fetch(`https://goatdreamteam.herokuapp.com/api/v1/topsearch?search=${search}`)
    .then(res => res.json());
};

export const fetchPlantById = (id) => { 
  return fetch(`https://goatdreamteam.herokuapp.com/api/v1/apiroutes/${id}`)
    .then(res => res.json());
};

export const updateTopSearchList = ({ scientific_name, common_name, image_url }) => { 
  return fetch('https://goatdreamteam.herokuapp.com/api/v1/topsearch', {
    method: 'PUT', 
    body: JSON.stringify({
      common_name,
      scientific_name,
      image_url
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => res.json());
};
