import React from 'react';
import Content from '../content/content';
import Header from './header';

export default React.createClass({
    propTypes: {
        goodsName: React.PropTypes.string.isRequired
    },

    render() {
        return(
            <Content>
                <Header
                    goodsName={this.props.goodsName}
                    goodsCount={5}
                />
                <section className="flex-table">
                    <div className="table-title">
                        <h5 className="flex5">
                            <span>#</span>
                        </h5>
                        <h5 className="flex5">
                            <span>名称</span>
                        </h5>
                    </div>
                    <div className="table-body">
                        <div className="flex5">1</div>
                        <div className="flex5">扫帚</div>
                    </div>
                    <div className="table-body">
                        <div className="flex5">1</div>
                        <div className="flex5">扫帚</div>
                    </div>
                    <div className="table-body">
                        <div className="flex5">1</div>
                        <div className="flex5">扫帚</div>
                    </div>
                    <div className="table-body">
                        <div className="flex5">1</div>
                        <div className="flex5">扫帚</div>
                    </div>
                    <div className="table-body">
                        <div className="flex5">1</div>
                        <div className="flex5">扫帚</div>
                    </div>
                </section>
            </Content>
        );
    }
});
