import React from "react";

const Input = ({ label, type, placeholder, id, onChange, value, length }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="block text-[#444444] font-semibold text-lg"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className="border border-[#E8E8E8] outline-none rounded-lg placeholder:text-[#A2A2A2] py-3 px-5 shadow-sm hover:border-[#FF3811] focus:border-[#FF3811] transition-all"
        required
        minLength={length}
      />
    </div>
  );
};

export default Input;
