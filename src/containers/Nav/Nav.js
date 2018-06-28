/**
 * Created by xiaohe on 2018/5/7.
 */
import React,{ Component } from 'react';
import {NavLink} from 'react-router-dom';
// import "./App.css"
export default class App extends React.Component {
    render(){
        return (
         <div>
             <li><NavLink to="/appA" replace>AppA</NavLink></li>
             <li><NavLink to="/appB" replace>AppB</NavLink></li>
             <li><NavLink to="/appC" replace>AppC</NavLink></li>
             <li><NavLink to="/appD" replace>AppD</NavLink></li>
             <li><NavLink to="/appLogin" replace>AppLogin</NavLink></li>
         </div>
        )
    }
};
