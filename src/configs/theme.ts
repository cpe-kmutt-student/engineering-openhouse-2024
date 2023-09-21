import { ThemeConfig } from 'antd'

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#9e1204',
    colorInfo: '#9e1204',
    colorTextBase: '#000000',
    colorLink: '#864854',
    colorError: '#ff503e',
    colorWarning: '#ffc041',
    colorSuccess: '#77de44',
    fontSize: 14,
    fontFamily: 'K2D',
  },
  components: {
    Table: {
      headerBg: '#9e1204',
      headerColor: '#FFFFFF',
      colorText: '#000000',
      colorBgContainer: '#FFFFFF',
      headerSplitColor: '#FFFFFF',
    },
    Button: {
      colorPrimary: '#FFB031',
      colorPrimaryHover: '#FFA10B',
      colorPrimaryActive: '#946821',
      defaultBg: 'rgba(95, 55, 51, 0.5)',
      colorText: '#FFFFFF',
    },
  },
}
