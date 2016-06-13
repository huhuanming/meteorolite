import React from 'react';
import Style from './goods.scss';

export default React.createClass({
    propTypes: {
        goodsName: React.PropTypes.string.isRequired,
        goodsCount: React.PropTypes.number.isRequired
    },

    render() {
        return(
            <div className={Style.header}>
                <h2>{`${this.props.goodsName} (总共 ${this.props.goodsCount} 个)`}</h2>
            </div>
        );
    }
});
