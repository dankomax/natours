import axios from 'axios';
import { showAlert } from './alerts';

// const Stripe = require('stripe');

const stripe = Stripe(
  'pk_test_51H4ro1FfE2sqJEqVS8UWelrSrmOVnM0alNerxo0P6JzflT3NIijoWCeWo1OiguoQbAApYgRKcyDPnsYMowxZClUB00u6K2KHaa'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);

    // 2) Create checkout form + charge card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
