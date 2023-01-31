import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactUs = () => {
  const [PhoneInputValule, setPhoneInputValule] = useState();
  return (
    <div className="py-20 px-20 relative mb-5 ">
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
        <PhoneInput
          value={PhoneInputValule}
          onChange={setPhoneInputValule}
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
