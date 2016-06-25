import React from 'react';
import Header from '../header/header';
import Style from './employees.scss';

export default React.createClass({
    render() {
        return(
            <div>
                <Header>
                    <span className="title">添加人员</span>
                </Header>
                <div className={`content ${Style.panel}`}>
                    <span>Addition</span>
                </div>
            </div>
        );
    }
});
