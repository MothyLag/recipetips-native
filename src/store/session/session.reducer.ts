import { ISessionState, ISessionAction } from 'src/utils/state.types';

const initialState = { isLogged: true } as ISessionState;
export const sessionReducer = (
  state = initialState,
  action: ISessionAction
) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
