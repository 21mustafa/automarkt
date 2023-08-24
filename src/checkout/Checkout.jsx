import { useSelector } from "react-redux";
import { data } from "../common/data";
import "./Checkout.scss";

const EmptyView = () => {
  return (
    <div className="checkout-empty">
      <img
        className="checkout-empty__img"
        src="empty-cart.png"
        alt="automart-cart-icon"
        height={250}
      />
      <div className="checkout-empty__text">
        There are no items exist in you cart.
      </div>
    </div>
  );
};

const CheckoutItems = (props) => {
  return (
    <ol className="checkout__list">
      {props.items.map((item) => {
        const part = data.find((element) => element.id === item.id);
        return (
          <li className="checkout__list-item">
            <div className="checkout__list-item-img">
              <img src={`/parts/${part.img}`} alt="part-item" width={100} />
            </div>

            <div className="checkout__list-item-container">
              <div className="checkout__list-item-text">{part.type}</div>
              <div className="checkout__list-item-text--sub">
                {part.brand} {part.model} ({part.year})
              </div>

              <div className="checkout__list-item-price">
                <b>{part.price} CAD</b>{" "}
                <span className="checkout__list-item-price-desc">
                  (unit price) 
                </span>
                x {item.count}
              </div>
            </div>

            {/* <div className="checkout__list-item-counter">
              <button className="checkout__list-item-counter-button">-</button>
              Item Count:
              <input type="number" value={item.count} disabled />
              <button className="checkout__list-item-counter-button">+</button>
            </div> */}
          </li>
        );
      })}
    </ol>
  );
};

const CheckoutTotal = (props) => {
  const total = props.items
    .map((item) => {
      const part = data.find((element) => element.id === item.id);
      return part.price * item.count;
    })
    .reduce((prev, next) => prev + next);

  return (
    <div className="checkout-total">
      <div className="checkout-total-content">
        <div className="checkout-total__text">Total:</div>
        <div className="checkout-total__value">{total.toFixed(2)} CAD</div>
      </div>

      <button className="checkout-button">Continue</button>
    </div>
  );
};

export const Checkout = () => {
  const itemsInBasket = useSelector((state) => state.basket.items);

  const isEmpty = itemsInBasket.length === 0;

  return (
    <section className="checkout">
      {isEmpty ? (
        <EmptyView />
      ) : (
        <div>
          <CheckoutItems items={itemsInBasket} />
          <CheckoutTotal items={itemsInBasket} />
        </div>
      )}
    </section>
  );
};
