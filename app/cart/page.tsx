"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trash2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  if (!cart) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link href="/menu">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">Browse Our Menu</Button>
          </Link>
        </div>
      </div>
    )
  }

  const cartItems = cart.lines.edges.map(({ node }) => node)
  const subtotal = Number.parseFloat(cart.cost.subtotalAmount.amount)
  const currency = cart.cost.subtotalAmount.currencyCode || 'INR';
  const formatCurrency = (amount: number) => new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(amount);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link href="/menu">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">Browse Our Menu</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/menu" className="inline-flex items-center text-amber-600 hover:text-amber-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Items */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
            <Card>
              <CardHeader>
                <CardTitle>Your Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <AnimatePresence>
                  {cartItems.map((item) => {
                    const image = item.merchandise.product.images.edges[0]?.node
                    const price = Number.parseFloat(item.merchandise.priceV2.amount)
                    const total = price * item.quantity

                    return (
                      <motion.div
                        key={item.id}
                        className="flex items-center space-x-4 bg-white rounded-xl shadow-md p-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        layout
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                        transition={{ duration: 0.3, type: 'spring' }}
                      >
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Image
                            src={image?.url || "/placeholder.svg?height=80&width=80"}
                            alt={image?.altText || item.merchandise.product.title}
                            width={80}
                            height={80}
                            className="rounded-lg object-cover shadow"
                            placeholder="blur"
                            blurDataURL="/placeholder.svg?height=10&width=10"
                          />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-800 truncate">
                            {item.merchandise.product.title}
                          </h4>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                          <p className="text-sm font-medium text-gray-800">{formatCurrency(total)}</p>
                        </div>
                        <motion.div whileTap={{ scale: 0.85 }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Order Summary */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: 'spring', delay: 0.1 }}>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">{formatCurrency(5)}</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>{formatCurrency(subtotal + 5)}</span>
                  </div>
                </div>

                <motion.div className="mt-6" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  {cart.checkoutUrl ? (
                    <a href={cart.checkoutUrl}>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 shadow-lg">
                        Proceed to Checkout
                      </Button>
                    </a>
                  ) : null}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
