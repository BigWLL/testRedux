/**
 * Created by xiaohe on 2018/6/28.
 */
import React, {Component} from 'react';


const LoginName = (props) => {
    const Format=(e)=> {
        console.log('Format',e.target.value)
        let name = e.target.value.trim();
        props.handle(name);
    }
    return <input onBlur={Format}/>
}



export default LoginName;