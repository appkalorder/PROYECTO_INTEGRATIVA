import { css, html, LitElement } from 'lit';
import '../complex/espe-footer.js';
import '../complex/espe-navbar.js';

export class EspeLayout extends LitElement {

  static properties = {
    isLoggedIn: { type: Boolean }
  };

  constructor() {
    super();
    this.isLoggedIn = false;
  }

  static styles = css`
  .container {
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 10px;
  }

  .content {
    position: relative
    flex: 1;
    padding: 20px 40px;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
  }
  `;

  render() {
    return html`
      <div class="container">
        <espe-navbar></espe-navbar>
        <div class="content">
          <slot></slot>
        </div>
        <espe-footer></espe-footer>
      </div>
    `;
  };

}

customElements.define('espe-layout', EspeLayout);