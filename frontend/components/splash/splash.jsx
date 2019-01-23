import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  componentDidMount() {
    const wikiPageLink = document.getElementById('splash-wiki-page-link');
    const wikiDropDown = document.getElementById('splash-wiki-drop-down');

    wikiPageLink.addEventListener("mouseover", () => {
      wikiDropDown.classList.remove('splash-wiki-drop-down-hidden');
    });

    wikiPageLink.addEventListener("mouseout", () => {
      wikiDropDown.classList.add('splash-wiki-drop-down-hidden');
    });
  }

  render() {
    return (
      <div className="splash-page-wrapper">
        <header>
          <nav className="splash-header-inner">
            <div className="splash-header-logo">
              <img src="assets/discode_logo.png" />
            </div>
            <ul className="splash-header-nav">
              <li><a href="https://github.com/stephenchung27/discode">Project Github</a></li>
              <li id="splash-wiki-page-link">Wiki Page<img src="assets/splash_images/arrow.svg" className="splash-drop-down-arrow" />
                <ul id="splash-wiki-drop-down" className="splash-wiki-drop-down-hidden">
                  <li><a href="https://github.com/stephenchung27/discode/wiki">Home</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/MVP-list">MVP List</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/Database-Schema">Database Schema</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/Sample-State">Sample State</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/Frontend-Routes">Frontend Routes</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/Backend-Routes">Backend Routes</a></li>
                </ul>
              </li>
            </ul>
            <ul className="splash-header-nav-right">
              <li><a href="https://github.com/stephenchung27"><i className="fab fa-github"></i></a></li>
              <li><a href=""><i className="fab fa-linkedin"></i></a></li>
              <li><a href=""><i className="fab fa-angellist"></i></a></li>
              <li><Link to="/login" className="splash-app-button">Login</Link></li>
            </ul>
            <div className="splash-app-academy">
              <span className="splash-line"></span>
            </div>
          </nav>
        </header>
        <section>
          <div className="splash-content">
            <h1 className="splash-theme-header">It's time to ditch Skype and TeamSpeak.</h1>
            <p className="splash-blurb">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop
              and phone.
          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
            <div className="splash-buttons-wrapper">
              <a className="splash-download" href="">Login as a Demo User</a>
              <div className="splash-open-discord">Open Discord in your browser</div>
            </div>
          </div>
          <div className="splash-image">
            <div className="splash-shadow"></div>
            <img src="assets/splash_images/triangle.svg" className="splash-triangle1 splash-shape" />
            <img src="assets/splash_images/triangle.svg" className="splash-triangle2 splash-shape" />
            <img src="assets/splash_images/triangle.svg" className="splash-triangle3 splash-shape" />
            <img src="assets/splash_images/dot.svg" className="splash-dot1 splash-shape" />
            <img src="assets/splash_images/dot.svg" className="splash-dot2 splash-shape" />
            <img src="assets/splash_images/dot.svg" className="splash-dot3 splash-shape" />
            <img src="assets/splash_images/dot.svg" className="splash-dot4 splash-shape" />
            <img src="assets/splash_images/dot.svg" className="splash-dot5 splash-shape" />
            <img src="assets/splash_images/square.svg" className="splash-square1 splash-shape" />
            <img src="assets/splash_images/square.svg" className="splash-square2 splash-shape" />
            <img src="assets/splash_images/square.svg" className="splash-square3 splash-shape" />
            <img src="assets/splash_images/x.svg" className="splash-x1 splash-shape" />
            <img src="assets/splash_images/x.svg" className="splash-x2 splash-shape" />
            <img src="assets/splash_images/circle.svg" className="splash-circle1 splash-shape" />
            <img src="assets/splash_images/circle.svg" className="splash-circle2 splash-shape" />
            <img src="assets/splash_images/circle.svg" className="splash-circle3 splash-shape" />
            <img src="assets/splash_images/coin.svg" className="splash-coin1" />
            <img src="assets/splash_images/bomb.svg" className="splash-bomb" />
            <img src="assets/splash_images/coin.svg" className="splash-coin2" />
            <img src="assets/splash_images/mario.svg" className="splash-mario" />
            <img src="assets/splash_images/cartridge.svg" className="splash-cartridge" />
            <img src="assets/splash_images/desktop.svg" className="splash-desktop" />
            <img src="assets/splash_images/controller.svg" className="splash-controller" />
            <img src="assets/splash_images/potion.svg" className="splash-potion" />
            <img src="assets/splash_images/android.svg" className="splash-android" />
            <img src="assets/splash_images/iphone.svg" className="splash-iphone" />
            <img src="assets/splash_images/shield.svg" className="splash-shield" />
            <img src="assets/splash_images/laptop.svg" className="splash-laptop" />
            <img src="assets/splash_images/headphones.svg" className="splash-headphones" />
          </div>
        </section>
        <footer>
          <p>This is Stephen Chung's full stack project for App Academy.</p>
        </footer>
      </div>
    )
  }
}

export default Splash;