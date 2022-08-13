// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import TableIssues from '../../ui-component/TableIssues';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
    <MainCard title="Issues" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
        <TableIssues />
    </MainCard>
);

export default Typography;
