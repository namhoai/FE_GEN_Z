// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import TableIssues from '../../ui-component/TableIssues';
import ProcessIssue from '../../ui-component/ProcessIssue';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
    <>
        <MainCard title="Issue information" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            namvh
        </MainCard>
        <br />
        <MainCard title="Issue process" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <ProcessIssue />
        </MainCard>
    </>
);

export default Typography;
