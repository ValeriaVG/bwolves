import style from './style'
import Logo from './bwolves.svg'
const Home = () => (
  <div class={style.home}>
    <img src={Logo} alt="BWolves logo" class={style.logo} />
  </div>
)

export default Home
