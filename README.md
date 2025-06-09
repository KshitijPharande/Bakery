# Sweet Delights Bakery - Next.js Shopify Integration

A complete Next.js bakery shop application with Shopify Headless Storefront API integration, featuring a modern design, cart management, and cash-on-delivery checkout.

## Features

- 🏠 **Home Page**: Welcoming hero section with bakery-themed design
- 🍞 **Menu Page**: Product catalog with category filtering from Shopify
- 📖 **About Us**: Static page with bakery story and team information
- 📞 **Contact**: Contact information and location details
- 🛒 **Shopping Cart**: Add to cart functionality with Shopify integration
- 💳 **Checkout**: Guest checkout with cash-on-delivery payment
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- 🔄 **Real-time Cart**: Context-based cart management

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **E-commerce**: Shopify Storefront API
- **Language**: TypeScript
- **State Management**: React Context API

## Prerequisites

Before running this application, you need:

1. A Shopify store with products and collections
2. Shopify Storefront API access token
3. Node.js 18+ installed

## Setup Instructions

### 1. Clone and Install

\`\`\`bash
git clone <repository-url>
cd bakery-shop
npm install
\`\`\`

### 2. Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
SHOPIFY_STORE_DOMAIN=your-bakery-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
\`\`\`

### 3. Shopify Configuration

1. **Create a Shopify Partner Account** (if you don't have one)
2. **Create a Development Store**
3. **Generate Storefront API Access Token**:
   - Go to your Shopify admin
   - Navigate to Apps > Manage private apps
   - Create a private app
   - Enable "Allow this app to access your storefront data using the Storefront API"
   - Copy the Storefront access token

### 4. Add Products and Collections

In your Shopify admin:
- Create collections (e.g., "Cakes", "Pastries", "Breads")
- Add products to these collections
- Ensure products have images and proper pricing

### 5. Run the Application

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to see your bakery shop!

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with cart provider
│   ├── page.tsx            # Home page
│   ├── menu/
│   │   ├── page.tsx        # Menu page (server component)
│   │   └── menu-client.tsx # Menu client component
│   ├── about/page.tsx      # About us page
│   ├── contact/page.tsx    # Contact page
│   ├── cart/page.tsx       # Shopping cart page
│   └── checkout/
│       ├── page.tsx        # Checkout form
│       └── success/page.tsx # Order confirmation
├── components/
│   └── navbar.tsx          # Navigation component
├── lib/
│   ├── shopify.ts          # Shopify API utilities
│   └── cart-context.tsx    # Cart state management
└── next.config.mjs         # Next.js configuration
\`\`\`

## Key Features Explained

### Shopify Integration

The app uses Shopify's Storefront API to:
- Fetch products and collections
- Manage cart state
- Handle guest checkout
- Process cash-on-delivery orders

### Cart Management

- Uses React Context for global cart state
- Persists cart ID in localStorage
- Real-time cart updates across components
- Automatic cart creation for new users

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Responsive navigation with hamburger menu
- Optimized product grids for all screen sizes
- Touch-friendly interface elements

### Performance Optimizations

- Next.js Image component for optimized images
- Incremental Static Regeneration (ISR) for product data
- Server-side rendering for SEO
- Efficient API calls with proper error handling

## Customization

### Styling

The app uses a warm, bakery-themed color palette:
- Primary: Amber/Orange tones
- Background: Gradient from amber-50 to orange-50
- Accents: Brown and beige colors

To customize colors, update the Tailwind classes throughout the components.

### Content

- Update bakery information in `/app/about/page.tsx`
- Modify contact details in `/app/contact/page.tsx`
- Change hero content in `/app/page.tsx`

### Shopify Configuration

- Modify GraphQL queries in `/lib/shopify.ts`
- Adjust product display logic in `/app/menu/menu-client.tsx`
- Update checkout flow in `/app/checkout/page.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SHOPIFY_STORE_DOMAIN` | Your Shopify store domain (e.g., store.myshopify.com) | Yes |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Storefront API access token | Yes |

## Troubleshooting

### Common Issues

1. **Products not loading**: Check your Shopify domain and access token
2. **Images not displaying**: Ensure `cdn.shopify.com` is in `next.config.mjs`
3. **Cart not working**: Verify Storefront API permissions in Shopify
4. **Build errors**: Check TypeScript types and imports

### Debug Mode

Enable debug logging by adding to your `.env.local`:
\`\`\`env
NODE_ENV=development
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support and questions:
- Create an issue in the repository
- Check the Shopify Storefront API documentation
- Review Next.js documentation for framework-specific questions

---

Built with ❤️ using Next.js and Shopify
