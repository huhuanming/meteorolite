import React from 'react';
import { Link } from 'react-router';
import Style from './sign.scss';

export default React.createClass({
    render() {
        return(
            <div className={Style.signUpBox}>
                <h1 className={Style.title}>注册</h1>
                <div className={Style.formGroup}>
                    <label>公司名称：</label>
                    <input type="text"/>
                </div>
                <div className={Style.formGroup}>
                    <label>用户名：</label>
                    <input type="text"/>
                </div>
                <div className={Style.formGroup}>
                    <label>密码：</label>
                    <input type="password"/>
                </div>
                <div className={Style.formGroup}>
                    <label>确认密码：</label>
                    <input type="password"/>
                </div>
                <button className={Style.submitBtn}>免费注册</button>
                <p className={Style.signIn}>
                    <span>已有账号？</span><Link to="signin">立即登录</Link>
                </p>
            </div>
        );
    }
});
