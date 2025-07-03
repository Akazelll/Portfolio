"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "@/components/ui/use-toast";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_8lba1ii",
        "template_wbrq5zo",
        form.current,
        "ESLM0zU2Vq1PrPMkw"
      );

      toast({
        title: "Email Sent",
        description: "Your message has been sent successfully!",
        variant: "default",
      });

      form.current.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
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
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
