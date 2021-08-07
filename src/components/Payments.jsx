import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { handleToken } from "../actions";

const Payments = () => {
  const dispatch = useDispatch();
  return (
    <StripeCheckout
      amount={500}
      token={(token) => dispatch(handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      name="ItsMail"
      description="$5 for 5 emails"
    >
      <button className="btn btn-secondary btn-lg">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
