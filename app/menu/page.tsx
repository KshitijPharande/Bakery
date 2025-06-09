import { getProducts, getCollections } from "@/lib/shopify"
import MenuClient from "./menu-client"

export default async function MenuPage() {
  // Check if environment variables are available
  if (!process.env.SHOPIFY_STORE_DOMAIN || !process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Our Menu</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">Configuration Required</h2>
            <p className="text-yellow-700 mb-4">
              To display our delicious menu, please configure your Shopify store connection.
            </p>
            <div className="text-left bg-gray-100 p-4 rounded text-sm font-mono">
              <p className="mb-2">Create a .env.local file with:</p>
              <p>SHOPIFY_STORE_DOMAIN=your-store.myshopify.com</p>
              <p>SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  try {
    const [products, collections] = await Promise.all([getProducts(), getCollections()])

    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">Our Menu</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our delicious selection of fresh baked goods, made daily with love and care
            </p>
          </div>

          <MenuClient products={products} collections={collections} />
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error loading menu:", error)
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Our Menu</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Menu</h2>
            <p className="text-red-700 mb-4">
              We're having trouble connecting to our product catalog. Please check your Shopify configuration.
            </p>
            <p className="text-sm text-red-600">Error: {error instanceof Error ? error.message : "Unknown error"}</p>
          </div>
        </div>
      </div>
    )
  }
}
