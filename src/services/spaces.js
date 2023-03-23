import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const SpacesService = {
  async getSpaces() {
    const { data } = await axios.get('/all');
    return data;
  },
  async getSingleSpace(id) {
    const { data } = await axios.post('/detail', { id });
    return data;
  },
  async createSpace(data) {
    await axios.post('/add', data);
  },
};
