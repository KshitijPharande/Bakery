"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Home, Menu } from "lucide-react"

export default function CheckoutSuccessPage() {
  useEffect(() => {
    // Clear cart from localStorage on successful order
    localStorage.removeItem("shopify-cart-id")
  }, [])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
          <p className="text-lg text-gray-600">
            Thank you for your order. We'll start preparing your delicious baked goods right away.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">What's Next?</h2>

          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Order Confirmation</h3>
                <p className="text-gray-600 text-sm">
                  You'll receive an email confirmation with your order details shortly.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Preparation</h3>
                <p className="text-gray-600 text-sm">Our bakers will start preparing your fresh items immediately.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Delivery</h3>
                <p className="text-gray-600 text-sm">Your order will be delivered to your address within 2-3 hours.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-semibold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Payment</h3>
                <p className="text-gray-600 text-sm">Pay with cash when your order arrives at your doorstep.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-amber-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">Need Help?</h3>
          <p className="text-amber-700 mb-3">
            If you have any questions about your order, please don't hesitate to contact us.
          </p>
          <div className="text-amber-800">
            <p className="font-medium">📞 +1 (555) 123-4567</p>
            <p className="font-medium">✉️ info@sweetdelightsbakery.com</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/menu">
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3"
            >
              <Menu className="h-4 w-4 mr-2" />
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
