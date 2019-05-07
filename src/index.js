import { Component } from 'preact'
import { Router } from 'preact-router'
import './style'
// Code-splitting is automated for routes
import Home from './routes/home'
// import About from './routes/about'
import Footer from './components/footer'
import Header from './components/header'
import Subscribe from './components/subscribe'
export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <main id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          {/* <About path="/about" /> */}
        </Router>
        <Subscribe />
        <Footer />
      </main>
    )
  }
}
