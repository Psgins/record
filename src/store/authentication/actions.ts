import { AuthenticationAction, AuthenticationActionType } from "./types";

export const login = (): AuthenticationAction => ({
    type: AuthenticationActionType.LOGIN,
});
