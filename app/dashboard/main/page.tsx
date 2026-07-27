import type { Metadata } from "next";

import { WidgetsGrid } from "@/components";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard Description",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General Information</span>

      <WidgetsGrid />
    </div>
  );
}
