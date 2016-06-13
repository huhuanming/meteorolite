import React from 'react';
import Header from '../header/header';
import Content from '../content/content';
import Group from './group';

export default React.createClass({
    render() {
        return(
            <div>
                <Header>
                    <span className="title">人员管理</span>
                </Header>
                <Content>
                    <Group/>
                </Content>
            </div>
        );
    }
});
