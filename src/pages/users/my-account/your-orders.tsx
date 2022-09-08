import Image from 'next/image';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import * as React from 'react';

function YourOrders() {
  return (
    <div className="flex justify-center items-center my-28 ">
      <div className=" w-1/2 ">
        <div className="flex item-center justify-between ">
          <div className="flex item-center ">
            <Image src="/notebook.png" width={72} height={72} alt="" />
            <h2 className="p-4 font-bold text-4xl">Your Orders</h2>
          </div>
          <div className="flex item-center h-12 mt-4">
            <button
              type="button"
              className="inline-block py-0 px-8 bg-white text-black font-bold text-lg leading-normal  rounded-full border border-black transition duration-150 ease-in-out"
            >
              Back to My Account
            </button>
          </div>
        </div>
        <div className="px-6 pt-6 pb-16 py-4 mt-14 border border-solid border-black">
          <div className="flex item-center justify-between ">
            <h2 className="p-4 font-bold text-2xl">Order Completed</h2>
            <div className="flex item-center h-4 ">
              <div className="flex item-center h-8 ">
                <button
                  type="button"
                  className="inline-block py-0 px-4 bg-green-dark text-white font-medium text-sm leading-normal  rounded-full border border-black transition duration-150 ease-in-out"
                >
                  Reorder some of these items
                </button>
              </div>
            </div>
          </div>
          <div className="px-2 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Order Number</h2>
              <h2 className=" pl-2 text-base">15265998977</h2>
            </div>
          </div>
          <div className="px-2 py-2.5 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Date</h2>
              <h2 className=" pl-2 text-base">Wednesday 24 August</h2>
            </div>
          </div>
          <div className="px-2 py-4 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Delivery</h2>
              <h2 className=" pl-2 text-base">
                12 Sapphire Dr, Port Macqaurie, NWS, 2444
              </h2>
            </div>
          </div>
          <div className="px-2 py-3 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Trolly</h2>
              <h2 className=" pl-2 text-base">24 Items</h2>
            </div>
          </div>
          <div className="px-2 py-3 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Total</h2>
              <h2 className=" pl-2 text-base">$700.50</h2>
            </div>
          </div>
        </div>
        <div className="px-6 pt-6 pb-16 py-4 mt-14 border border-solid border-black">
          <div className="flex item-center justify-between ">
            <h2 className="p-4 font-bold text-2xl">Order Completed</h2>
            <div className="flex item-center h-4 ">
              <div className="flex item-center h-8 ">
                <button
                  type="button"
                  className="inline-block py-0 px-4 bg-green-dark text-white font-medium text-sm leading-normal  rounded-full border border-black transition duration-150 ease-in-out"
                >
                  Reorder some of these items
                </button>
              </div>
            </div>
          </div>
          <div className="px-2 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Order Number</h2>
              <h2 className=" pl-2 text-base">15265998977</h2>
            </div>
          </div>
          <div className="px-2 py-2.5 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Date</h2>
              <h2 className=" pl-2 text-base">Wednesday 24 August</h2>
            </div>
          </div>
          <div className="px-2 py-4 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Delivery</h2>
              <h2 className=" pl-2 text-base">
                12 Sapphire Dr, Port Macqaurie, NWS, 2444
              </h2>
            </div>
          </div>
          <div className="px-2 py-3 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Trolly</h2>
              <h2 className=" pl-2 text-base">24 Items</h2>
            </div>
          </div>
          <div className="px-2 py-3 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Total</h2>
              <h2 className=" pl-2 text-base">$700.50</h2>
            </div>
          </div>
        </div>
        <div className="px-6 pt-6 pb-16 py-4 mt-14 border border-solid border-black">
          <div className="flex item-center justify-between ">
            <h2 className="p-4 font-bold text-2xl">Order Completed</h2>
            <div className="flex item-center h-4 ">
              <div className="flex item-center h-8 ">
                <button
                  type="button"
                  className="inline-block py-0 px-4 bg-green-dark text-white font-medium text-sm leading-normal  rounded-full border border-black transition duration-150 ease-in-out"
                >
                  Reorder some of these items
                </button>
              </div>
            </div>
          </div>
          <div className="px-2 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Order Number</h2>
              <h2 className=" pl-2 text-base">15265998977</h2>
            </div>
          </div>
          <div className="px-2 py-2.5 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Date</h2>
              <h2 className=" pl-2 text-base">Wednesday 24 August</h2>
            </div>
          </div>
          <div className="px-2 py-4 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Delivery</h2>
              <h2 className=" pl-2 text-base">
                12 Sapphire Dr, Port Macqaurie, NWS, 2444
              </h2>
            </div>
          </div>
          <div className="px-2 py-3 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Trolly</h2>
              <h2 className=" pl-2 text-base">24 Items</h2>
            </div>
          </div>
          <div className="px-2 py-3 flex item-center h-4 ">
            <div className="flex item-center ">
              <h2 className=" pl-2 font-bold text-base">Total</h2>
              <h2 className=" pl-2 text-base">$700.50</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-start h-12 mt-6">
          <button
            type="button"
            className="inline-block py-0 underline bg-white text-black font-bold text-lg leading-normal  transition duration-150 ease-in-out"
          >
            Load Older Orders
          </button>
        </div>
      </div>
    </div>
  );
}

export default YourOrders;
