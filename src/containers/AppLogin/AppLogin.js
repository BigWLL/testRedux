/**
 * Created by xiaohe on 2018/6/28.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import LoginName from '../../component/LoginName/LoginName'
import LoginPassword from '../../component/LoginPassword/LoginPassword'
import Button from '../../component/Button/Button'

import {AppLoginName, AppLoginPassword, AppLoginButtonThunk,AppLoginButtonSaga} from '../../Redux/Action/action';

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
                    <strong>登录验证的异步使用了redux-thunk，拦截模拟用了mock</strong>
                    <br/>
                    账号
                    <LoginName handle={this.props.LoginName}/>
                    <br/>
                    密码
                    <LoginPassword handle={this.props.LoginPassword}/>
                    <br/>
                    <Button handle={this.props.ThunkLigin.bind(this)}/>
                    <br/>
                    <p>thunk的登录{this.props.text}</p>
                </div>
                <div>
                    <strong>登录验证的异步使用了redux-thunk，拦截模拟用了mock</strong>
                    <br/>
                    账号
                    <LoginName handle={this.props.LoginName}/>
                    <br/>
                    密码
                    <LoginPassword handle={this.props.LoginPassword}/>
                    <br/>
                    <Button handle={this.props.SagaLogin.bind(this)}/>
                    <br/>
                    <p>saga的登录{this.props.text}</p>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    console.log('.text',state),
    {
        text: state.AppLoginButtonThunk
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
        ThunkLigin: () => {
            dispatch(AppLoginButtonThunk())
        },
        SagaLogin: () => {
            alert('没做完呢别着急')
            // dispatch(AppLoginButtonSaga())
        }
    });
AppLogin.contextTypes = {
    store: PropTypes.object
}
export default connect(mapStateToProps, mapDispatchToProps)(AppLogin);
