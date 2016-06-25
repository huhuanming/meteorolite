import React from 'react';
import Header from '../header/header';
import Group from './group/group';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    _renderIndex() {
        return (
            <div>
                <div>
                    <Header>
                        <span className="title">人员管理</span>
                    </Header>
                    <Group groupTitle="管理员"/>
                    <Group groupTitle="员工"/>
                </div>
            </div>
        );
    },

    render() {
        return this.props.children || this._renderIndex();
    }
});
