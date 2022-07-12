import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
export const shopifyClient = Client.buildClient({
  domain: 'morin-jams.myshopify.com',
  storefrontAccessToken: '9ebaee1f02c350903a0e6e6fca776f9d'
});

export const parseShopifyResponse = (response) =>  JSON.parse(JSON.stringify(response));