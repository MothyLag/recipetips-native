import { combineReducers } from 'redux';
import { IAppState } from 'src/utils/state.types';
import { sessionReducer } from './session/session.reducer';

export const rootReducer = () => {
  return combineReducers<IAppState>({
    session: sessionReducer
  });
};
