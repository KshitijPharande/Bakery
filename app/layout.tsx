import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { CartProvider } from "@/lib/cart-context"
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const inter = Inter({ subsets: ["latin"] })

const poppins = {
  fontFamily: 'Poppins, Inter, sans-serif',
};

export const metadata: Metadata = {
  title: "Sweet Delights Bakery",
  description: "Fresh baked goods made with love since 1990",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={poppins} className={inter.className + " bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen"}>
        <CartProvider>
          <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
