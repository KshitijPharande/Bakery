"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
        <motion.div
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          >
            Welcome to Sweet Delights Bakery
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
          >
            Fresh baked goods made with love and the finest ingredients since 1990
          </motion.p>
          <Link href="/menu">
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg shadow-lg">
                Explore Our Menu
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">Why Choose Sweet Delights?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about creating the perfect baked goods for every occasion
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🥖", title: "Fresh Daily", desc: "All our products are baked fresh every morning using traditional recipes" },
              { icon: "🌾", title: "Quality Ingredients", desc: "We use only the finest, locally-sourced ingredients in all our baking" },
              { icon: "👨‍🍳", title: "Expert Bakers", desc: "Our skilled bakers bring decades of experience to every loaf and pastry" },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.7, type: 'spring' }}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-amber-100 py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Ready to Taste the Difference?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Browse our delicious selection of breads, pastries, cakes, and more
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 shadow-lg">
                  View Our Menu
                </Button>
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 shadow"
                >
                  Contact Us
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
