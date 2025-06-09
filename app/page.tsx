import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Bakery interior with fresh bread and pastries"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Welcome to Sweet Delights Bakery</h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Fresh baked goods made with love and the finest ingredients since 1990
          </p>
          <Link href="/menu">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              Explore Our Menu
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">Why Choose Sweet Delights?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about creating the perfect baked goods for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🥖</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Fresh Daily</h3>
              <p className="text-gray-600">All our products are baked fresh every morning using traditional recipes</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">We use only the finest, locally-sourced ingredients in all our baking</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Expert Bakers</h3>
              <p className="text-gray-600">Our skilled bakers bring decades of experience to every loaf and pastry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-amber-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">Ready to Taste the Difference?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Browse our delicious selection of breads, pastries, cakes, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                View Our Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
