const stripe = require("stripe")(process.env.STRIPE_API_SECRET);
const inventory = require("./data/products.json");

exports.handler = async ({ body }) => {
  const data = JSON.parse(body);
  const product = sku => inventory.find(p => p.sku === sku);
  const validatedQuantity = quantity =>
    quantity > 0 && quantity <= 10 ? quantity : 1;

  const lineItems = [];
  for (let sku in data) {
    lineItems.push({
      name: product(sku).name,
      description: product(sku).description,
      images: [product(sku).image],
      amount: product(sku).amount,
      currency: product(sku).currency,
      quantity: validatedQuantity(data[sku]),
    });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_address_collection: {
      // Unsupported country codes:
      // AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SD, SY, UM, VI

      allowed_countries: [
        "US",
        "CA",
        "MX",
        "IE",
        "GB",
        "DE",
        "JP",
        "FR",
        "HR",
        "DK",
        "NO",
        "SE",
        "FI",
        "AU",
      ],
    },
    line_items: [
      ...lineItems,
      {
        name: "Shipping and Handling",
        description: "Flat rate shipping anywhere in the world.",
        images: [],
        amount: 300,
        currency: "USD",
        quantity: 1,
      },
    ],
    success_url: "https://www.learnwithjason.dev/purchased",
    cancel_url: "https://www.learnwithjason.dev/store",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: session.id }),
  };
};
