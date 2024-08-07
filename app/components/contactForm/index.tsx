"use client";

import { FormEvent, useState } from "react";
import { FaSpinner } from "react-icons/fa6";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    const isValidFirstName = isFirstNameValid(formJson.firstName as string);
    const isValidLastName = isLastNameValid(formJson.lastName as string);
    const isEmailValid = isValidEmail(formJson.email as string);
    const isValidMessage = isMessageValid(formJson.message as string);

    if (isEmailValid && isValidFirstName && isValidLastName && isValidMessage) {
      // Submit form
      setIsLoading(true);

      try {
        const response = await fetch("/api", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to submit the data. Please try again.");
        }
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center flex-col">
          <p className="text-3xl m-auto">We are sending the data...</p>
          <div className="m-auto mt-10">
            <FaSpinner size={50} className="loading-icon " />
          </div>
        </div>
      )}
      {hasError && (
        <div className="flex mb-10">
          <p className="text-lg text-error">
            An error occured while submitting the form. Please try again!
          </p>
        </div>
      )}
      {!isLoading && (
        <form onSubmit={(e) => onSubmit(e)}>
          <fieldset className="flex mb-4 md:flex-row flex-col">
            <legend className="flex items-center mb-4">
              <div className="mr-1">Name:</div>
              <span className="font-light text-sm">(required)</span>
            </legend>
            <div className="flex flex-col md:mr-4 md:w-6/12 md:mb-0 mb-4">
              <label htmlFor="firstName" className="mb-1">
                First name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="rounded-md min-h-8 p-1.5 font-light"
              />
              <p className="text-error text-sm mt-1">{firstNameError}</p>
            </div>
            <div className="flex flex-col md:w-6/12">
              <label htmlFor="lastName" className="mb-1">
                Last name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="rounded-md min-h-8 p-1.5 font-light"
              />
              <p className="text-error text-sm mt-1">{lastNameError}</p>
            </div>
          </fieldset>
          <fieldset className="flex flex-col mb-4">
            <label className="mb-1" htmlFor="email">
              <div>
                <span className="mr-1">Email:</span>
                <span className="font-light text-sm">(required)</span>
              </div>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-md md:w-92 min-h-8 p-1.5 font-light"
            />
            <p className="text-error text-sm mt-1">{emailError}</p>
          </fieldset>
          <fieldset className="flex flex-col  mb-4">
            <label className="mb-1" htmlFor="message">
              <div>
                <span className="mr-1">Message:</span>
                <span className="font-light text-sm">(required)</span>
              </div>
            </label>
            <textarea
              name="message"
              id="message"
              className="rounded-md min-h-8 p-1.5 font-light"
              rows={5}
              cols={30}
            />
            <p className="text-error text-sm mt-1">{messageError}</p>
          </fieldset>
          <div className="text-center md:text-start">
            <button
              type="submit"
              className="mt-10 bg-white p-4 rounded-3xl text-center w-40"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
