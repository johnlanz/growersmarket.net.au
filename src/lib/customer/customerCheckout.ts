import { gql, HttpLink } from '@apollo/client';
import { apolloClient } from '../apollo-client';
import { GetUserToken } from './login';

async function customerCheckout(checkoutId) {
  const token: any = GetUserToken();
  console.log({
    checkoutId: checkoutId,
    customerAccessToken: token.token.accessToken,
  });
  const CUSTOMER_CHECKOUT = gql`
    mutation checkoutCustomerAssociateV2($checkoutId: ID!, $customerAccessToken: String!) {
        checkoutCustomerAssociateV2(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
          checkout {
            id
            email
          }
          checkoutUserErrors {
            field
            message
            code
          }
          customer {
            firstName
            lastName
            email
            phone
          }
        }
    }
  `;
  const { data } = await apolloClient.mutate({
    mutation: CUSTOMER_CHECKOUT,
    variables: {
      checkoutId: checkoutId,
      customerAccessToken: token.token.accessToken,
    },
  });
  console.log(data);
  return data
}

export { customerCheckout };
