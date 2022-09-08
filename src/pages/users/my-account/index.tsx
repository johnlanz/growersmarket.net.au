import Image from 'next/image';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import * as React from 'react';

function MyAccount() {
  return (
    <div className="flex justify-center items-center my-28 ">
      <div className=" w-1/2 ">
        <div className="flex item-center justify-between ">
          <div className="flex item-center ">
            <Image src="/login-icon.png" width={72} height={72} alt="" />
            <h2 className="p-4 font-bold text-4xl">My Account</h2>
          </div>
          <div className="flex item-center h-12 mt-4">
            <button
              type="button"
              className="inline-block py-0 px-8 bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              View Your Orders
            </button>
          </div>
        </div>
        <div className="px-6 pt-6 pb-16 py-4 mt-14 border border-solid border-black">
          <div className="flex item-center justify-between ">
            <h2 className="p-4 font-bold text-2xl">Personal Details</h2>
            <div className="flex item-center h-4 ">
              <div className="flex item-center ">
                <Image src="/icon.png" width={16} height={16} alt="" />
                <h2 className="pl-2 font-bold text-xs">Edit Details</h2>
              </div>
            </div>
          </div>
          <div className="px-2 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Full Name</h2>
              <h2 className=" pl-2 text-base">John Joe</h2>
            </div>
          </div>
          <div className="px-2 py-2.5 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Date of Birth</h2>
              <h2 className=" pl-2 text-base">12 July 2000</h2>
            </div>
          </div>
          <div className="px-2 py-4 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Primary Email</h2>
              <h2 className=" pl-2 text-base">johnjoe@gmail.com</h2>
            </div>
          </div>
          <div className="px-2 py-3 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Phone Number</h2>
              <h2 className=" pl-2 text-base">040 000 000</h2>
            </div>
          </div>
        </div>
        <div className="px-6 pt-6 pb-16 py-4 mt-14 border border-solid border-black">
          <div className="flex item-center justify-between ">
            <h2 className="p-4 font-bold text-2xl">Delivery Preference</h2>
            <div className="flex item-center h-4 ">
              <div className="flex item-center ">
                <Image src="/icon.png" width={16} height={16} alt="" />
                <h2 className="pl-2 font-bold text-xs">Edit Details</h2>
              </div>
            </div>
          </div>
          <div className="px-2 flex item-center h-4 ">
            <div className="flex item-center ">
              <p className=" pl-2 font-bold text-base">Delivery to this Address</p>
              <p className=" pl-2 text-base">12 Sapphire Dr, Port Macqaurie, NWS, 2444</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
