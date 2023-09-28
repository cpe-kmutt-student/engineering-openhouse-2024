import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { axiosInstance } from 'src/utils/axios'
import { LoadingPage } from '../Loading'
import { PROFILE_PATH } from 'src/configs/routes'

const CODE_PARAM = 'code'

const Stamp: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const qrCodeID = searchParams.get(CODE_PARAM)

  const handleVerifyCode = useCallback(async () => {
    const res = await axiosInstance.post(`/api/users/take/${qrCodeID}`)

    if (res.status === 200) {
      window.location.pathname = PROFILE_PATH
    }
  }, [qrCodeID])

  useEffect(() => {
    handleVerifyCode()
  }, [handleVerifyCode])

  return <LoadingPage />
}

export default Stamp
