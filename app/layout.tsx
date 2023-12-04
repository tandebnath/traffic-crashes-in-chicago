import type { Metadata } from "next";
// import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// const playfair = Playfair_Display({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chicago Traffic Crashes",
  description: "Chicago Traffic Crashes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
