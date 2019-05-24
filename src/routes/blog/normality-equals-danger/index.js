import { Fragment } from 'preact'
import Helmet from 'preact-helmet'
import style from './style'
import normalityImage from './darkroomsg-157708-unsplash.jpg'
const NormalityEqDanger = () => (
  <Fragment>
    <Helmet
      title="Normality = Danger"
      meta={[
        {
          name: 'description',
          content:
            "Normality doesn't achieve anything extraordinary - This statement sounds obvious enough, but the truth is...most people do not understand to what extent their lives and points of view are being limited/shaped by their ever growing “need” to be accepted by the majority",
        },
        {
          property: 'og:type',
          content: 'article',
        },
      ]}
    />
    <div style={{ background: '#eee', paddingBottom: 24, paddingTop: 12 }}>
      <div class={style.header}>
        <header>
          <h1>Normality = Danger</h1>
          <img
            src={normalityImage}
            alt="Picture of a lake with a sign: Danger. Deep water"
          />
          <div class={style.sub}>
            <time datetime="2019-05-24T11:00Z">May 24th, 2019</time>{' '}
            <span>Photo by 🔮🌊💜✨ on Unsplash</span>
          </div>
        </header>
      </div>
    </div>
    <div class={style.page}>
      <p>Normality doesn't achieve anything extraordinary.</p>
      <p>
        This statement sounds obvious enough, but the truth is...most people do
        not understand to what extent their lives and points of view are being
        limited/shaped by their ever growing “need” to be accepted by the
        majority -{' '}
      </p>

      <p>
        This issue became even more evident since the popularization of social
        media, that serves as a tool of oppression against all those that by any
        means are considered different from the majority – the creation of new
        behavioral standards, being it aesthetic, social or political; ever
        enforced by these channels done nothing but to deepen the issue of
        exclusion, pushing all those remarkable individuals that still dare to
        be, think and create freely, deeper into the margins of society, while
        mediocrity is exalted as greatness and empty people rule all spotlights.
      </p>

      <p>
        Once a person starts to look for excessive acceptance from the majority
        (for the sole sake of being part of this – majority - it gives a solid
        step towards one of the biggest issues of human interaction and
        coexistence – Prejudice.
      </p>

      <p>
        At first directed to itself, policing and condemning its own actions and
        way of being, and after towards others, excluding and wrongly judging
        everyone that does not fit these standards, perpetuating separation and
        exclusion, often giving hate the chance to flourish, paving ground to
        more serious consequences.
      </p>

      <p>
        Arts in a general manner is in an all times low, real creativity is
        something rarely seen nowadays and the overall quality is no different
        from the quality of any cheap mass production, where everything is set
        to meet minimum requirements instead of expressing feelings, ideas and
        true philosophy – arts are no longer meant to inspire – but to distract.
      </p>

      <p>We always had the tools to change all of this…</p>
      <p>now together we find the will to change all of this…</p>

      <div style={{ margin: '24px auto' }}>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          class="twitter-share-button"
          data-show-count="false"
        >
          Tweet
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
      </div>
    </div>
  </Fragment>
)

export default NormalityEqDanger
