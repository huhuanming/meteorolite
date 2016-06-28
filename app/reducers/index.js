import {combineReducers} from 'redux';
import me from './me';
import enterprise from './enterprise';
import qrcode from './qrcode';

export default combineReducers({
    me,
    enterprise,
    qrcode
});
