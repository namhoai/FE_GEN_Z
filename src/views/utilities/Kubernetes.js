// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import TableKubernetes from '../../ui-component/TableKubernetes';
import useScript from 'hooks/useScript';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => {
    useScript(
        'http://10.0.0.4:8080/s/4c457441ef143bc8682e68b99fc12401-T/jfm0uw/78002/a4da19915e6e701e09369314bf0369d1/2.0.26/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en&collectorId=87b0fae1'
    );

    return (
        <MainCard title="Kubernetes" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <TableKubernetes />
        </MainCard>
    );
};

export default Typography;
