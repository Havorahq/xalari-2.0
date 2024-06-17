"use client";

import type { Metadata } from "next";
import "@rainbow-me/rainbowkit/styles.css";
import { Inter } from "next/font/google";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Xalari",
//   description: "Payroll Management on the blockchain!",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  );
}
