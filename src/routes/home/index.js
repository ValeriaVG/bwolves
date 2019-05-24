import Helmet from 'preact-helmet'
import style from './style'
import Logo from './bwolves.svg'
import normalityImage from '../blog/normality-equals-danger/darkroomsg-157708-unsplash.jpg'
const Home = () => (
  <div class={style.home}>
    <Helmet
      title="B・WOLVES"
      meta={[
        {
          name: 'description',
          content:
            'Denouncing the dangers and limitations of Normality through Alternative arts, Writings and philosophy.',
        },
        ,
      ]}
    />
    <div class={style.wrapper}>
      <img src={Logo} alt="BWolves logo" class={style.logo} />
    </div>
    <div class={style.content}>
      <p>
        All individuals that think outside the box have the potential to change
        the world.
      </p>
      <p>
        We live in a society where be different or think different is seen as an
        issue, when in fact excess normality is the true villain.
      </p>

      <p>
        Nowadays its easy to live our lives believing our main goal is to be
        accepted by the majority, and because of that a lot of people are afraid
        to express their opinions, points of view and creativity – And this has
        led to a homogeneous society where most people feel the need to follow
        the norms of fashion, thinking and behavior, restraining their true
        potential to achieve great things, and preventing society as a whole
        from achieving true diversity.
      </p>

      <p>
        Bwolves is an online society that proposes a safe space to all things
        alternative, where all forms of ideas, arts, beliefs and ways of life
        can be freely discussed without any of the restraints imposed by
        prejudice and mainstream thinking.
      </p>
    </div>
    <div class={style.articles}>
      <section>
        <article>
          <header>
            <h2>
              <a href="/blog/normality-equals-danger">Normality = Danger</a>
            </h2>
            <a href="/blog/normality-equals-danger">
              <img
                src={normalityImage}
                alt="Picture of a lake with a sign: Danger. Deep water"
              />
            </a>
            <div class={style.sub}>
              <time datetime="2019-05-24T11:00Z">May 24th, 2019</time>{' '}
              <span>Photo by 🔮🌊💜✨ on Unsplash</span>
            </div>
          </header>
          <p>
            Normality doesn't achieve anything extraordinary.
            <br />
            This statement sounds obvious enough, but the truth is...most people
            do not understand to what extent their lives and points of view are
            being limited/shaped by their ever growing “need” to be accepted by
            the majority...{' '}
            <a href="/blog/normality-equals-danger">read more</a>
          </p>
        </article>
      </section>
    </div>
  </div>
)

export default Home
