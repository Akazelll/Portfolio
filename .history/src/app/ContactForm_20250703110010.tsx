"use client";

import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {"use client";

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
              title: "Success!",
              text: "Email sent successfully!",
              icon: "success",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "bg-blue-600 text-white px-4 py-2 rounded-md",
              },
            });
            form.current!.reset();
          },
          (error) => {
            Swal.fire({
              title: "Error!",
              text: "Failed to send email. Please try again.",
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
    <section id="contact" className="relative isolate py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
      </div>

      <div className="mt-16 mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl ring-1 ring-gray-200 rounded-xl p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

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
              title: "Success!",
              text: "Email sent successfully!",
              icon: "success",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "bg-blue-600 text-white px-4 py-2 rounded-lg",
              },
            });
            // Gunakan operator non-null assertion untuk memberi tahu TypeScript bahwa form.current tidak null
            form.current!.reset();  // Reset form setelah pengiriman sukses
          },
          (error) => {
            Swal.fire({
              title: "Error!",
              text: "Failed to send email. Please try again.",
              icon: "error",
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "bg-red-600 text-white px-4 py-2 rounded-lg",
              },
            });
            console.error(error.text);
          }
        );
    }
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4 text-black">Get In Touch</h2>
      <p className="text-lg text-gray-600 mb-6">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-4 text-black"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
