import {Action} from "../index";
import {User} from "../../services/Authentication.service";

declare interface AuthenticationState {
    profile?:User
}

export default function AuthenticationRedux(state:AuthenticationState = {}, action: Action): AuthenticationState  {
    switch (action.type) {
        case 'AUTHENTICATION_LOGIN':
            return {profile: action.payload}
        case 'AUTHENTICATION_LOGOUT':
            return {}
        default:
            return state
    }
}