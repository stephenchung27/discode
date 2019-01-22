import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="page-wrapper">
      <header>
        <nav className="header-inner">
          <div className="header-logo">
            <img src="./discode_logo.png" />
          </div>
          <ul className="header-nav">
            <li><a href="#">Project Github</a></li>
            <li id="wiki-page-link">Wiki Page<img src="/assets/splash-shapes/arrow.svg" className="drop-down-arrow" />
              <ul id="wiki-drop-down" className="wiki-drop-down-hidden">
                <li>MVP List</li>
                <li>Database Schema</li>
                <li>Sample State</li>
                <li>Frontend Routes</li>
                <li>Backend Routes</li>
              </ul>
            </li>
          </ul>
          <ul className="header-nav-right">
            <li><i className="fab fa-github"></i></li>
            <li><i className="fab fa-linkedin"></i></li>
            <li><i className="fab fa-angellist"></i></li>
            <li><a className="app-button">Login</a></li>
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
          <img src="images/triangle.svg" className="triangle1 shape" />
          <img src="images/triangle.svg" className="triangle2 shape" />
          <img src="images/triangle.svg" className="triangle3 shape" />
          <img src="images/dot.svg" className="dot1 shape" />
          <img src="images/dot.svg" className="dot2 shape" />
          <img src="images/dot.svg" className="dot3 shape" />
          <img src="images/dot.svg" className="dot4 shape" />
          <img src="images/dot.svg" className="dot5 shape" />
          <img src="images/square.svg" className="square1 shape" />
          <img src="images/square.svg" className="square2 shape" />
          <img src="images/square.svg" className="square3 shape" />
          <img src="images/x.svg" className="x1 shape" />
          <img src="images/x.svg" className="x2 shape" />
          <img src="images/circle.svg" className="circle1 shape" />
          <img src="images/circle.svg" className="circle2 shape" />
          <img src="images/circle.svg" className="circle3 shape" />
          <img src="images/coin.svg" className="coin1" />
          <img src="images/bomb.svg" className="bomb" />
          <img src="images/coin.svg" className="coin2" />
          <img src="images/mario.svg" className="mario" />
          <img src="images/cartridge.svg" className="cartridge" />
          <img src="images/desktop.svg" className="desktop" />
          <img src="images/controller.svg" className="controller" />
          <img src="images/potion.svg" className="potion" />
          <img src="images/android.svg" className="android" />
          <img src="images/iphone.svg" className="iphone" />
          <img src="images/shield.svg" className="shield" />
          <img src="images/laptop.svg" className="laptop" />
          <img src="images/headphones.svg" className="headphones" />
        </div>
      </section>
      <footer>
        <p>This is Stephen Chung's full stack project for App Academy.</p>
      </footer>
    </div>
  )
}

export default Splash;