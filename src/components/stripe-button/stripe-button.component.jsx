import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_cns8ygCLBvufGf1ujDICFqvL003QqiAM8V";

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="teste"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={price}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
