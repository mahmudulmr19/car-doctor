import { useTitle } from "@//hooks";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Form = () => {
  const data = useLoaderData();
  useTitle(`${data.title} Details`);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const customerName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;

    const order = {
      customerName,
      email,
      phone,
      date,
      service: data.title,
      service_id: data.service_id,
      message,
    };

    const handlePOST = async () => {
      const response = await fetch("http://localhost:5000/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
    };
    handlePOST();
  };
  return (
    <div className="mt-16 bg-[#F3F3F3] p-14 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4"
      >
        <input
          type="text"
          required
          name="name"
          placeholder="Your Name"
          className="bg-white col-span-2 sm:col-span-1 placeholder:text-[#A2A2A2] outline-none py-2.5 px-5 rounded-md border border-gray-200 shadow-sm focus:border-[#FF3811]"
        />
        <input
          type="email"
          required
          name="email"
          placeholder="Your Email"
          className="bg-white col-span-2 sm:col-span-1 placeholder:text-[#A2A2A2] outline-none py-2.5 px-5 rounded-md border border-gray-200 shadow-sm focus:border-[#FF3811]"
        />
        <input
          type="tel"
          required
          name="phone"
          placeholder="Your Phone"
          className="bg-white col-span-2 sm:col-span-1 placeholder:text-[#A2A2A2] outline-none py-2.5 px-5 rounded-md border border-gray-200 shadow-sm focus:border-[#FF3811]"
        />
        <input
          type="date"
          required
          name="date"
          className="bg-white col-span-2 sm:col-span-1 placeholder:text-[#A2A2A2] outline-none py-2.5 px-5 rounded-md border border-gray-200 shadow-sm focus:border-[#FF3811]"
        />
        <textarea
          required
          name="message"
          placeholder="Your Message"
          rows={5}
          className="col-span-2 resize-none bg-white placeholder:text-[#A2A2A2] outline-none py-2.5 px-5 rounded-md border border-gray-200 shadow-sm focus:border-[#FF3811]"
        ></textarea>
        <button className="bg-[#FF3811] text-white col-span-2 w-full rounded-md py-3">
          Order Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
