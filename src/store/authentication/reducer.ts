import { Reducer } from "redux";
import {
    AuthenticationAction,
    AuthenticationActionType,
    IAuthenticationState,
} from "./types";

const initialState: IAuthenticationState = {
    isLoggedIn: true,
};

const reducer: Reducer<IAuthenticationState, AuthenticationAction> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case AuthenticationActionType.LOGIN:
            return { ...state, isLoggedIn: true };
        default:
            return state;
    }
};

export default reducer;
