/**
 * Created by xiaohe on 2018/5/17.
 */
import * as Action from './action.type.js';
import {thunk} from 'redux-thunk';
import axios from 'axios';

//action
//action创建函数
const AppBdo = (text) => ({
    type: Action.AppB,
    text
})

const AppBasyn = (text) => dispatch => {
    axios.get("/a").then((response) => {
        console.log('AppBasyn', response)
        dispatch({
            type: Action.AppBasyn,
            'AppBasyn': response.data.AppB
        })
    })

}

const AppCdo = (text) => (
    console.log('Action:Action.AppC', Action.AppC),
        {
            type: Action.AppC,
            text
        }
);
const AppDdo = () => (
    console.log('输出的action', Action.AppD),
        {
            type: Action.AppD
        }
);
const AppDdoAsyn = (e) => (
    console.log('输出的action', Action.AppDasyn),
        {
            type: Action.AppDasyn
        }
);
const AppDdoResult = (e) => (
    console.log('输出的action', Action.AppDasyn),
        {
            type: Action.AppDasyn,
            e
        }
);
const AppCdoAsync = (text) => dispatch => {
    setTimeout(() => {
        dispatch(AppCdo(text))
    }, 1000)
}
const AppBclear = (e) => ({
    type: Action.AppBclear
})
const AppCclear = (e) => (
    console.log('Action:AppCclear', '清除'),
        {
            type: Action.AppCclear
        })

export {AppBdo, AppBasyn, AppCdo, AppDdo, AppBclear, AppCclear, AppCdoAsync, AppDdoAsyn, AppDdoResult};