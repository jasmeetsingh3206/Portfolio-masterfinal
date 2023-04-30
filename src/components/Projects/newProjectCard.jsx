import React from "react";
import '../../../src/tailwindinc.scoped.scss'

import {
    GoRepo,
} from "react-icons/go";
import {
    CgWebsite,
} from "react-icons/cg";
export default function NewCard(props) {

    function pillGenerator(tech) {
        return <span className=" italic bg-purple-300  inline-block m-1 py-1 px-2 rounded  text-sm">{tech}</span>;

    };
    return (
        <div className="flex flex-col justify-between w-full md:h-full rounded-lg  bg-slate-200   shadow  hover:shadow">
            <div className="p-3 pt-4 bg-gradient-to-b from-purple-400 to-slate-200 rounded-lg">
                <img className="object-contain w-full rounded-t-lg h-80 md:h-auto  md:rounded-t-lg" src={props.project.imgsrc} alt="projectImage" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.project.title}</h5>
                <div className=" mb-3 ">{props.project.tech.map((skill) => pillGenerator(skill))}</div>
                <p className="mb-3 font-normal text-gray-700">{props.project.desc}</p>
            </div>
            <div className="flex flex-row gap-3 m-1 mb-3 justify-center">
                <a href={props.project.githublink} rel="noreferrer" target="_blank" class="text-white shadow-sm  hover:bg-purple-800 bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl px-3 py-0 h-12 text-center inline-flex items-center ">
                    <GoRepo className="mr-1" /> GitHub
                </a>
                <a href={props.project.demolink} rel="noreferrer" target="_blank" type="button" class="text-white hover:bg-purple-800 shadow-sm bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl px-3 py-0 h-12 text-center inline-flex items-center ">
                    <CgWebsite className="mr-1" /> Demo
                </a>
            </div>
        </div>
    );
}

