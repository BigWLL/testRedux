/**
 * Created by xiaohe on 2018/6/28.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import LoginName from '../../component/LoginName/LoginName'
import LoginPassword from '../../component/LoginPassword/LoginPassword'
import Button from '../../component/Button/Button'

import {AppLoginName, AppLoginPassword, AppLoginButtonThunk, AppLoginButtonSaga} from '../../Redux/Action/action';

class AppLogin extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            password: ""
        }
    }

    componentWillReceiveProps() {
        console.log('componentWillUpdate', this.props.text)
        console.log(this.context)
    }

    render() {
        return (
            <div>
                <strong>账号admin 密码123456</strong>
                <div>
                    <strong>登录验证的异步使用了redux-thunk，很多逻辑在action里，拦截模拟用了mock</strong>
                    <br/>
                    账号
                    <LoginName handle={this.props.LoginName}/>
                    <br/>
                    密码
                    <LoginPassword handle={this.props.LoginPassword}/>
                    <br/>
                    <Button handle={this.props.ThunkLogin.bind(this)}/>
                    <br/>
                    <p>thunk的登录{this.props.textA}</p>
                </div>
                <div>
                    <strong>登录验证的异步使用了redux-thunk，很多逻辑在saga和自身组件里，拦截模拟用了mock</strong>
                    <br/>
                    账号
                    <LoginName handle={this.props.LoginName}/>
                    <br/>
                    密码
                    <LoginPassword handle={this.props.LoginPassword}/>
                    <br/>
                    <Button handle={this.props.SagaLogin.bind(this, this.context)}/>
                    <br/>
                    <p>saga的登录{this.props.textB}</p>

                </div>
            </div>
        )
    }
}

//判断内容是否为空
const format = (e) => {
    console.log(e);
    let name = e.name, password = e.password;
    if (name == '' || password == '') {
        return false
    }
    return e;
}
const switchResult=(e,callback,event)=>{
    switch (e) {
        case false:
            alert('请输入正确内容')
            break;
        default:
            event(callback(e))
            break;
    }
}

const mapStateToProps = (state, ownProps) => (
    console.log('.text', state),
        {
            textA: state.AppLoginButtonThunk,
            textB:state.AppLoginSaga
        }
)
const mapDispatchToProps = (dispatch, state) => (
    {
        LoginName: (e) => {
            dispatch(AppLoginName(e))
        },
        LoginPassword: (e) => {
            dispatch(AppLoginPassword(e))
        },
        ThunkLogin: () => {
            dispatch(AppLoginButtonThunk())
        },
        SagaLogin: (e) => {
            let store = e.store.getState().AppLogin;
            let result = format(store);
            switchResult(result,AppLoginButtonSaga,dispatch)
        }
    });
AppLogin.contextTypes = {
    store: PropTypes.object
}
export default connect(mapStateToProps, mapDispatchToProps)(AppLogin);
