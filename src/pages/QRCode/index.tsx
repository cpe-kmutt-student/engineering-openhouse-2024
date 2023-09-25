import { useCallback, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { axiosInstance } from 'src/utils/axios'
import { LoadingPage } from '../Loading'
import { PROFILE_PATH } from 'src/configs/routes'

const QRCode: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const shortCode = searchParams.get('shortCode')

  const navigate = useNavigate()

  // TODO : QR code check handler

  const handleVerifyCode = useCallback(async (): Promise<void> => {
    const res = await axiosInstance.post('<API_ROUTE>')
    console.log(shortCode, res)

    if (shortCode) {
      navigate(PROFILE_PATH)
    }
  }, [shortCode, navigate])

  useEffect(() => {
    handleVerifyCode()
  }, [handleVerifyCode])

  return (
    <>
      <LoadingPage />
    </>
  )
}

export default QRCode
