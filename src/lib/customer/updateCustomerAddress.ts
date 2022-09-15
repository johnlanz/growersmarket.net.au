import { gql, HttpLink } from '@apollo/client';
import { apolloClient } from '../apollo-client';
import { GetUserToken } from './login';

async function updateCustomerAddress(input) {
    const token: any = GetUserToken();
  const ADDRESS_UPDATE = gql`
    mutation customerAddressUpdate(
      $address: MailingAddressInput!
      $customerAccessToken: String!
      $id: ID!
    ) {
      customerAddressUpdate(
        address: $address
        customerAccessToken: $customerAccessToken
        id: $id
      ) {
        customerAddress {
          id
          address1
          address2
          city
          company
          country
          provinceCode
          zip
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
    address: input.address,
    customerAccessToken: token.token.accessToken,
    id: input.id,
  });
  const { data } = await apolloClient.mutate({
    mutation: ADDRESS_UPDATE,
    variables: {
      address: input.address,
      customerAccessToken: token.token.accessToken,
      id: input.id,
    },
  });
  if (data.customerAddressUpdate.customerUserErrors.length > 0) {
    return {
      success: false,
      message: data.customerAddressUpdate.customerUserErrors[0].message,
    };
  } else {
    return {
      success: true,
    };
  }
}

export { updateCustomerAddress };
