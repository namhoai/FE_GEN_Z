import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import loginChatReducer from './login_chat/reducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    loginChat: loginChatReducer
});

export default reducer;
