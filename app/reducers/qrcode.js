import Immutable from 'immutable';
import {RECEIVE_QRCODES} from '../actions/qrcode';

const initState = Immutable.Map({
    visibilityFilter: 'ALL',
    qrcodes: []
});

export default (state = initState, action) => {
    switch (action.type) {
        case RECEIVE_QRCODES:
            return state.set('qrcodes', action.qrcodes);
        default:
            return state;
    }
};
