import { gql, HttpLink } from '@apollo/client';
import { apolloClient } from '../apollo-client';

const LOGIN_MUTATION = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
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

async function CustomerLogin(input) {
  const { data } = await apolloClient.mutate({
    mutation: LOGIN_MUTATION,
    variables: {
      input: input,
    },
  });
  console.log(data)
  if (data.customerAccessTokenCreate.customerUserErrors.length > 0) {
    return {
        success: false,
        message: data.customerAccessTokenCreate.customerUserErrors[0].message
    }
  } else {
    SetUserToken(data.customerAccessTokenCreate.customerAccessToken, null)
    return {
        success: true
    }
  }
}

const SetUserToken = (token, multipass) => {
    localStorage.setItem(`growersUser`, JSON.stringify({
        token: token,
        multipass: multipass
    }));
}

const UserLogout = () => {
    localStorage.removeItem(`growersUser`)
}

const GetUserToken = () => {
    let user = localStorage.getItem(`growersUser`)
    if (user) {
        user = JSON.parse(user)
    }
    return user
}

export { CustomerLogin, GetUserToken };
