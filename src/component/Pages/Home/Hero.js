import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import banner from "../../../assets/bg-style2.png";
const Hero = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src={banner}
              class="absolute inset-0"
            />
          </div>

          <div class="lg:py-24">
            <h2 class="text-3xl font-bold sm:text-4xl">
              Full digitalization cycle gor your business
            </h2>

            <p class="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <div className="my-4 flex justify-around items-center bg-slate-200 p-3 rounded-lg">
              <input
                class="w-2/6 h-12 border-slate-200 border-2 rounded-md mx-1 px-2 outline-none"
                type="email"
                placeholder="Your Email"
              />
              <select class="select select-bordered border-slate-200 border-2 w-2/6 outline-none">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <button className="rounded-full w-10 h-10 bg-amber-500 flex justify-center items-center">
                <p className="text-2xl font-bold text-white">
                  <IoArrowForwardOutline />
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
