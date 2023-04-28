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
        <div className="flex flex-col justify-between w-full rounded-lg  bg-slate-200 border border-gray-200 shadow  hover:shadow">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto  md:rounded-l-lg" src="https://cdn.dribbble.com/users/375995/screenshots/6451756/goldencanongrid.png" alt="projectImage" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">TransService WebDashboard</h5>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="flex flex-row gap-3 m-2 mb-4 justify-around">
                <button type="button" onClick={handleClick} class="text-white hover:bg-purple-600 shadow-sm bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl px-3 py-0 h-12 text-center inline-flex items-center ">
                    <GoRepo className="mr-1" /> GitHub
                </button>
                <button type="button" onClick={handleClick} class="text-white hover:bg-purple-600 shadow-sm bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl px-3 py-0 h-12 text-center inline-flex items-center ">
                <CgWebsite className="mr-1" /> Demo
                </button>
            </div>
        </div>
    );
}

