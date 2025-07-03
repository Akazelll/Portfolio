"use client";

import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_8lba1ii",
          "template_wbrq5zo",
          form.current,
          "ESLM0zU2Vq1PrPMkw"
        )
        .then(
          () => {
            Swal.fire({
              title: "Message Sent!",
              text: "Thank you for reaching out!",
              icon: "success",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "bg-indigo-600 text-white px-4 py-2 rounded-md",
              },
            });
            form.current!.reset();
          },
          (error) => {
            Swal.fire({
              title: "Oops!",
              text: "Something went wrong. Please try again.",
              icon: "error",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "bg-red-600 text-white px-4 py-2 rounded-md",
              },
            });
            console.error(error.text);
          }
        );
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-24 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Let's Connect
        </h2>
        <p className="mt-4 text-gray-500 text-lg">
          Got a project or just want to say hi? I’d love to hear from you.
        </p>
      </div>

      <div className="mt-12 max-w-xl mx-auto">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200"
        >
          <div className="relative">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition text-gray-900"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium py-3 px-6 rounded-xl shadow transition"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
