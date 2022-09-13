import Image from 'next/image';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import * as React from 'react';
import { gql } from '@apollo/client';
import { apolloClient } from '@lib/apollo-client';

function ResetPassword() {
  const ForgotUserSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    console.log(email);
  };
  return (
    <div className="flex justify-center items-center my-28 ">
      <div className=" w-1/2 ">
        <div className="flex item-center ">
          <Image src="/login-icon.png" width={72} height={72} alt="" />
          <h2 className="p-4 font-bold text-4xl">Signup/ Login</h2>
        </div>
        <div className="px-14  py-4 mt-14 border border-solid border-black">
          <h2 className="pt-8 pb-2 font-bold text-lg">
            Forgotten your password?
          </h2>

          <p className="pb-4 text-base">
            Enter your email address and we'll send you a link to reset it.
          </p>
          <form onSubmit={ForgotUserSubmit}>
            <input
              type="email"
              name="email"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-bold
        text-gray-dark
        bg-white bg-clip-padding
        border border-solid border-black
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleEmail0"
              placeholder="Email"
            />

            <button
              type="submit"
              className="mb-10 w-full inline-block  mt-8 px-14 py-2.5 bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Reset my Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
