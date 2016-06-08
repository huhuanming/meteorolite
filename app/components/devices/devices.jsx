import React from 'react';
import Header from '../header/header';
import Content from '../content/content';

export default React.createClass({
    render() {
        return(
            <div>
                <Header>
                    <span className="title">设备管理</span>
                </Header>
                <Content>
                    <p>一些设备信息,暂无内容.</p>
                </Content>
            </div>
        );
    }
});
