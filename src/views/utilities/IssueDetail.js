// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import ProcessIssue from '../../ui-component/ProcessIssue';
import IssueInformation from '../../ui-component/IssueInformation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_DOMAIN } from '../../consts';
import { useLocation } from 'react-router-dom';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
    const { search } = useLocation();
    const [data, setData] = useState({});

    const callAPI = () => {
        const params = new URLSearchParams(search);
        let jiraId = '';
        if (params.get('id')) {
            jiraId = params.get('id');
        }

        return axios.get(`${API_DOMAIN}/issue/${jiraId}`);
    };

    const getData = async () => {
        const response = await callAPI();
        const status = response?.status;
        if (status === 200) {
            setData(response?.data?.Issue);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <MainCard title="Issue information" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
                <IssueInformation data={data} />
            </MainCard>
            <br />
            <MainCard title="Issue process" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
                <ProcessIssue />
            </MainCard>
        </>
    );
};

export default Typography;
