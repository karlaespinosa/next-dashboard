import { Metadata } from "next";

import { CartCounter } from "@/shopping-cart";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Simple Counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart Items</span>
      <CartCounter initialValue={6} />
    </div>
  );
}
