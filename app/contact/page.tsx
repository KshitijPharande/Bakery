import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you! Visit us or get in touch</p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-amber-800 mb-6">Get in Touch</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Bakery Lane
                      <br />
                      Sweet Valley, CA 90210
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@sweetdelightsbakery.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 6:00 AM - 7:00 PM</p>
                      <p>Saturday: 6:00 AM - 8:00 PM</p>
                      <p>Sunday: 7:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Notes */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Special Orders</h3>
              <p className="text-gray-700 mb-3">
                Planning a special event? We'd love to help make it memorable with custom cakes, catering platters, and
                bulk orders.
              </p>
              <p className="text-gray-700">
                Please call us at least 48 hours in advance for special orders to ensure availability.
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">123 Bakery Lane, Sweet Valley, CA</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Parking</h3>
            <p className="text-gray-600">
              Free parking is available in our lot behind the bakery. Street parking is also available on Bakery Lane
              and surrounding streets.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Accessibility</h3>
            <p className="text-gray-600">
              Our bakery is fully wheelchair accessible with ramp access and accessible restrooms. We're committed to
              serving all members of our community.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-amber-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Visit Us Today!</h2>
          <p className="text-gray-700 mb-4">
            Come experience the aroma of fresh-baked goods and taste the difference that quality makes.
          </p>
          <p className="text-gray-700">Follow us on social media for daily specials and new product announcements!</p>
        </div>
      </div>
    </div>
  )
}
