import React from "react";
import { skills } from "../data";
import { ChipIcon } from "@heroicons/react/solid";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <ChipIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    My Tech Proficiencies
                </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {skills.map((skill) => (
                    <div key={skill} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <img src={skill.image} className="w-6 h-6 flex-shrink-0 mr-4 rounded-full"/>
                            <span className="title-font font-medium text-white">
                                {skill.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}