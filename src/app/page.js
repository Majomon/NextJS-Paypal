"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function HomePage() {
  return (
    <div className="w-full h-screen bg-slate-950 flex justify-center items-center">
      <PayPalScriptProvider>
        <PayPalButtons
          style={{ color: "blue", layout: "horizontal", label: "pay" }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default HomePage;
