import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  AppstoreOutlined,
  DashboardOutlined,
  MobileOutlined,
  ShoppingOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  ProjectFilled,
  SettingFilled,
} from "@ant-design/icons";

function IconFinder(icon) {
  switch (icon) {
    case "DesktopOutlined":
      return <DesktopOutlined />;
    case "PieChartOutlined":
      return <PieChartOutlined />;
    case "UserOutlined":
      return <UserOutlined />;
    case "AppstoreOutlined":
      return <AppstoreOutlined />;
    case "DashboardOutlined":
      return <DashboardOutlined />;
    case "MobileOutlined":
      return <MobileOutlined />;
    case "ShoppingOutlined":
      return <ShoppingOutlined />;
    case "SettingOutlined":
      return <SettingOutlined />;

    case "UsergroupAddOutlined":
      return <UsergroupAddOutlined />;
    case "UnorderedListOutlined":
      return <UnorderedListOutlined />;
    case "ProjectFilled":
      return <ProjectFilled rotate={180} />;
    case "SettingFilled":
      return <SettingFilled />;
    default:
      break;
  }
}
export default IconFinder;
