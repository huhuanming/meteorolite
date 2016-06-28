import React from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import Content from '../content/content';
import Qrcode from 'qrcode.react';
import {fetchQrcodes} from '../../actions/qrcode';

const select = (state) => {
    return {
        me: state.me,
        enterprise: state.enterprise,
        qrcode: state.qrcode
    };
};

export default connect(select)(React.createClass({
    propTypes: {
        dispatch: React.PropTypes.func.isRequired,
        qrcode: React.PropTypes.any.isRequired
    },

    componentDidMount() {
        this.props.dispatch(fetchQrcodes());
    },

    render() {
        return (
            <div>
                <Header>
                    <span className="title">二维码管理</span>
                </Header>
                <Content>
                    {
                        this.props.qrcode.get('qrcodes').map(item =>
                            <Qrcode key={item.id} value={`http://localhost:3000/qrcodes/${item.id}`} size={80}/>)
                    }
                </Content>
            </div>
        );
    }
}));
