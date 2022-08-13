// assets
import { IconDeviceComputerCamera, IconDatabase, IconShadow, IconWindmill, IconAlignLeft, IconPhoneCall } from '@tabler/icons';

// constant
const icons = {
    IconDeviceComputerCamera,
    IconDatabase,
    IconShadow,
    IconWindmill,
    IconAlignLeft,
    IconPhoneCall
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Application',
    type: 'group',
    children: [
        {
            id: 'util-issue',
            title: 'Issues',
            type: 'item',
            url: '/utils/issues',
            icon: icons.IconAlignLeft,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Kubernetes',
            type: 'item',
            url: '/utils/kubernetes',
            icon: icons.IconDeviceComputerCamera,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Databases',
            type: 'item',
            url: '/utils/database',
            icon: icons.IconDatabase,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Monitoring',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'API management',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'API',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Kong',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'util-chat',
            title: 'CSKH',
            type: 'item',
            url: '/utils/cskh',
            icon: icons.IconPhoneCall,
            breadcrumbs: false
        }
    ]
};

export default utilities;
