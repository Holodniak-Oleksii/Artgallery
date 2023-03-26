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
  async createSpace(data, token) {
    try {
      await axios.post('/add', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
};
