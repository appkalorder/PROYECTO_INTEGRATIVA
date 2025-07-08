import { LitElement, css, html } from "lit";
import { User } from "../../models/user.js";
import './espe-loggin.js';
import './espe-register.js'
import '../atomic/search/nav-search.js'

export class EspeNavbar extends LitElement {
  static properties = {
    user: { type: Object },
    showLogin: { type: Boolean },
    showRegister: { type: Boolean }
  }

  constructor() {
    super();
    this.isLoggedIn = false;
    this.showLogin = false;
    this.showRegister = false;
    this.user = null;
  }
  
  _closeLogin() {
    this.showLogin = false;
  }

  _closeRegister() {
    this.showRegister = false;
  }

  _openRegister() {
    this.showLogin = false;
    this.showRegister = true;
  }

  _openLogin() {
    this.showRegister = false;
    this.showLogin = true;
  }

  _openRegisterFromEvent(e) {
    this.showLogin = false;
    this.showRegister = true;
    e.stopPropagation();
  }

  _openLoginFromEvent(e) {
    this.showRegister = false;
    this.showLogin = true;
    e.stopPropagation();
  }

  _handleLoginSuccess(e) {
    this.user = e.detail.user;
    this.isLoggedIn = true;
    this.showLogin = false;
    // Aquí podrías guardar en localStorage o enviar a un servidor
    console.log('Usuario logeado:', this.user);
  }

  _handleRegisterSuccess(e) {
    this.user = e.detail.user;
    this.isLoggedIn = true;
    this.showRegister = false;
    console.log('Usuario registrado:', this.user);
  }

  validateUser() {
    return this.user !== null;
  }

  static styles = css`
    :host {
      background-color: #FFFFCC;
    }

    .header-container ul {
      display: flex;
    }

    ul {
      margin: 0;
      padding: 20px 0;
    }

    ul > li {
      list-style: none;
      flex: 1;
      display: flex;
      align-items: center;
    }

    .search{
      display: flex;
      justify-content: center;
    }

    .logo a{
      display: flex;
      justify-content: center;
    }

    header a {
      text-decoration: none;
      color: black;
    }

    header .menu {
      display: flex;
      gap: 32px;
    }

    .logo img{
      width: 50%;
      height: auto;
    }

    .profile-section {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .profile-section span {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

  `;

  render() {
    return html`
      <header class="header-container">
        <nav>
          <ul>
            <li class="logo">
              <a href="/">
                <img src="https://www.espe.edu.ec/wp-content/uploads/2022/01/ESPEtransparente.png" alt="ESPE Logo">
              </a>
            </li>
            <li class="menu">
              <a href="/">Inicio</a>
              <a href="#">Contactanos</a>
            </li>
            <li></li>
            <li class="search"><nav-search></nav-search></li>
            <li class="profile-section">${
              this.validateUser()
                ? html`
                    <span>
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_iconCarrier">
                          <g id="Interface / Shopping_Cart_01">
                            <path id="Vector" d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H9.29395C8.83288 17 8.60193 17 8.41211 16.918C8.24466 16.8456 8.09938 16.7291 7.99354 16.5805C7.8749 16.414 7.82719 16.1913 7.73274 15.7505L5.27148 4.26465C5.17484 3.81363 5.12587 3.58838 5.00586 3.41992C4.90002 3.27135 4.75477 3.15441 4.58732 3.08205C4.39746 3 4.16779 3 3.70653 3H3M6 6H18.8732C19.595 6 19.9555 6 20.1978 6.15036C20.41 6.28206 20.5653 6.48862 20.633 6.729C20.7104 7.00343 20.611 7.34996 20.411 8.04346L19.0264 12.8435C18.9068 13.2581 18.8469 13.465 18.7256 13.6189C18.6185 13.7547 18.4772 13.861 18.317 13.9263C18.1361 14 17.9211 14 17.4921 14H7.73047M8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </g>
                        </g>
                      </svg>
                      ${this.user.getName()}
                      <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g id="chevron-bottom"> <line class="cls-1" x1="16" x2="7" y1="20.5" y2="11.5"></line> <line class="cls-1" x1="25" x2="16" y1="11.5" y2="20.5"></line> </g> </g></svg>
                    </span>
                  `
                : html`<span @click=${this._openLogin}>Iniciar Sesion</span>`
            }</li>
          </ul>
        </nav>
      </header>
      ${this.showLogin ? html`
        <espe-loggin
          @close-login=${this._closeLogin}
          @open-register=${this._openRegisterFromEvent}
          @login-success=${this._handleLoginSuccess}>
        </espe-loggin>
      ` : null}

      ${this.showRegister ? html`
        <espe-register
          @close-register=${this._closeRegister}
          @open-login=${this._openLoginFromEvent}
          @register-success=${this._handleRegisterSuccess}>
        </espe-register>
      ` : null}
    `;
  }
}

customElements.define("espe-navbar", EspeNavbar);