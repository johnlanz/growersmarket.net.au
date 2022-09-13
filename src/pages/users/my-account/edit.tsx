import Image from 'next/image';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import * as React from 'react';

function Edit() {
  const EditUserSubmit = async (event) => {
    event.preventDefault();

    const full_name = event.target.full_name.value;
    const email = event.target.email.value;
    const phone_number = event.target.phone_number.value;
    const suburb = event.target.suburb.value;
    const post_code = event.target.post_code.value;
    const state = event.target.state.value;

    console.log(full_name);
    console.log(email);
    console.log(phone_number);
    console.log(suburb);
    console.log(post_code);
    console.log(state);
  };
  return (
    <div className="flex justify-center items-center my-28 ">
      <div className=" w-1/2">
        <div className="flex item-center ">
          <Image src="/login-icon.png" width={72} height={72} alt="" />
          <h2 className="p-4  font-bold text-4xl">My Account</h2>
        </div>
        <h2 className="mt-16 font-bold text-2xl">Personal Detail</h2>
        <form onSubmit={EditUserSubmit}>
        <input
          type="text"
          className="
        form-control
        block
        w-full
        px-3
        mt-6
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
          id="exampleText0"
          placeholder="Full Name"
          name="full_name"
        />
        <input
          type="text"
          className="
        form-control
        block
        w-full
        px-3
        mt-6
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
          id="exampleText0"
          placeholder="Date of Birth"
        />
        <input
          type="text"
          className="
        form-control
        block
        w-full
        px-3
        mt-6
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
          id="exampleText0"
          placeholder="Email"
          name="email"
        />

        <input
          type="text"
          className="
        form-control
        block
        w-full
        px-3
        mt-6
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
          id="exampleText0"
          placeholder="Phone Number"
          name="phone_number"
        />

        <h2 className="mt-16 font-bold text-2xl">Delivery Preference</h2>
        <input
          type="text"
          className="
        form-control
        block
        w-full
        px-3
        mt-6
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
          id="exampleText0"
          placeholder="Street Address"
        />
        <input
          type="text"
          className="
        form-control
        block
        w-full
        px-3
        mt-6
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
          id="exampleText0"
          placeholder="Suburb"
          name="suburb"
        />
        <input
          type="number"
          className="
        form-control
        block
        w-full
        px-3
        mt-6
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
          id="exampleText0"
          placeholder="Post Code"
          name="post_code"
        />

        <select
          className="form-select appearance-none
      block
      w-full
      px-3
        mt-6
        text-base
        font-bold
        text-gray-dark
        bg-white bg-clip-padding
        border border-solid border-black
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          name="state"
        >
          <option selected>State</option>
          <option value="1">New South Wales</option>
          <option value="2">Victoria</option>
          <option value="3">Queensland</option>
          <option value="4">South Australia</option>
          <option value="5">Western Australia</option>
          <option value="6">Tasmania</option>
          <option value="7">Northern Territory</option>
          <option value="8">Australian Capital Territory</option>

        </select>

        <div className="flex justify-end h-12 mt-6">
          <button
            type="submit"
            className="inline-block py-0 px-16 bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Save
          </button>
          
        </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
