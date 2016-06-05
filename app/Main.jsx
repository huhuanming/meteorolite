import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

class Main extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <RaisedButton label="Home" secondary={true} />
            </MuiThemeProvider>
        );
    }
}

export default Main;
