import wheelStyle from './wheel.module.scss'
const Wheel: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={wheelStyle.container}>
        <div className={wheelStyle.wheel}>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
          <div className={wheelStyle.beam}>
            <span></span>
          </div>
        </div>
        <div className={wheelStyle.base}></div>
      </div>
    </>
  )
}

export default Wheel
