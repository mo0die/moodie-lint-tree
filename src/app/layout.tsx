import "~/styles/globals.css";

import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "MII54",
  description: "",
  icons: [{ rel: "icon", url: "public/icon.ico" }],
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <body className="bg-white font-mono text-black">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
