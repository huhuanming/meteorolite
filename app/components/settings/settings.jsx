import React from 'react';
import Header from '../header/header';
import Content from '../content/content';

export default React.createClass({
    render() {
        return(
            <div>
                <Header>
                    <span className="title">系统设置</span>
                </Header>
                <Content>
                    <p>一些系统设置项,暂无内容.</p>
                </Content>
            </div>
        );
    }
});
