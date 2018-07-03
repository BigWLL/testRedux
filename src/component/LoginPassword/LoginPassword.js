/**
 * Created by xiaohe on 2018/6/28.
 */
import React, {Component} from 'react';
const LoginPassword =(props)=>{
    const Format=(e)=> {
        let name = e.target.value.trim();
        props.handle(name);
    }
    return <input type={"password"} onBlur={Format}/>
}

export default LoginPassword;