import axios from './base';

export const AuthService = {
  async register(form) {
    try {
      const { data } = await axios.post('/auth/register', form);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async login(form) {
    try {
      const { data } = await axios.post('/auth/login', form);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async checkToken(token) {
    try {
      const { data } = await axios.post('/auth/check', {
        ArtGalleryToken: token,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getSingleUser(id) {
    try {
      const { data } = await axios.post('/auth/get-user', { id });
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getAllUsersId() {
    try {
      const { data } = await axios.get('/auth/get-user-list');
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
