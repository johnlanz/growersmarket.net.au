import { gql, HttpLink } from '@apollo/client';
import { apolloClient } from '../apollo-client';
import { GetUserToken } from './login';

async function getCustomer() {
  const token: any = GetUserToken();
  const GET_CUSTOMER = gql`
    query GetCustomerQuery {
      customer: customer(customerAccessToken: "${token.token.accessToken}") {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
        defaultAddress {
          address1
          address2
          city
          company
          country
          provinceCode
          zip
        }
        orders(first: 2) {
          nodes {
            id
            name
            orderNumber
          }
        }
      }
    }
  `;
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
