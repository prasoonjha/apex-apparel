import React from "react";
import { connect } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";
import CartItem from "../../components/cart-item/cart-item.component";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => cartItem.name)}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
