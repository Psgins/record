import { createSelector } from "reselect";
import { IStoreState } from "../types";

const getAuthenticationState = (state: IStoreState) => state.authentication;

export const getIsLoggedIn = createSelector(
    getAuthenticationState,
    (authentication) => authentication.isLoggedIn,
);
