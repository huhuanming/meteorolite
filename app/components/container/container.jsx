import React from 'react';
import Styles from './container.scss';

export default React.createClass({
    render() {
        return(
            <div className={Styles.root}>
                { this.props.children }
            </div>
        );
    }
});
