export interface IAppState {
  session: ISessionState;
}

export interface IAppActions {
  session: ISessionState;
}

export interface ISessionState {
  isLogged: boolean;
}

export interface ISessionAction {
  type: string;
}
