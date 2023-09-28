import { useCallback, useEffect } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { axiosInstance } from 'src/utils/axios'
import { BASE_PATH, PROFILE_PATH } from 'src/configs/routes'
import { LoadingPage } from '../Loading'

const CODE_PARAM = 'code'

const Stamp: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const qrCodeID = searchParams.get(CODE_PARAM)

  const navigate = useNavigate()

  const handleVerifyCode = useCallback(async () => {
    const res = await axiosInstance.get(`/api/users/take/${qrCodeID}`)

    if (res.status === 200) {
      navigate(PROFILE_PATH, { replace: true })
      navigate(0)
    }
  }, [qrCodeID, navigate])

  useEffect(() => {
    handleVerifyCode()
  }, [handleVerifyCode])

  return qrCodeID ? <LoadingPage /> : <Navigate to={BASE_PATH} replace />
}

export default Stamp
