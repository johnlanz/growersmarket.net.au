import Image from 'next/image';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import * as React from 'react';

function OrderDetails() {
  return (
    <div className="flex justify-center items-center my-28 pt-2 ">
      <div className=" w-full px-6 ">
        <div className="flex item-center justify-between ">
          <div className="flex item-center ">
            <Image src="/notebook.png" width={72} height={72} alt="" />
            <h2 className="p-4 font-bold text-4xl">Your Orders (24-Aug)</h2>
          </div>
        </div>
        <div className="flex item-center justify-self-start ">
          <div className="flex item-center ">
            <p className="pt-8 pl-2">
              You've added <strong>0</strong> of <strong>28</strong> available
              items in this list to your trolley
            </p>
          </div>
          <div className="flex item-center h-12 mt-4 ml-4">
            <button
              type="button"
              className="inline-block py-0 px-8 bg-green-dark text-white font-bold text-lg leading-normal  rounded-full border border-black transition duration-150 ease-in-out"
            >
              <span className="text-sm">Add for all</span>{' '}
              <strong>$143.04</strong>
            </button>
          </div>
        </div>
        <hr className="border-black my-8"></hr>
        <div className="grid grid-col-4 grid-flow-col pt-8">
          <div className="flex">
            <div className=" max-w-sm">
              <a href="#!">
                <Image src="/beans.webp" width={340} height={200} alt="" />
              </a>
              <div className=" pt-4 flex items-center justify-between">
                <div>
                  <p className=" font-bold text-gray-dark text-sm uppercase ">
                    Beans Green
                  </p>
                  <p className=" font-bold text-gray-dark text-sm ">1/2 kg</p>
                </div>
                <p className="text-gray-dark text-2xl font-bold">
                  <sup>$</sup>1.79
                </p>
              </div>
              <div className="flex justify-center h-12 mt-6 mb-6">
                <button
                  type="button"
                  className="flex items-center justify-center space-x-3 py-0 w-full bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <span>Add to Cart </span>{' '}
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" max-w-sm">
              <a href="#!">
                <Image src="/potato.webp" width={340} height={200} alt="" />
              </a>
              <div className=" pt-4 flex items-center justify-between">
                <div>
                  <p className=" font-bold text-gray-dark text-sm uppercase ">
                    Sweet Potato
                  </p>
                  <p className=" font-bold text-gray-dark text-sm ">
                    Gold 1 kg Special!!
                  </p>
                </div>
                <p className="text-gray-dark text-2xl font-bold">
                  <sup>$</sup>1.79
                </p>
              </div>
              <div className="flex justify-center h-12 mt-6 mb-6">
                <button
                  type="button"
                  className="flex items-center justify-center space-x-3 py-0 w-full bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <span>Add to Cart </span>{' '}
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" max-w-sm">
              <a href="#!">
                <Image src="/cauli.webp" width={340} height={200} alt="" />
              </a>
              <div className=" pt-4 flex items-center justify-between">
                <div>
                  <p className=" font-bold text-gray-dark text-sm uppercase ">
                    CAULIFLOWER
                  </p>
                  <p className=" font-bold text-gray-dark text-sm ">1 kg</p>
                </div>
                <p className="text-gray-dark text-2xl font-bold">
                  <sup>$</sup>1.79
                </p>
              </div>
              <div className="flex justify-center h-12 mt-6 mb-6">
                <button
                  type="button"
                  className="flex items-center justify-center space-x-3 py-0 w-full bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <span>Add to Cart </span>{' '}
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" ">
              <a href="#!">
                <Image src="/walnuts.webp" width={340} height={200} alt="" />
              </a>
              <div className=" pt-4 flex items-center justify-between">
                <div>
                  <p className=" font-bold text-gray-dark text-sm uppercase ">
                    Nuts Walnuts
                  </p>
                  <p className=" font-bold text-gray-dark text-sm ">350g</p>
                </div>
                <p className="text-gray-dark text-2xl font-bold">
                  <sup>$</sup>1.79
                </p>
              </div>
              <div className="flex justify-center h-12 mt-6 mb-6">
                <button
                  type="button"
                  className="flex items-center justify-center space-x-3 py-0 w-full bg-green-dark text-white font-bold text-lg leading-normal  rounded-full shadow-md hover:bg-green-dark hover:shadow-lg focus:bg-green-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <span>Add to Cart </span>{' '}
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
