import React from "react";
import {
  IoArrowForwardOutline,
  IoCaretForwardCircleSharp,
} from "react-icons/io5";
import about_us from "../../../assets/about.png";
const ContactUs = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
            <img alt="Party" src={about_us} class="absolute inset-0" />
          </div>

          <div class="lg:py-24">
            <p>Welcome to Digitizelo</p>
            <h2 class="text-3xl font-extralight py-6 sm:text-4xl">
              to digitize your life
            </h2>

            <p class="mt-4 text-gray-600">
              Established to deliver leading edge global data driven
              technologies, IoT, Artificial Intelligence, Robotics, intelligent
              technical solutions and consulting services to businesses,
              organizations and governmental bodies.
            </p>

            <p className="mt-4">
              Digitizel was founded with the vision to enable "To digitize your
              life", providing its customers and business partners with robust,
              extensible and customizable software solutions for information
              sharing, data exchange, services invocation and communication.
            </p>
            <button className="border-2 border-slate-300  rounded-full py-2 px-6  cursor-pointer  mt-8">
              Contact Us
            </button>
            {/* <button className="shadow-lg shadow-slate-300 rounded-full py-4 px-8  cursor-pointer  font-semibold mt-8 flex justify-between items-center gap-4">
              Watch Video
              <IoCaretForwardCircleSharp className="text-4xl text-red-400"/>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
