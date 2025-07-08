//Component branch product-card

import { LitElement, css, html } from "lit";
import '../atomic/buttons/fav-button.js'
import '../atomic/buttons/log-button.js'
import '../atomic/buttons/cart-counter.js'

export class ProductCard extends LitElement {

  static properties = {
    image: { type: String },
    title: { type: String },
    isFav: { type: Boolean },
    discount: { type: String },
    price: { type: String }
  }

  constructor() {
    super();
  }

  static styles = css`
    
    .card{
      position: relative; 
      background-color: #004D00;
      color: #FFFFCC;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 250px;
      max-width: 400px;
      border-radius: 20px;
    }

    .image-content img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }

    .card span, .card .image-content{
      padding: 10px 40px;
    }

    .description {
      background-color: #E0E0E0;
      color: black;
      border-radius: 20px;
      width: 100%;
    }

    .description .desc-content{
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .top-content{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 0;
      gap: 5px;
    }

    .price p{
      margin: 0;
      text-align: end;
      font-size: 16px;
      font-weight: 600;
    }

    .price .discount{
      color: #990000;
    }

    .price .price-f{
      color: #004D00;
    }

    .desc-text {
      font-size: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 4; /* máximo de 4 líneas */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .desc-text p{
      margin: 0;
    }

    .buttons{
      display: flex;
      gap: 10px;
    }
  `;

  render() {
    return html`
      <div class="card">
        <span class="title">${!this.title ? "Titulo" : this.title }</span>
        <div class="image-content">
          <img src="${!this.image ? "https://static.thenounproject.com/png/1269202-200.png" : this.image}" alt="Image">
        </div>
        <div class="description">
          <div class="desc-content">
            <div class="top-content">
              <fav-button></fav-button>
              <div class="price">
                <p class="discount">${!this.discount ? "0% OFF" : this.discount.toString()+"% OFF"}</p>
                <p class="price-f">${!this.price ? "$0" : "$"+this.price.toString()}</p>
              </div>
            </div>
            <div class="desc-text">
              <p>
                <slot></slot>
              </p>
            </div>
            <div class="buttons">
              <cart-counter>a</cart-counter>
              <log-button>Añadir al Carrito</log-button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

}

customElements.define("product-card", ProductCard);