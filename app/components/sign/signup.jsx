import React from 'react';
import {Link} from 'react-router';
import Style from './sign.scss';

export default React.createClass({
    getInitialState() {
        return {
            enterpriseName: '',
            userName: '',
            password: '',
            confirmedPassword: ''
        };
    },

    _onInputChange(state, event) {
        let newState = {};
        newState[state] = event.target.value;
        this.setState(newState);
    },

    _onSignUp() {
        console.log(this.state);
        console.log('注册');
    },

    _checkFormValue(state) {
        if (state === 'enterpriseName') {
            return true;
        }
        else if (state === 'userName') {
            return true;
        }
        else if (state === 'password') {
            return true;
        }
        else if (state === 'confirmedPassword') {
            if (this.state.confirmedPassword !== this.state.password) {
                console.log('两次输入密码不同');
                return false;
            }
        }
        return false;
    },

    render() {
        return (
            <div className={Style.signUpBox}>
                <h1 className={Style.title}>注册</h1>
                <div className={Style.formGroup}>
                    <label>公司名称：</label>
                    <input
                        type="text"
                        onChange={this._onInputChange.bind(this, 'enterpriseName')}
                        onBlur={this._checkFormValue.bind(this, 'enterpriseName')}
                    />
                </div>
                <div className={Style.formGroup}>
                    <label>用户名：</label>
                    <input
                        type="text"
                        onChange={this._onInputChange.bind(this, 'userName')}
                        onBlur={this._checkFormValue.bind(this, 'userName')}
                    />
                </div>
                <div className={Style.formGroup}>
                    <label>密码：</label>
                    <input
                        type="password"
                        onChange={this._onInputChange.bind(this, 'password')}
                        onBlur={this._checkFormValue.bind(this, 'password')}
                    />
                </div>
                <div className={Style.formGroup}>
                    <label>确认密码：</label>
                    <input
                        type="password"
                        onChange={this._onInputChange.bind(this, 'confirmedPassword')}
                        onBlur={this._checkFormValue.bind(this, 'confirmedPassword')}
                    />
                </div>
                <button className={Style.submitBtn} onClick={this._onSignUp}>免费注册</button>
                <p className={Style.signIn}>
                    <span>已有账号？</span><Link to="signin">立即登录</Link>
                </p>
            </div>
        );
    }
});
