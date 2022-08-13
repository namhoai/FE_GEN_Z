import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import { connect } from 'react-redux';

import * as actions from '../store/login_chat/action';
import { useEffect } from 'react';

// ==============================|| ROUTING RENDER ||============================== //

function ThemeRoutes(props) {
    const { getLoggedinUser, isLoggedIn } = props;
    useEffect(() => {
        getLoggedinUser();
    }, []);
    return useRoutes([MainRoutes, AuthenticationRoutes]);
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    getLoggedinUser: () => dispatch(actions.authCheckState())
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeRoutes);
