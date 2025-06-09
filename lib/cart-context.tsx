"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { type Cart, createCart, addToCart as addToCartAPI, getCart } from "./shopify"

const isServerSide = typeof window === "undefined"

interface CartContextType {
  cart: Cart | null
  cartLoading: boolean
  addToCart: (variantId: string, quantity?: number) => Promise<void>
  cartItemsCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [cartLoading, setCartLoading] = useState(false)

  // Initialize cart on mount
  useEffect(() => {
    initializeCart()
  }, [])

  const initializeCart = async () => {
    try {
      // Check if we're on the client side and environment variables are available
      if (!isServerSide) {
        // Check if cart ID exists in localStorage
        const cartId = localStorage.getItem("shopify-cart-id")

        if (cartId) {
          // Try to fetch existing cart
          try {
            const existingCart = await getCart(cartId)
            setCart(existingCart)
          } catch (error) {
            // If cart doesn't exist, create a new one
            console.log("Cart not found, creating new cart")
            await createNewCart()
          }
        } else {
          // Create new cart
          await createNewCart()
        }
      }
    } catch (error) {
      console.error("Error initializing cart:", error)
      // Don't throw error, just log it to prevent app crash
    }
  }

  const createNewCart = async () => {
    try {
      setCartLoading(true)
      const newCart = await createCart()
      setCart(newCart)
      if (!isServerSide) {
        localStorage.setItem("shopify-cart-id", newCart.id)
      }
      return newCart
    } catch (error) {
      console.error("Error creating cart:", error)
      throw error // Propagate the error
    } finally {
      setCartLoading(false)
    }
  }

  const addToCart = async (variantId: string, quantity = 1) => {
    setCartLoading(true)
    try {
      let currentCart = cart
      
      // If no cart exists, create one first
      if (!currentCart) {
        currentCart = await createNewCart()
      }

      // Now add the item to the cart
      const updatedCart = await addToCartAPI(currentCart.id, variantId, quantity)
      setCart(updatedCart)
    } catch (error) {
      console.error("Error adding to cart:", error)
      throw error
    } finally {
      setCartLoading(false)
    }
  }

  const cartItemsCount = cart?.lines.edges.reduce((total, { node }) => total + node.quantity, 0) || 0

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLoading,
        addToCart,
        cartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
