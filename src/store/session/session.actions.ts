import { ISessionState } from 'src/utils/state.types';

export const logIn = (state: ISessionState) => {
  return { ...state, isLogged: true } as ISessionState;
};

export const logOut = (state: ISessionState) => {
  return { ...state, isLogged: false } as ISessionState;
};
