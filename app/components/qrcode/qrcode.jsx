import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import Content from '../content/content';
import Qrcode from 'qrcode.react';
import { fetchQrcodes } from '../../actions/qrcode';

const select = (state) => {
    return {
        me: state.me,
        enterprise: state.enterprise
    };
};

export default connect(select)(React.createClass({
    propTypes: {
        dispatch: React.PropTypes.func.isRequired
    },

    componentDidMount() {
        this.props.dispatch(fetchQrcodes());
    },

    render() {
        return(
            <div>
                <Header>
                    <span className="title">二维码管理</span>
                </Header>
                <Content>
                    <Qrcode value="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3f5e03a894a3a50c&redirect_uri=http%3A%2F%2Fwww.bekii.in%2Fusers&response_type=code&scope=snsapi_userinfo#wechat_redirect" size={80}/>
                </Content>
            </div>
        );
    }
}));
