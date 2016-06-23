import React from 'react';
import { Link } from 'react-router';
import Style from './sign.scss';

export default React.createClass({
    render() {
        return(
            <div className={Style.signInBox}>
                <h1 className={Style.title}>登录</h1>
                <div className={Style.formGroup}>
                    <label>用户名：</label>
                    <input type="text"/>
                </div>
                <div className={Style.formGroup}>
                    <label>密码：</label>
                    <input type="password"/>
                </div>
                <button className={Style.submitBtn}>立即登录</button>
                <p className={Style.signIn}>
                    <span>没有账号？</span><Link to="signup">免费注册</Link>
                </p>
            </div>
        );
    }
});
