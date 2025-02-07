/* eslint-disable */
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "MoneyMap | Setup Page",
  description: "",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      {children}
    </div>
  );
}