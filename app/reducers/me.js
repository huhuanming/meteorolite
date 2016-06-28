export default (state = {name: 'Tyler'}, action) => {
    switch (action.type) {
        case 'SET_ATTR':
            return state;
        default:
            return state;
    }
};
