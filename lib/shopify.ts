const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

// Only validate environment variables on the server side
if (typeof window === "undefined") {
  if (!domain || !storefrontAccessToken) {
    throw new Error("Missing Shopify environment variables. Please check your .env.local file.")
  }
}

const endpoint = domain ? `https://${domain}/api/2023-10/graphql.json` : ""

export async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string
  variables?: Record<string, any>
}): Promise<T> {
  try {
    if (!domain || !storefrontAccessToken) {
      throw new Error("Missing Shopify environment variables")
    }

    console.log('Making request to:', endpoint)
    console.log('With headers:', {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken ? "present" : "missing"
    })
    console.log('Query:', query)
    console.log('Variables:', variables)

    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    })

    if (!result.ok) {
      const text = await result.text()
      console.error("Shopify API error response:", text)
      console.error("Response status:", result.status)
      console.error("Response headers:", Object.fromEntries(result.headers.entries()))
      throw new Error(`HTTP error! status: ${result.status}`)
    }

    const json = await result.json()

    if (json.errors) {
      console.error("GraphQL errors:", json.errors)
      throw new Error(json.errors[0]?.message ?? "Unknown GraphQL error")
    }

    return json.data
  } catch (error) {
    console.error("Shopify fetch error:", error)
    throw error
  }
}

// GraphQL Queries
export const GET_COLLECTIONS_QUERY = `
  query getCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
        }
      }
    }
  }
`

export const GET_PRODUCTS_QUERY = `
  query getProducts($first: Int!, $sortKey: ProductSortKeys, $reverse: Boolean) {
    products(first: $first, sortKey: $sortKey, reverse: $reverse) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`

export const GET_PRODUCTS_BY_COLLECTION_QUERY = `
  query getProductsByCollection($handle: String!, $first: Int!) {
    collectionByHandle(handle: $handle) {
      id
      title
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  }
`

export const CREATE_CART_QUERY = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`

export const ADD_TO_CART_QUERY = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`

export const GET_CART_QUERY = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      cost {
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
      }
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
                product {
                  title
                  images(first: 1) {
                    edges {
                      node {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

// Type definitions
export interface ShopifyProduct {
  id: string
  title: string
  handle: string
  description: string
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  images: {
    edges: Array<{
      node: {
        url: string
        altText: string
        width: number
        height: number
      }
    }>
  }
  variants: {
    edges: Array<{
      node: {
        id: string
        title: string
        priceV2: {
          amount: string
          currencyCode: string
        }
        availableForSale: boolean
      }
    }>
  }
}

export interface ShopifyCollection {
  id: string
  title: string
  handle: string
  description: string
}

export interface CartLine {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    priceV2: {
      amount: string
      currencyCode: string
    }
    product: {
      title: string
      images: {
        edges: Array<{
          node: {
            url: string
            altText: string | null
          }
        }>
      }
    }
  }
}

export interface Cart {
  id: string
  checkoutUrl: string
  cost: {
    subtotalAmount: {
      amount: string
      currencyCode: string
    }
    totalAmount: {
      amount: string
      currencyCode: string
    }
    totalTaxAmount: {
      amount: string
      currencyCode: string
    }
  }
  lines: {
    edges: Array<{
      node: CartLine
    }>
  }
}

// Helper functions
export async function getCollections(): Promise<ShopifyCollection[]> {
  const data = await shopifyFetch<{
    collections: {
      edges: Array<{ node: ShopifyCollection }>
    }
  }>({
    query: GET_COLLECTIONS_QUERY,
    variables: { first: 10 },
  })

  return data.collections.edges.map(({ node }) => node)
}

export async function getProducts(): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{
    products: {
      edges: Array<{ node: ShopifyProduct }>
    }
  }>({
    query: GET_PRODUCTS_QUERY,
    variables: { first: 50, sortKey: "TITLE", reverse: false },
  })

  return data.products.edges.map(({ node }) => node)
}

export async function getProductsByCollection(handle: string): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{
    collectionByHandle: {
      products: {
        edges: Array<{ node: ShopifyProduct }>
      }
    }
  }>({
    query: GET_PRODUCTS_BY_COLLECTION_QUERY,
    variables: { handle, first: 50 },
  })

  return data.collectionByHandle?.products.edges.map(({ node }) => node) || []
}

export async function createCart(): Promise<Cart> {
  const data = await shopifyFetch<{
    cartCreate: {
      cart: Cart
      userErrors: Array<{ field: string; message: string }>
    }
  }>({
    query: CREATE_CART_QUERY,
    variables: {
      input: {}
    }
  })

  if (data.cartCreate.userErrors?.length) {
    throw new Error(data.cartCreate.userErrors[0].message)
  }

  return data.cartCreate.cart
}

export async function addToCart(cartId: string, variantId: string, quantity = 1): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesAdd: {
      cart: Cart
      userErrors: Array<{ field: string; message: string }>
    }
  }>({
    query: ADD_TO_CART_QUERY,
    variables: {
      cartId,
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    },
  })

  if (data.cartLinesAdd.userErrors.length > 0) {
    throw new Error(data.cartLinesAdd.userErrors[0].message)
  }

  return data.cartLinesAdd.cart
}

export async function getCart(cartId: string): Promise<Cart> {
  const data = await shopifyFetch<{
    cart: Cart
  }>({
    query: GET_CART_QUERY,
    variables: {
      cartId,
    },
  })

  return data.cart
}
