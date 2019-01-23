import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  componentDidMount() {
    const wikiPageLink = document.getElementById('wiki-page-link');
    const wikiDropDown = document.getElementById('wiki-drop-down');

    wikiPageLink.addEventListener("mouseover", () => {
      wikiDropDown.classList.remove('wiki-drop-down-hidden');
    });

    wikiPageLink.addEventListener("mouseout", () => {
      wikiDropDown.classList.add('wiki-drop-down-hidden');
    });
  }

  render() {
    return (
      <div className="page-wrapper">
        <header>
          <nav className="header-inner">
            <div className="header-logo">
              <img src="assets/discode_logo.png" />
            </div>
            <ul className="header-nav">
              <li><a href="https://github.com/stephenchung27/discode">Project Github</a></li>
              <li id="wiki-page-link">Wiki Page<img src="assets/splash_images/arrow.svg" className="drop-down-arrow" />
                <ul id="wiki-drop-down" className="wiki-drop-down-hidden">
                  <li><a href="https://github.com/stephenchung27/discode/wiki">Home</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/MVP-list">MVP List</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/Database-Schema">Database Schema</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/Sample-State">Sample State</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/Frontend-Routes">Frontend Routes</a></li>
                  <li><a href="https://github.com/stephenchung27/discode/wiki/Backend-Routes">Backend Routes</a></li>
                </ul>
              </li>
            </ul>
            <ul className="header-nav-right">
              <li><i className="fab fa-github"></i></li>
              <li><i className="fab fa-linkedin"></i></li>
              <li><i className="fab fa-angellist"></i></li>
              <li><Link to="/login" className="app-button">Login</Link></li>
            </ul>
            <div className="app-academy">
              <span className="line"></span>
            </div>
          </nav>
        </header>
        <section>
          <div className="content">
            <h1 className="theme-header">It's time to ditch Skype and TeamSpeak.</h1>
            <p className="blurb">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop
              and phone.
          Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
            <div className="buttons-wrapper">
              <a className="download" href="">Download for macOS</a>
              <div className="open-discord">Open Discord in your browser</div>
            </div>
          </div>
          <div className="splash-image">
            <div className="shadow"></div>
            <img src="assets/splash_images/triangle.svg" className="triangle1 shape" />
            <img src="assets/splash_images/triangle.svg" className="triangle2 shape" />
            <img src="assets/splash_images/triangle.svg" className="triangle3 shape" />
            <img src="assets/splash_images/dot.svg" className="dot1 shape" />
            <img src="assets/splash_images/dot.svg" className="dot2 shape" />
            <img src="assets/splash_images/dot.svg" className="dot3 shape" />
            <img src="assets/splash_images/dot.svg" className="dot4 shape" />
            <img src="assets/splash_images/dot.svg" className="dot5 shape" />
            <img src="assets/splash_images/square.svg" className="square1 shape" />
            <img src="assets/splash_images/square.svg" className="square2 shape" />
            <img src="assets/splash_images/square.svg" className="square3 shape" />
            <img src="assets/splash_images/x.svg" className="x1 shape" />
            <img src="assets/splash_images/x.svg" className="x2 shape" />
            <img src="assets/splash_images/circle.svg" className="circle1 shape" />
            <img src="assets/splash_images/circle.svg" className="circle2 shape" />
            <img src="assets/splash_images/circle.svg" className="circle3 shape" />
            <img src="assets/splash_images/coin.svg" className="coin1" />
            <img src="assets/splash_images/bomb.svg" className="bomb" />
            <img src="assets/splash_images/coin.svg" className="coin2" />
            <img src="assets/splash_images/mario.svg" className="mario" />
            <img src="assets/splash_images/cartridge.svg" className="cartridge" />
            <img src="assets/splash_images/desktop.svg" className="desktop" />
            <img src="assets/splash_images/controller.svg" className="controller" />
            <img src="assets/splash_images/potion.svg" className="potion" />
            <img src="assets/splash_images/android.svg" className="android" />
            <img src="assets/splash_images/iphone.svg" className="iphone" />
            <img src="assets/splash_images/shield.svg" className="shield" />
            <img src="assets/splash_images/laptop.svg" className="laptop" />
            <img src="assets/splash_images/headphones.svg" className="headphones" />
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