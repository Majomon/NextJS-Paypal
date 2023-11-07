import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

const clientID =
  "AUAOVdUk0RT1U2CNM5TrKkd41ECecL9bdIRDZTte8lct1oKARzflpMPRkpiKB6nfK2SsgOiZqCiQu0A4";
const clientSecret =
  "ECs7XLYOsBg6TrtGpciDy3MwfYg545BVBWI_ASWuvw1UeLGJxUR9uHB2GHWQ7V0RpadbVX7ONaA6PkK8";

const enviroment = new paypal.core.SandboxEnvironment(clientID, clientSecret);

const client = new paypal.core.PayPalHttpClient(enviroment);

export async function POST() {
  const request = new paypal.orders.OrdersCreateRequest();

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.00",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: "100.00",
            },
          },
        },
        items: [
          {
            name: "Muchos libros",
            description: "Libros",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: "50.00",
            },
          },
          {
            name: "Muchos libros x2",
            description: "Libros x2",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: "50.00",
            },
          },
        ],
      },
    ],
  });

  const response = await client.execute(request);
  console.log(response);
  return NextResponse.json({ id: response.result.id });
}
