import React from 'react';
import IconStatus from './IconStatus';
import { Avatar, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import NotificationSection from '../layout/MainLayout/Header/NotificationSection';

function IssueInformation() {
    return (
        <>
            <div style={{ float: 'right', width: '50%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: 200, padding: 10, background: '#F9E79F', borderRadius: 5, textAlign: 'center' }}>
                        <span>Error Code:</span>&nbsp;&nbsp;
                        <b>VM_0022</b>
                    </div>
                    <div style={{ width: 200, padding: 10, background: '#F5B7B1', borderRadius: 5, textAlign: 'center' }}>
                        <span>Issue ID:</span>&nbsp;&nbsp;
                        <b>125</b>
                    </div>
                    <div style={{ width: 200, padding: 10, background: '#85C1E9', borderRadius: 5, textAlign: 'center' }}>
                        <span>Tenant:</span>&nbsp;&nbsp;
                        <b>00001-XPLAT01</b>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <span>Data Log: </span>
                    <div>
                        <br />
                        <Button variant="outlined" startIcon={<DownloadIcon />}>
                            Log File
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <span>Handler:</span>
                    </div>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar>N</Avatar>&nbsp;&nbsp;&nbsp;
                        <b>Vũ Hoài Nam</b>
                        <NotificationSection />
                    </div>
                </div>
                <br />
                <div>
                    <div>Status:</div>
                    <br />
                    <IconStatus status={1} />
                </div>
            </div>
        </>
    );
}

export default IssueInformation;
