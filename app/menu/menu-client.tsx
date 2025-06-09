"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { type ShopifyProduct, type ShopifyCollection, getProductsByCollection } from "@/lib/shopify"
import { Loader2 } from "lucide-react"
import { motion } from "framer-motion"

interface MenuClientProps {
  products: ShopifyProduct[]
  collections: ShopifyCollection[]
}

export default function MenuClient({ products: initialProducts, collections }: MenuClientProps) {
  const [products, setProducts] = useState(initialProducts)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [loading, setLoading] = useState(false)
  const { addToCart, cartLoading } = useCart()
  const [addingToCart, setAddingToCart] = useState<string | null>(null)

  const handleCategoryFilter = async (categoryHandle: string) => {
    if (categoryHandle === selectedCategory) return

    setSelectedCategory(categoryHandle)
    setLoading(true)

    try {
      if (categoryHandle === "all") {
        setProducts(initialProducts)
      } else {
        const filteredProducts = await getProductsByCollection(categoryHandle)
        setProducts(filteredProducts)
      }
    } catch (error) {
      console.error("Error filtering products:", error)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = async (product: ShopifyProduct) => {
    const variantId = product.variants.edges[0]?.node.id
    if (!variantId) return

    setAddingToCart(product.id)
    try {
      await addToCart(variantId, 1)
    } catch (error) {
      console.error("Error adding to cart:", error)
      alert("Failed to add item to cart. Please try again.")
    } finally {
      setAddingToCart(null)
    }
  }

  return (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => handleCategoryFilter("all")}
            className={
              selectedCategory === "all"
                ? "bg-amber-600 hover:bg-amber-700"
                : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
            }
          >
            All Products
          </Button>
          {collections.map((collection) => (
            <Button
              key={collection.id}
              variant={selectedCategory === collection.handle ? "default" : "outline"}
              onClick={() => handleCategoryFilter(collection.handle)}
              className={
                selectedCategory === collection.handle
                  ? "bg-amber-600 hover:bg-amber-700"
                  : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
              }
            >
              {collection.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, idx) => {
            const image = product.images.edges[0]?.node
            const variant = product.variants.edges[0]?.node
            const price = product.priceRange.minVariantPrice
            const isAddingThisItem = addingToCart === product.id

            return (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07, duration: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Product Image */}
                <motion.div className="aspect-square relative" whileHover={{ scale: 1.05 }}>
                  <Image
                    src={image?.url || "/placeholder.svg?height=300&width=300"}
                    alt={image?.altText || product.title}
                    fill
                    className="object-cover rounded-2xl shadow-md"
                    placeholder="blur"
                    blurDataURL="/placeholder.svg?height=10&width=10"
                  />
                </motion.div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>

                  {product.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-600">
                      {new Intl.NumberFormat(undefined, {
                        style: 'currency',
                        currency: price.currencyCode || 'INR',
                      }).format(Number(price.amount))}
                    </span>

                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => handleAddToCart(product)}
                        disabled={!variant?.availableForSale || cartLoading || isAddingThisItem}
                        className="bg-amber-600 hover:bg-amber-700 text-white shadow-md"
                      >
                        {isAddingThisItem ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Adding...
                          </>
                        ) : (
                          "Add to Cart"
                        )}
                      </Button>
                    </motion.div>
                  </div>

                  {!variant?.availableForSale && <p className="text-sm text-red-500 mt-2">Out of Stock</p>}
                </div>
              </motion.div>
            )
          })}
        </div>
      )}

      {products.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No products found in this category.</p>
        </div>
      )}
    </>
  )
}
