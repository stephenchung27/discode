import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../../actions/session_actions';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

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

  demoLogin() {
    this.props.login({ email: "demo@demo.com", password: "starwars" })
      .then(() => {
        this.props.history.push("/channels/@me");
      });
  }

  render() {
    return (
      <div className="splash-page-wrapper">
        <header>
          <nav className="splash-header-inner">
            <div className="splash-header-logo">
              <img src="https://s3.amazonaws.com/discode/logo.png" />
            </div>
            <ul className="splash-header-nav">
              <li><a href="https://github.com/stephenchung27/discode">Project Github</a></li>
              <li id="splash-wiki-page-link">Wiki Page<img src="https://s3.amazonaws.com/discode/splash/arrow.svg" className="splash-drop-down-arrow" />
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
              <li><Link to="/login" className="splash-app-button">
                {this.props.loggedIn ? "Open" : "Login"}
              </Link></li>
            </ul>
            <div className="splash-app-academy">
              <span className="splash-line"></span>
              <a href="https://www.appacademy.io/"><div className="splash-aa-logo"></div></a>
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
              <button type="button" className="splash-download" onClick={this.demoLogin}>Login as a Demo User</button>
              <Link to="/login" className="splash-open-discord">
                {this.props.loggedIn ? "Open Discode" : "Open Discode in your browser"}
              </Link>
            </div>
          </div>
          <div className="splash-image">
            <div className="splash-shadow"></div>
            <img src="https://s3.amazonaws.com/discode/splash/triangle.svg" className="splash-triangle1 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/triangle.svg" className="splash-triangle2 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/triangle.svg" className="splash-triangle3 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/dot.svg" className="splash-dot1 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/dot.svg" className="splash-dot2 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/dot.svg" className="splash-dot3 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/dot.svg" className="splash-dot4 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/dot.svg" className="splash-dot5 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/square.svg" className="splash-square1 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/square.svg" className="splash-square2 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/square.svg" className="splash-square3 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/x.svg" className="splash-x1 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/x.svg" className="splash-x2 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/circle.svg" className="splash-circle1 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/circle.svg" className="splash-circle2 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/circle.svg" className="splash-circle3 splash-shape" />
            <img src="https://s3.amazonaws.com/discode/splash/coin.svg" className="splash-coin1" />
            <img src="https://s3.amazonaws.com/discode/splash/bomb.svg" className="splash-bomb" />
            <img src="https://s3.amazonaws.com/discode/splash/coin.svg" className="splash-coin2" />
            <img src="https://s3.amazonaws.com/discode/splash/mario.svg" className="splash-mario" />
            <img src="https://s3.amazonaws.com/discode/splash/cartridge.svg" className="splash-cartridge" />
            <img src="https://s3.amazonaws.com/discode/splash/desktop.svg" className="splash-desktop" />
            <img src="https://s3.amazonaws.com/discode/splash/controller.svg" className="splash-controller" />
            <img src="https://s3.amazonaws.com/discode/splash/potion.svg" className="splash-potion" />
            <img src="https://s3.amazonaws.com/discode/splash/android.svg" className="splash-android" />
            <img src="https://s3.amazonaws.com/discode/splash/iphone.svg" className="splash-iphone" />
            <img src="https://s3.amazonaws.com/discode/splash/shield.svg" className="splash-shield" />
            <img src="https://s3.amazonaws.com/discode/splash/laptop.svg" className="splash-laptop" />
            <img src="https://s3.amazonaws.com/discode/splash/headphones.svg" className="splash-headphones" />
          </div>
        </section>
        <footer>
          <div className="splash-separator"></div>
          <div className="join-discord">
            <div className="splash-stats">
              <h2>Ready to try Discode? It's free!</h2>
              <h3>Join over 150 million players today</h3>
            </div>
            <Link to="/login">Open Discode</Link>
          </div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id),
});

const mapDispatchToProps = dispatch => ({
  login: userInfo => dispatch(login(userInfo)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Splash));