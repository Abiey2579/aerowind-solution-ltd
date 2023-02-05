import React from "react";

const ContactUsBody = () => {
  return (
    <div className="mb-[100px] 2xl:px-36 xl:px-24 lg:px-[75px] md:px-[50px] sm:px-8 py-5 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">
        Let's Start a Conversation
      </h1>
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="px-5 lg:max-w-md w-full">
          <div className="mb-3 p-5 lg:w-[300px] w-full">
            <h1 className="text-xl text-black font-semibold mb-2">Address</h1>
            <p className="text-black">
              Bulumkutu Abuja, Abba Kagu Marte Street. Maiduguri Borno State,
              Nigeria
            </p>
          </div>
          <div className="mb-3 p-5 lg:w-[300px] w-full">
            <h1 className="text-xl text-black font-semibold mb-2">
              Phone Number
            </h1>
            <p className="text-black">+234 9012 3456 789</p>
            <p className="text-black">+234 9012 3456 789</p>
            <p className="text-black">+234 9012 3456 789</p>
          </div>
          <div className="mb-3 p-5 lg:w-[300px] w-full">
            <h1 className="text-xl text-black font-semibold mb-2">
              Email Address
            </h1>
            <p className="text-black">info@gmail.com</p>
            <p className="text-black">info@gmail.com</p>
            <p className="text-black">info@gmail.com</p>
          </div>
        </div>
        <form action="" className="px-5 lg:max-w-2xl w-full">
          <input
            type="number"
            name=""
            id=""
            placeholder="Your Name"
            className="p-3 px-5 bg-indigo-50 w-full mb-3 rounded-3xl outline-0 placeholder:text-gray-800 font-semibold"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Email Address"
            className="p-3 px-5 bg-indigo-50 w-full mb-3  rounded-3xl outline-0 placeholder:text-gray-800 font-semibold"
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Subject matter ..."
            className="p-3 px-5 bg-indigo-50 w-full mb-3  rounded-3xl outline-0 placeholder:text-gray-800 font-semibold"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Any additional information or questions about requesting a quote from us?"
            className="p-3 px-5 bg-indigo-50 w-full mb-3 rounded-3xl outline-0 xl:col-span-3 lg:col-span-2 col-span-1 placeholder:text-gray-800 font-semibold"
          ></textarea>
          <button className="p-3 px-5 bg-indigo-600  w-full mb-3 rounded-3xl outline-0 text-white font-semibold  xl:col-span-3 lg:col-span-2 col-span-1">
            Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsBody;
