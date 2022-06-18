import { AnyAction } from "redux";

export enum AuthenticationActionType {
    LOGIN = "AUTHENITCATION/LOGIN",
}

export interface AuthenticationAction extends AnyAction {
    type: AuthenticationActionType;
}

export interface IAuthenticationState {
    isLoggedIn: boolean;
}
