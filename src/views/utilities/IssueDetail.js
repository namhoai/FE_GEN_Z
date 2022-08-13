// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import ProcessIssue from '../../ui-component/ProcessIssue';
import IssueInformation from '../../ui-component/IssueInformation';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
    <>
        <MainCard title="Issue information" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <IssueInformation />
        </MainCard>
        <br />
        <MainCard title="Issue process" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <ProcessIssue />
        </MainCard>
    </>
);

export default Typography;
