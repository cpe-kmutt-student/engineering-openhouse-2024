const Navbar: React.FC<Props> = ({ styles }: Props): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <img src="https://cpe.kmutt.ac.th/assets/LOGO-CPE.svg" alt="logo" />
      <div className={styles.navbar_links}>
        <a href="/">home</a>
        <a href="/about">about</a>
      </div>
    </nav>
  )
}

export default Navbar

interface Props {
  styles: CSSModuleClasses
}
