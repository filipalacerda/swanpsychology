"use client";

import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState<{
    [k: string]: FormDataEntryValue;
  }>();

  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const hasData = (value: string) => {
    return value && value !== "";
  };

  const isFirstNameValid = (value: string) => {
    if (!hasData(value)) {
      setFirstNameError("This is a required field");
      return false;
    }
    setFirstNameError(null);
    return true;
  };

  const isLastNameValid = (value: string) => {
    if (!hasData(value)) {
      setLastNameError("This is a required field");
      return false;
    } else {
      setLastNameError(null);
      return true;
    }
  };

  const isValidEmail = (value: string) => {
    if (!hasData(value)) {
      setEmailError("This is a required field");
      return false;
    } else if (
      !value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailError("Email should have a valid format");
      return false;
    } else {
      setEmailError(null);
      return true;
    }
  };

  const isMessageValid = (value: string) => {
    if (!hasData(value)) {
      setMessageError("This is a required field");
      return false;
    } else if (value.length < 20) {
      setMessageError("Please provide a message with more than 20 characters");
      return false;
    } else {
      setMessageError(null);
      return true;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    const isValidFirstName = isFirstNameValid(formJson.firstName as string);
    const isValidLastName = isLastNameValid(formJson.lastName as string);
    const isEmailValid = isValidEmail(formJson.email as string);
    const isValidMessage = isMessageValid(formJson.message as string);

    if (isEmailValid && isValidFirstName && isValidLastName) {
      console.log(formJson);
    }
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <fieldset className="flex mb-6">
        <legend className="flex items-center mb-4">
          <div className="mr-1">Name:</div>
          <span className="font-light text-sm">(required)</span>
        </legend>
        <div className="flex flex-col mr-4 md:w-6/12">
          <label className="mb-1">First name:</label>
          <input
            type="text"
            name="firstName"
            className="rounded-md min-h-8 p-0.5"
          />
          <p className="text-error text-sm mt-1">{firstNameError}</p>
        </div>
        <div className="flex flex-col md:w-6/12">
          <label className="mb-1">Last name:</label>
          <input
            type="text"
            name="lastName"
            className="rounded-md min-h-8 p-0.5"
          />
          <p className="text-error text-sm mt-1">{lastNameError}</p>
        </div>
      </fieldset>
      <fieldset className="flex flex-col mb-4">
        <label className="mb-1">
          <div>
            <span className="mr-1">Email:</span>
            <span className="font-light text-sm">(required)</span>
          </div>
        </label>
        <input
          type="email"
          name="email"
          className="rounded-md md:w-92 min-h-8 p-0.5"
        />
        <p className="text-error text-sm mt-1">{emailError}</p>
      </fieldset>
      <fieldset className="flex flex-col  mb-4">
        <label className="mb-1">
          <div>
            <span className="mr-1">Message:</span>
            <span className="font-light text-sm">(required)</span>
          </div>
        </label>
        <textarea
          name="message"
          className="rounded-md min-h-8 p-0.5"
          rows={5}
          cols={30}
        />
        <p className="text-error text-sm mt-1">{messageError}</p>
      </fieldset>
      <div>
        <button
          type="submit"
          className="mt-10 bg-white p-4 rounded-3xl text-center w-40"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
