import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden p-10">
          {/* Address div */}
          <div className="bg-gray-800 relative py-6 rounded shadow-md">
            <div className="px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    ADDRESS
                </h2>
                <p className="mt-1">
                    50 Hoy Fatt Road <br />
                    Singapore, S150050
                </p>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    EMAIL
                </h2>
                <p className="mt-1">
                    benjamin_wee@u.nus.edu
                </p>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    PHONE
                </h2>
                <p className="mt-1">
                    98186384
                </p>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    SOCIALS
                </h2>
                <div className= "mt-1" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src="/logos/linkedin-f.svg" alt="LinkedIn Logo" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                    <a href="https://www.linkedin.com/in/benjamin-wee-11a0961b9" style={{ textDecoration: 'none', color: '#fff'}}>LinkedIn</a>
                </div>
                <div className= "mt-1" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src="/logos/github-f.svg" alt="LinkedIn Logo" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                    <a href="https://github.com/benjamin-wee" style={{ textDecoration: 'none', color: '#fff'}}>GitHub</a>
                </div>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden p-10"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Work With Me
          </h2>
          <p className="leading-relaxed mb-5">
            If you have any opportunities, feel free to connect with me below!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}