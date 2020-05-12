import { ISessionState, ISessionAction } from 'src/utils/state.types';
import { ACTION_LOG_IN, ACTION_LOG_OUT } from '../../utils/actions.consts';
import { logIn, logOut } from './session.actions';

const initialState = { isLogged: false } as ISessionState;
export const sessionReducer = (
  state = initialState,
  action: ISessionAction
) => {
  switch (action.type) {
    case ACTION_LOG_IN:
      return logIn(state);
    case ACTION_LOG_OUT:
      return logOut(state);
    default:
      return { ...state };
  }
};
