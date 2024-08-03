"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };
  return (
    <form>
      <fieldset className="flex mb-6">
        <legend className="flex items-center gap-2 mb-4">
          <div className="">Name:</div>
          <span className="font-light text-sm">(required)</span>
        </legend>
        <div className="flex flex-col mr-4">
          <label>First name:</label>
          <input type="text" className="rounded-md md:w-48 min-h-8" />
        </div>
        <div className="flex flex-col">
          <label>Last name:</label>
          <input type="text" className="rounded-md md:w-48 min-h-8" />
        </div>
      </fieldset>
      <fieldset className="flex flex-col mb-4">
        <label>
          <div>
            <span>Email:</span>
            <span className="font-light text-sm">(required)</span>
          </div>
        </label>
        <input type="email" className="rounded-md md:w-48 min-h-8" />
      </fieldset>
      <fieldset className="flex flex-col  mb-4">
        <label>
          <div>
            <span>Message:</span>
            <span className="font-light text-sm">(required)</span>
          </div>
        </label>
        <textarea
          name="message"
          className="rounded-md min-h-8"
          rows={5}
          cols={50}
        />
      </fieldset>
      <div>
        <button
          type="submit"
          className="mt-10 bg-white p-4 rounded-3xl text-center md:w-60 w-40"
          onClick={(e) => onSubmit(e)}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
