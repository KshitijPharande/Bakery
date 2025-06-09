import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { CartProvider } from "@/lib/cart-context"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            <Navbar />
            <main>{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
