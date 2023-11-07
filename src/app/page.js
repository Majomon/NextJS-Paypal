"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function HomePage() {
  return (
    <div className="w-full h-screen bg-slate-950 flex justify-center items-center">
      <PayPalScriptProvider
        options={{
          clientId:
            "AUAOVdUk0RT1U2CNM5TrKkd41ECecL9bdIRDZTte8lct1oKARzflpMPRkpiKB6nfK2SsgOiZqCiQu0A4",
        }}
      >
        <PayPalButtons
          style={{ color: "blue", layout: "horizontal", label: "pay" }}
          createOrder={async () => {
            const res = await fetch("/api/checkout", {
              method: "POST",
            });

            const order = await res.json();
            console.log(order);
            return order.id;
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

/* createOrder={() => {}}
onCancel={() => {}}
onApprove={() => {}} */
export default HomePage;
