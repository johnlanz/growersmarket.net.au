import { gql, HttpLink } from '@apollo/client';
import { apolloClient } from '../apollo-client';
import { GetUserToken } from './login';

async function updateCustomer(input) {
  const token: any = GetUserToken();
  const CUSTOMER_UPDATE = gql`
    mutation customerUpdate(
      $customer: CustomerUpdateInput!
      $customerAccessToken: String!
    ) {
      customerUpdate(
        customer: $customer
        customerAccessToken: $customerAccessToken
      ) {
        customer {
          firstName
          lastName
          email
          phone
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
        customerUserErrors {
          field
          message
          code
        }
      }
    }
  `;
  console.log({
    customer: input.customer,
    customerAccessToken: token.token.accessToken,
  });
  const { data } = await apolloClient.mutate({
    mutation: CUSTOMER_UPDATE,
    variables: {
      customer: input.customer,
      customerAccessToken: token.token.accessToken,
    },
  });
  if (data.customerUpdate.customerUserErrors.length > 0) {
    return {
        success: false,
        message: data.customerUpdate.customerUserErrors[0].message
    }
  } else {
    return {
        success: true
    }
  }
}

export { updateCustomer };
