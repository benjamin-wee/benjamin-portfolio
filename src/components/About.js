import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                      Welcome! I'm Benjamin,
                      <br className="hidden lg:inline-block"/> an aspiring 
                      <span style={{ color: '#69E2FF' }}> Full Stack Developer</span> and
                      <br className="hidden lg:inline-block"/> 
                      <span style={{ color: '#69E2FF' }}>Penultimate NUS CS Merit Scholar</span>.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a dedicated software engineer with a passion for crafting innovative solutions. 
                        Through this collection of projects, I invite you to explore my expertise in coding, problem-solving, and creating impactful software. 
                        Every experience and project reflects my commitment to excellence in the field, and I'm excited to share my journey with you.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" >
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="/logos/coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}