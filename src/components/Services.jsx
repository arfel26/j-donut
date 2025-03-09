import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Services() {
  return (
    <div>
      <section className="px-4 py-16">
        <div className="h-auto lg:h-[45vh] flex justify-center items-center">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-32 max-w-9/10 md:max-w-8/10 lg:max-w-7/10 mx-auto"
          >
            <div className="left flex justify-center flex-col text-center space-y-3 text-[#ee5b8e] hover:text-[#ff699d]">
              <div className="rounded-full border-6 p-2">
                <img
                  src="assets/deliver-white.png"
                  alt="delivery"
                  className="w-60 h-60 md:w-65 md:h-65 lg:w-80 lg:h-80 rounded-full p-8 bg-[#ee5b8e] hover:bg-[#ff699d] duration-500"
                />
              </div>
              <h1 className="rubik-font uppercase text-2xl md:text-3xl tracking-widest ">
                Delivery
              </h1>
            </div>
            <div className="center flex justify-center flex-col text-center space-y-3 text-[#ee5b8e] hover:text-[#ff699d]">
              <div className="rounded-full border-6 p-2">
                <img
                  src="assets/pickup-white.png"
                  alt="delivery"
                  className="w-60 h-60 md:w-65 md:h-65 lg:w-80 lg:h-80 rounded-full p-8 bg-[#ee5b8e] hover:bg-[#ff699d] duration-500"
                />
              </div>
              <h1 className="rubik-font uppercase text-2xl md:text-3xl tracking-widest">
                Pick Up
              </h1>
            </div>
            <div className="right flex justify-center flex-col text-center space-y-3 text-[#ee5b8e] hover:text-[#ff699d]">
              <div className="rounded-full border-6 p-2">
                <img
                  src="assets/dinein-white.png"
                  alt="delivery"
                  className="w-60 h-60 md:w-65 md:h-65 lg:w-80 lg:h-80 rounded-full p-8 bg-[#ee5b8e] hover:bg-[#ff699d] duration-500"
                />
              </div>
              <h1 className="rubik-font uppercase text-2xl md:text-3xl tracking-widest">
                Dine In
              </h1>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
