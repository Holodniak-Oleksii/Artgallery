import axios from './base';

export const SpacesService = {
  async getSpaces() {
    try {
      const { data } = await axios.get('/space/all');
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getSingleSpace(id) {
    try {
      const { data } = await axios.post('/space/detail', { id });
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async createSpace(data) {
    try {
      await axios.post('/add', data);
    } catch (error) {
      console.error(error);
    }
  },
  async filterSpace(filter) {
    try {
      const { data } = await axios.post('/space/filter', filter);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
