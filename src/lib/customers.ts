import { gql, HttpLink } from '@apollo/client';
import { apolloClient } from './apollo-client';

const shopifyLink = new HttpLink({
  uri: `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/api/2020-10/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token':
      process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
    Accept: 'application/json',
  },
});

const GET_CUSTOMER = gql`
  query GetCustomerQuery {
    customer: customer(customerAccessToken: "bobs_token") {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
`;

const CREATE_CUSTOMER = gql`
  query GetCustomerQuery {
    customer: mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          firstName
          lastName,
          email,
          phone,
          acceptsMarketing
        }
        customerUserErrors { field, message, code }
      }
    }
  }
`;

async function getCustomer() {
  const { data } = await apolloClient.query({
    query: GET_CUSTOMER,
    context: {
      clientName: 'SHOPIFY',
    },
  });
  console.log('getCustomer', data);
  return data.customer;
}

export { getCustomer };
