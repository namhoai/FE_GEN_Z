import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';

// style + assets
import 'assets/scss/style.scss';
import config from './config';

import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_CONSTANTS } from './consts';

// ==============================|| REACT DOM RENDER  ||============================== //

const appID = COMETCHAT_CONSTANTS.APP_ID;
const region = COMETCHAT_CONSTANTS.REGION;

const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
    () => {
        if (CometChat.setSource) {
            CometChat.setSource('ui-kit', 'web', 'reactjs');
        }
        console.log('Initialization completed successfully');
        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter basename={config.basename}>
                    <App />
                </BrowserRouter>
            </Provider>,
            document.getElementById('root')
        );
    },
    (error) => {
        console.log('Initialization failed with error:', error);
        // Check the reason for error and take appropriate action.
    }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
