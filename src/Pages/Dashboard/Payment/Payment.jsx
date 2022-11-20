import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheekOut from "./CheekOut";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);

const Payment = () => {
  const paymentTreatment = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl text-center text-secondary font-semibold my-5">
        Payment for{" "}
        <span className="text-primary">{paymentTreatment?.ServiceName} </span>
        treatment
      </h1>
      <p className="text-center text-2xl font-semibold">
        You have to {paymentTreatment?.price} dollars
      </p>
      <div className="justify-center text-center border  w-[500px] p-9 m-auto">
        <Elements stripe={stripePromise}>
          <CheekOut paymentTreatment={paymentTreatment}></CheekOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
