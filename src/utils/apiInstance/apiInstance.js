import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://goit-phonebook-api.herokuapp.com',
});
export default apiInstance;
