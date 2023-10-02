import BackToOpenhouse from 'src/components/Navigations/BackToOpenhouseNav'
import Navbar from 'src/components/Navigations/Navbar'
import { BASE_PATH, QR_CODE_VERITY_PATH } from 'src/configs/routes'

export const routeNavFilter = (pathname: string) => {
  switch (pathname) {
    case BASE_PATH:
      return <Navbar />

    case QR_CODE_VERITY_PATH:
      return

    default:
      return <BackToOpenhouse />
  }
}
