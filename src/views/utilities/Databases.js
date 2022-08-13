// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import TableDatabase from '../../ui-component/TableDatabase';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
    <MainCard title="Database" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
        <TableDatabase />
    </MainCard>
);

export default Typography;
