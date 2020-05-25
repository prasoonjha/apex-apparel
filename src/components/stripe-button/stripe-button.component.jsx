import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_HQJ0QuzsSi2Y6oZhGCkDW2mO00BXWta52Y";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Apex Apparel Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      descreiption={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
