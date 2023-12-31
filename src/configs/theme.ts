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
    fontFamily: 'Noto Sans Thai',
  },
  components: {
    Button: {
      colorPrimary: '#FFB031',
      colorPrimaryHover: '#FFA10B',
      colorPrimaryActive: '#946821',
      defaultBg: 'rgba(95, 55, 51, 0.5)',
      colorText: '#FFFFFF',
      defaultBorderColor: 'transparent',
    },
    Collapse: {
      headerBg: 'rgba(95, 55, 51, 0.5)',
      contentBg: 'rgba(95, 55, 51, 0.5)',
    },
  },
}
