import React from 'react';
import Header from '../header/header';
import Content from '../content/content';
import Qrcode from 'qrcode.react';

export default React.createClass({
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
});
