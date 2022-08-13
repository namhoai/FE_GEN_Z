import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Kubernetes = Loadable(lazy(() => import('views/utilities/Kubernetes')));
const CSKH = Loadable(lazy(() => import('views/utilities/CSKH')));
const Databases = Loadable(lazy(() => import('views/utilities/Databases')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const Issues = Loadable(lazy(() => import('views/utilities/Issues')));
const IssueDetail = Loadable(lazy(() => import('views/utilities/IssueDetail')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'kubernetes',
                    element: <Kubernetes />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'cskh',
                    element: <CSKH />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'database',
                    element: <Databases />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'issues',
                    element: <Issues />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'issue-detail',
                    element: <IssueDetail />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
