import Image from 'next/image';
import * as React from 'react';
import { gql } from '@apollo/client';
import { apolloClient } from '@lib/apollo-client';

function Signup() {
  const registerUserSubmit = async (event) => {
    event.preventDefault();

    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const phone_number = event.target.phone_number.value;

    const CREATE_LINK_MUTATION = gql`
      mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            firstName
            lastName
            email
            phone
            acceptsMarketing
          }
          customerUserErrors {
            field
            message
            code
          }
        }
      }
    `;

    const { data } = await apolloClient.mutate({
      mutation: CREATE_LINK_MUTATION,
      variables: {
        input: {
          firstName: first_name,
          lastName: last_name,
          email: email,
          phone: phone_number,
          password: password,
          acceptsMarketing: true,
        },
      },
    });

    console.log(data);
  };
  return (
    <div className="flex justify-center items-center my-28 ">
      <div className=" w-1/2">
        <div className="flex item-center ">
          <Image src="/login-icon.png" width={72} height={72} alt="" />
          <h2 className="p-4  font-bold text-4xl">Sign Up</h2>
        </div>
        <h2 className="mt-16 font-bold text-2xl">Personal Detail</h2>
        <form onSubmit={registerUserSubmit}>
          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleText0"
            placeholder="First Name"
            name="first_name"
          />
          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleText0"
            placeholder="Last Name"
            name="last_name"
          />
          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleText0"
            placeholder="Email"
            name="email"
          />
          <input
            type="password"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="password"
            placeholder="Password"
            name="password"
          />
          <input
            type="password"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="confirmPassword"
            placeholder="Confirm Password"
            name="confirm_password"
          />

          <input
            type="text"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleText0"
            placeholder="Phone Number"
            name="phone_number"
          />

          <div className="flex justify-start h-12 mt-6">
            <button
              type="submit"
              className="inline-block py-0 px-16 bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
