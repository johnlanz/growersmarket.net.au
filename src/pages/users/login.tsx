import Image from 'next/image';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import * as React from 'react';
import router from 'next/router';
import { gql } from '@apollo/client';
import { apolloClient } from '@lib/apollo-client';

function Login() {
  const loginUserSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email);
    console.log(password);
    const LOGIN_MUTATION = gql`
      mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken {
            accessToken,
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

    const { data } = await apolloClient.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        input: {
          email: email,
          password: password,
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
          <h2 className="p-4 font-bold text-4xl">Signup/ Login</h2>
        </div>
        <h2 className="pt-8 pb-4 font-bold text-lg">Log In</h2>
        <form onSubmit={loginUserSubmit}>
          <input
            type="email"
            name="email"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleEmail0"
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            className="form-control block w-full px-3 mt-6 text-base font-bold text-gray-dark bg-white bg-clip-padding border border-solid border-black rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="examplePassword0"
            placeholder="Password"
          />
          <h2 className="pt-2 pb-4 font-bold text-base underline text-gray-dark">
            Forgotten your password?
          </h2>
          <button
            type="submit"
            className="mb-2 w-full inline-block  mt-4 px-14 py-2.5 bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Log In
          </button>
          <hr className="border-black mt-10 mb-8"></hr>
          <h2 className="pt-2 pb-4 font-bold text-base underline text-gray-dark">
            New to Growers Market? Sign Up instead
          </h2>
          <button
            type="button"
            className="mb-2 w-full inline-block mt-4 px-14 py-2.5 bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => router.push('/users/signup')}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
