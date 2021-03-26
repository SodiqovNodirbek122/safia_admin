import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
    AppstoreOutlined,
    DashboardOutlined
} from '@ant-design/icons'

function IconFinder (icon) {
    switch (icon) {
        case 'DesktopOutlined': return ( <DesktopOutlined /> )
        case 'PieChartOutlined': return ( <PieChartOutlined /> )
        case 'UserOutlined': return ( <UserOutlined /> )
        case 'AppstoreOutlined': return ( <AppstoreOutlined /> )
        case 'DashboardOutlined': return ( <DashboardOutlined /> )
        default: break
    }
}
export default IconFinder
