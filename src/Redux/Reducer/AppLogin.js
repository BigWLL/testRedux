/**
 * Created by xiaohe on 2018/5/16.
 */
import * as Action from "../Action/action.type.js";

const AppLogin = (state = {"name": "", "password": ""}, action) => {
    switch (action.type) {
        case Action.AppLoginName:
            state.name = action.name
            return state
            break;
        case Action.AppLoginPassword:
            state.password = action.password
            return state
            break;
        default:
            return state;
    }

};
const AppLoginButtonThunk = (state = "", action) => {
    switch (action.type) {
        case Action.AppLoginButtonThunk:
            state = action.text;
            return state;
            break
        default:
            return state;
            break;
    }
}
const AppLoginSaga = (state = "", action) => {
    switch (action.type) {
        case Action.AppLoginSaga:
            console.log('AppLoginSaga',action)
            state = action.result
            return state;
            break
        default:
            return state;
            break;
    }
}
export {AppLogin, AppLoginButtonThunk,AppLoginSaga};