import SuperAgent from 'superagent';

export const REQUEST_QRCODES = 'REQUEST_QRCODES';
const requestQrcodes = () => {
    return {
        type: REQUEST_QRCODES
    };
};

export const RECEIVE_QRCODES = 'RECEIVE_QRCODES';
const receiveQrcodes = (qrcodes) => {
    return {
        type: RECEIVE_QRCODES,
        qrcodes: qrcodes,
        receivedAt: Date.now()
    };
};

export const fetchQrcodes = () => {
    return (dispatch) => {
        dispatch(requestQrcodes());

        SuperAgent
            .get('http://localhost:3000/qrcodes')
            .set('Accept', 'application/json')
            .end((err, res) => {
                dispatch(receiveQrcodes(res.body));
            });
    };
};
