import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">About Sweet Delights Bakery</h1>
          <p className="text-lg text-gray-600">A family tradition of baking excellence since 1990</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Our bakery interior with fresh bread displays"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-amber-800">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Sweet Delights Bakery began as a small family dream in 1990. What started as a humble neighborhood bakery
              has grown into a beloved community institution, known for our commitment to quality, tradition, and the
              art of baking.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are a family-owned bakery that takes pride in baking fresh goods daily using time-honored recipes
              passed down through generations. Every loaf of bread, every pastry, and every cake is made with love and
              the finest ingredients we can source.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our master bakers start work before dawn each day to ensure that when you visit us, you'll find the
              freshest breads, the most delicate pastries, and the most delicious cakes in town.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-amber-800 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🌾</div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">
                We source only the finest, freshest ingredients from trusted local suppliers
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Family Tradition</h3>
              <p className="text-gray-600">
                Three generations of baking expertise and family recipes guide everything we do
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🏘️</div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Community Focus</h3>
              <p className="text-gray-600">
                We're proud to be part of this community and support local events and causes
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-amber-800 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Maria Rodriguez, Head Baker"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Maria Rodriguez</h3>
              <p className="text-gray-600 mb-2">Head Baker & Owner</p>
              <p className="text-sm text-gray-600">
                Maria founded Sweet Delights with a passion for traditional baking and a dream to serve her community.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Carlos Rodriguez, Pastry Chef"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Carlos Rodriguez</h3>
              <p className="text-gray-600 mb-2">Master Pastry Chef</p>
              <p className="text-sm text-gray-600">
                Carlos brings artistic flair to our pastries and cakes, creating beautiful and delicious works of art.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
