import React from "react";
import { SectionProps } from "../types";

const Contact: React.FC<SectionProps> = ({ handleScroll }) => {
  return (
    <section id="contact" onWheel={handleScroll} className="pb-32">
      <h2>Let&#39;s Chat!</h2>
      <form className="flex flex-col gap-4 justify-center max-w-xs mx-auto font-semibold ">
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="peer"
            autoComplete="email"
          />
          <label htmlFor="email" className="">
            Email address
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="peer"
            autoComplete="name"
          />
          <label htmlFor="name">Your Name</label>
        </div>
        <div className="relative">
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message for me"
            className="peer h-48"
          />
          <label htmlFor="message">Your message for me</label>
        </div>
      </form>
    </section>
  );
};

export default Contact;
