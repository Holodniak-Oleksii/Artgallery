import { store } from '..';
export const wrapDispatchAction = (action) => {
  return (value) => store.dispatch(action(value));
};
