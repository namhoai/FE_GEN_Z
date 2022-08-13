import React from 'react';
import PulseDot from 'react-pulse-dot';
import { STATUS_TYPE } from './constant';

import 'react-pulse-dot/dist/index.css';

const getDataStatusType = () => ({
    [STATUS_TYPE.CREATING]: {
        icon: <PulseDot color="warning" />,
        text: 'TODO'
    },
    [STATUS_TYPE.CREATED]: {
        icon: <PulseDot color="success" />,
        text: 'Done'
    }
});

function IconStatus(props) {
    const { status, textStatus } = props;
    const dataStatusType = getDataStatusType();
    const type = dataStatusType[status];
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {type?.icon}
            &nbsp;&nbsp;
            <b style={{ textTransform: 'uppercase' }}>{textStatus || type?.text}</b>
        </div>
    );
}

export default IconStatus;
