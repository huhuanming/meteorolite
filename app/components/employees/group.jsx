import React from 'react';
import Style from './employees.scss';
import Member from './member';

export default React.createClass({
    render() {
        return(
            <div className={Style.groupPanel}>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
            </div>
        );
    }
});
