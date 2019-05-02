import style from './style'
const Subscribe = () => {
  return (
    <form
      action="https://bwolves.us20.list-manage.com/subscribe/post?u=3d57efb3074fcb3109b4691f7&amp;id=b776ed9857"
      method="post"
      id="subscribe-form"
      name="subscribe-form"
      class={style}
      target="_blank"
      novalidate
    >
      <div class="wrapper">
        <div class="inputs">
          <h2>Newsletter</h2>
          <input
            type="email"
            value=""
            name="EMAIL"
            required
            id="EMAIL"
            placeholder="Email address"
          />
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_3d57efb3074fcb3109b4691f7_b776ed9857"
              tabindex="-1"
              value=""
            />
          </div>
        </div>
        <div class="submit">
          <input
            type="submit"
            value="Join the pack"
            name="subscribe"
            id="subscribe-button"
            class="button"
          />
        </div>
      </div>
    </form>
  )
}
export default Subscribe
