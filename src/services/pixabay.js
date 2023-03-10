import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const staticUrlParams = {
  key: '33023282-0c7c5ceb968646b6c20d323c8',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export const getPhotos = async (q, page) => {
  const params = new URLSearchParams({ ...staticUrlParams, q, page });
  const promice = await axios.get(`?${params}`);
  const { data } = promice;
  const result = {
    totalPage: Math.ceil(data.totalHits / staticUrlParams.per_page),
    hits: data.hits.map(({ id, webformatURL, largeImageURL }) => {
      return { id, webformatURL, largeImageURL };
    }),
  };

  return result;
};

// export const addMaterial = async values => {
//   const response = await axios.post('/materials', values);
//   return response.data;
// };

// export const deleteMaterial = async id => {
//   const response = await axios.delete(`/materials/${id}`);
//   return response.data;
// };

// export const updateMaterial = async fields => {
//   const response = await axios.put(`/materials/${fields.id}`, fields);
//   return response.data;
// };
