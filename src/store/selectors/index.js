import { useSelector } from 'react-redux';
import userSlice from '../slice/user';

export const useUser = () => useSelector((state) => state[userSlice.name]);
