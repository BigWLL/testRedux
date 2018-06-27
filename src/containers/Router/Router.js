/**
 * Created by xiaohe on 2018/5/8.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route, NavLink, Link, Switch} from 'react-router-dom';
import AppA from '../AppA/AppA.js';
import AppB from '../AppB/AppB.js';
import AppC from '../AppC/AppC.js';
import AppD from '../AppD/AppD.js';
import Nav from '../Nav/Nav.js';

export default class router extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path="/appA" component={AppA}/>
                        <Route path="/appB" component={AppB}/>
                        <Route path="/appC" component={AppC}/>
                        <Route path="/appD" component={AppD}/>
                    </Switch>
                </div>

            </HashRouter>

        )
    }
}
router.contextTypes={
    store:PropTypes.object
}
