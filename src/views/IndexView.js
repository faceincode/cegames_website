/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import FrameworkFormView from './FrameworkFormView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fb2ce675a0bc01f7fb15678").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {
      'framework_form': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/celanding.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <header id="hero" className="af-class-hero">
              <div className="af-class-flex-container w-container">
                <div>
                  <h1 className="af-class-heading">Collective<br />Entertainment</h1>
                  <p className="af-class-paragraph">Our best work happens when we're all rowing together toward the most significant outcomes.<br /><br />We help you get a handle on Free-Top-Play (F2P) product development each step of the way.<br /><br />Formalize your process, improve your metrics, and scale your producs.<br /><br />15+ years developing games, building infrastructure, managing products, and guiding teams.<br /></p>
                </div>
                <div className="af-class-hero-image-mask"><img src="images/CELogo_Large_black.png" sizes="(max-width: 479px) 92vw, (max-width: 991px) 95vw, 498.30078125px" srcSet="images/CELogo_Large_black-p-500.png 500w, images/CELogo_Large_black-p-800.png 800w, images/CELogo_Large_black-p-1080.png 1080w, images/CELogo_Large_black-p-1600.png 1600w, images/CELogo_Large_black-p-2000.png 2000w, images/CELogo_Large_black-p-2600.png 2600w, images/CELogo_Large_black-p-3200.png 3200w, images/CELogo_Large_black.png 5000w" alt className="af-class-hero-image" /></div>
              </div>
            </header>
            <div className="w-row">
              <div className="af-class-column w-col w-col-6">
                <div className="af-class-centered-container w-container">
                  <h2 className="af-class-heading-3">The Framework</h2>
                  <p className="af-class-paragraph-3">A F2P mobile game development framework that formalizes the step-by-step progress of market research, to scaling.<br />Coming Soon.</p>
                  {map(proxies['framework_form'], props => <af-framework_form {...props}>{props.children}</af-framework_form>)}
                </div>
              </div>
              <div className="af-class-column-2 w-col w-col-6">
                <div className="af-class-centered-container w-container">
                  <h2 className="af-class-heading-2">Consulting</h2>
                  <p className="af-class-paragraph-2">Tell me about your progress, goals, and timelines.<br />I'll help you soundboard, discuss strategies, and explore tactics.</p>
                  <div className="af-class-div-block-4">
                    <a href="https://calendly.com/roberto_alcantara/45-minute?month=2020-11&date=2020-11-17&back=1" target="_blank" className="af-class-button w-button">Join&nbsp;Waitlist</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-div-block-3">
              <a href="https://www.linkedin.com/in/ship-it/" target="_blank" className="af-class-link-block w-inline-block"><img src="images/linkedin-icon-png-transparent-background-13.png" loading="lazy" alt className="af-class-image-2" /></a>
              <a href="#mailto:roberto@cegames.ca" className="w-inline-block"><img src="images/mail_icon.png" loading="lazy" sizes="100px" srcSet="images/mail_icon-p-500.png 500w, images/mail_icon-p-800.png 800w, images/mail_icon.png 980w" alt className="af-class-image-4" /></a>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */