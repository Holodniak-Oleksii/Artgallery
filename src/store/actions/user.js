import { wrapDispatchAction } from '.';
import userSlice from '../slice/user';
const { loginUser, logoutUser } = userSlice.actions;

export const loginUserAction = wrapDispatchAction(loginUser);
export const logoutUserAction = wrapDispatchAction(logoutUser);
