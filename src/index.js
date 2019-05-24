import { Component } from 'preact'
import { Router } from 'preact-router'
import './style'
// Code-splitting is automated for routes
import Home from './routes/home'
// import About from './routes/about'
import NormalityEqDanger from './routes/blog/normality-equals-danger'
import Footer from './components/footer'
import Header from './components/header'
import Subscribe from './components/subscribe'
export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    if (this.currentUrl !== e.url) {
      window.scrollTo(0, 0)
    }
    this.currentUrl = e.url
  }

  render() {
    return (
      <main id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <NormalityEqDanger path="/blog/normality-equals-danger" />
          {/* <About path="/about" /> */}
        </Router>
        <Subscribe />
        <Footer />
      </main>
    )
  }
}
