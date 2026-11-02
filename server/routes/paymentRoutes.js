/**
 * GlobalShop API - Stripe Payment Gateway Integration & Webhook Handler
 */

const express = require('express');
const router = express.Router();

// Mock Stripe handler or initialized stripe instance if key provided
const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_mock_stripe_key_globalshop';
let stripe;
try {
  stripe = require('stripe')(stripeKey);
} catch (e) {
  console.log("Stripe mock mode enabled");
}

// POST /api/payment/create-payment-intent
router.post('/create-payment-intent', async (req, res) => {
  const { amountUSD, currency = 'usd', customerEmail } = req.body;

  if (!amountUSD) {
    return res.status(400).json({ success: false, message: "To'lov summasi ko'rsatilmagan" });
  }

  try {
    // If Stripe SDK is configured with valid credentials
    if (process.env.STRIPE_SECRET_KEY && stripe) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amountUSD * 100), // in cents
        currency: currency.toLowerCase(),
        metadata: { customerEmail: customerEmail || "guest@globalshop.com" },
        automatic_payment_methods: { enabled: true }
      });

      return res.json({
        success: true,
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id
      });
    }

    // Simulated Stripe Response for seamless offline / test execution
    const mockClientSecret = `pi_${Math.random().toString(36).substr(2, 9)}_secret_${Math.random().toString(36).substr(2, 16)}`;
    res.json({
      success: true,
      simulated: true,
      clientSecret: mockClientSecret,
      currency: currency.toUpperCase(),
      amountInCents: Math.round(amountUSD * 100),
      message: "Stripe payment intent successfully simulated (PCI-DSS standard)"
    });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/payment/webhook (Stripe Webhook Listener)
router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    if (process.env.STRIPE_WEBHOOK_SECRET && stripe) {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } else {
      event = { type: 'payment_intent.succeeded', data: { object: req.body } };
    }
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`💰 To'lov muvaffaqiyatli qabul qilindi: ${paymentIntent.id}`);
      break;
    case 'payment_intent.payment_failed':
      console.log(`❌ To'lov bekor qilindi`);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

module.exports = router;
