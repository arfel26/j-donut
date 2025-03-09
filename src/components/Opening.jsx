import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Opening() {
  return (
    <div>
      <section className="px-4 py-16">
        <div className="h-auto lg:h-[80vh] flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-9/10 md:max-w-8/10 lg:max-w-7/10 mx-auto">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex flex-col lg:col-span-2 justify-center items-center lg:items-start space-y-3 lg:space-y-5"
            >
              <h1 className="rubik-font uppercase tracking-wider blue-text text-center md:text-left text-5xl md:text-6xl lg:text-8xl">
                Freshly Made Donuts Await!
              </h1>
              <h1 className="poppins-font tracking-wide md:tracking-wider blue-text text-center md:text-left text-lg md:text-xl lg:text-2xl">
                Come indulge in the sweetest treats, made with love every day.
                Whether you're grabbing a morning pick-me-up or satisfying your
                sweet tooth, we've got the perfect donut for you!
              </h1>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex justify-center md:justify-end items-center"
            >
              <img
                src="assets/donut-1.png"
                alt="donuts"
                className="w-full h-auto object-contain max-w-[220px] md:max-w-[250px] lg:max-w-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Opening;
