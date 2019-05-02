import style from './style'
import Logo from './logo.svg'

const Header = () => {
  return (
    <header class={style}>
      <a class="logo" href="/">
        <img src={Logo} alt="bWolves logo" />
        <div class="title">
          <span class="name">B・WOLVES</span>
          <span class="slogan">Denouncing Normality</span>
        </div>
      </a>
    </header>
  )
}
export default Header
