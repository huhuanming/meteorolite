import React from 'react';
import Style from './employees.scss';

export default React.createClass({
    render() {
        console.log(Style);
        return(
            <div className={Style.member}>
                <img src="https://avatar.tower.im/83d0f9b23979421a96efefd268851a33" alt="member"/>
                <span className={Style.name}>Tyler</span>
                <span className={Style.role}>管理员</span>
            </div>
        );
    }
});
