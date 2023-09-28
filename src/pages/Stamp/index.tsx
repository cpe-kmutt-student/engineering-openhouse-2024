import { useCallback, useEffect } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { axiosInstance } from 'src/utils/axios'
import { LoadingPage } from '../Loading'
import { BASE_PATH, PROFILE_PATH } from 'src/configs/routes'

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

  return qrCodeID ? <LoadingPage /> : <Navigate to={BASE_PATH} replace />
}

export default Stamp
