import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6500'
});

export const getAllUsers = () => api.get('/users');
export const addNewUser = userData => api.post('/users', userData);
export const getPostsByUserId = userId => api.get(`/posts/${userId}`);
export const bulkAddPostsByUserId = (userId, postsData) => api.post(`/posts/${userId}`, postsData);

const apis = {
  getAllUsers,
  addNewUser,
  getPostsByUserId,
  bulkAddPostsByUserId
};

export default apis;
