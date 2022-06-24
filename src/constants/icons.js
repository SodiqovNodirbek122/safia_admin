import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  StarOutlined,
  SketchOutlined,
  HistoryOutlined,
  MessageOutlined,
  FileTextOutlined,
  NotificationOutlined,
  FolderOpenOutlined,
  FieldTimeOutlined,
  FastBackwardOutlined,
  RollbackOutlined,
  TeamOutlined,
  ShoppingOutlined,
} from '@ant-design/icons'

function IconFinder(icon) {
  switch (icon) {
    case 'HomeOutlined':
      return <HomeOutlined />
    case 'UserOutlined':
      return <UserOutlined />
    case 'SettingOutlined':
      return <SettingOutlined />
    case 'StarOutlined':
      return <StarOutlined />
    case 'SketchOutlined':
      return <SketchOutlined />
    case 'HistoryOutlined':
      return <HistoryOutlined />
    case 'MessageOutlined':
      return <MessageOutlined />
    case 'FileTextOutlined':
      return <FileTextOutlined />
    case 'NotificationOutlined':
      return <NotificationOutlined />
    case 'FolderOpenOutlined':
      return <FolderOpenOutlined />
    case 'FieldTimeOutlined':
      return <FieldTimeOutlined />
    case 'FastBackwardOutlined':
      return <FastBackwardOutlined />
    case 'RollbackOutlined':
      return <RollbackOutlined />
    case 'TeamOutlined':
      return <TeamOutlined />
    case 'ShoppingOutlined':
      return <ShoppingOutlined />
    default:
      break
  }
}
export default IconFinder
