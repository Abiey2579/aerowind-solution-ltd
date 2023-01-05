import React from "react";

const ContactUs = () => {
  return (
    <div className="py-20 px-20 relative mb-5">
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-center mb-10">
        Request for a quote
      </h1>
      <form
        action=""
        method="get"
        className="grid justify-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 lg:px-40 px-6"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Name"
          className="p-3 px-5 bg-gray-200 rounded-3xl outline-0 placeholder:text-gray-800 font-semibold"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email Address"
          className="p-3 px-5 bg-gray-200 rounded-3xl outline-0 placeholder:text-gray-800 font-semibold"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Phone Number"
          className="p-3 px-5 bg-gray-200 rounded-3xl outline-0 placeholder:text-gray-800 font-semibold"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Products of interest"
          className="p-3 px-5 bg-gray-200 rounded-3xl outline-0 placeholder:text-gray-800 font-semibold"
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="Quantity"
          className="p-3 px-5 bg-gray-200 rounded-3xl outline-0 placeholder:text-gray-800 font-semibold"
        />
        <input
          type="date"
          name=""
          id=""
          placeholder="Date Required"
          className="p-3 px-5 bg-gray-200 rounded-3xl outline-0 placeholder:text-gray-800 font-semibold"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Any additional information or questions about requesting a quote from us?"
          className="p-3 px-5 bg-gray-200 rounded-3xl outline-0 col-span-3 placeholder:text-gray-800 font-semibold"
        ></textarea>
        <button className="p-3 px-5 bg-indigo-600 rounded-3xl outline-0 text-white font-semibold col-span-3">
          Request
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
