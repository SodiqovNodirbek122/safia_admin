import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
    AppstoreOutlined,
    DashboardOutlined,
    MobileOutlined,
    ShoppingOutlined,
    SettingOutlined
} from '@ant-design/icons'

function IconFinder (icon) {
    switch (icon) {
        case 'DesktopOutlined': return ( <DesktopOutlined /> )
        case 'PieChartOutlined': return ( <PieChartOutlined /> )
        case 'UserOutlined': return ( <UserOutlined /> )
        case 'AppstoreOutlined': return ( <AppstoreOutlined /> )
        case 'DashboardOutlined': return ( <DashboardOutlined /> )
        case 'MobileOutlined': return ( <MobileOutlined /> )
        case 'ShoppingOutlined': return ( <ShoppingOutlined /> )
        case 'SettingOutlined': return ( <SettingOutlined /> )
        default: break
    }
}
export default IconFinder
