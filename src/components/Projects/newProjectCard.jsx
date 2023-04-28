import React from "react";
import '../../../src/tailwindinc.scoped.scss'
import {
    GoRepo,
  } from "react-icons/go";
  import {
    CgWebsite,
  } from "react-icons/cg";
export default function NewCard() {
    function handleClick() {
        console.log("clicked");
        alert('You clicked me!');
      }
    return (
        <div className="flex flex-col rounded-lg items-center bg-white border border-gray-200 shadow md:flex-col md:max-w-xl hover:bg-gray-900 text-black">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto  md:rounded-l-lg" src="https://cdn.dribbble.com/users/375995/screenshots/6451756/goldencanongrid.png" alt="projectImage" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">TransService WebDashboard</h5>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="flex flex-row gap-1 m-2 mb-4">
            <button type="button" class="text-white  bg-blue-700 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <GoRepo className="mr-1" /> GitHub
            </button>
            <button type="button" class="text-white  bg-blue-700 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <CgWebsite className="mr-1" /> Demo
            </button>
            </div>
        </div>
    );
}

