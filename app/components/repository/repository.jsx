import React from 'react';
import Header from '../header/header';
import Goods from '../goods/goods';

export default React.createClass({
    render() {
        return(
            <div>
                <Header>
                    <span className="title">仓库管理</span>
                </Header>
                <Goods goodsName="扫帚"/>
            </div>
        );
    }
});
