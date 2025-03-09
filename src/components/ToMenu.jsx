import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function ToMenu() {
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
              className="flex justify-center md:justify-start items-center"
            >
              <img
                src="assets/donut-2.png"
                alt="donuts"
                className="w-full h-auto object-contain max-w-[250px] md:max-w-[350px] lg:max-w-[500px]"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex flex-col lg:col-span-2 space-y-3 lg:space-y-5"
            >
              <h1 className="rubik-font uppercase tracking-wider blue-text text-center md:text-left text-5xl md:text-5xl lg:text-8xl">
                Craving something delicious?
              </h1>
              <h1 className="poppins-font tracking-wide md:tracking-wider blue-text text-center md:text-left text-lg md:text-xl lg:text-2xl">
                From sweet donuts and baked goods to savory snacks and
                refreshing drinks, we've got the perfect treat to satisfy every
                craving!
              </h1>
              <div className="self-center md:self-start">
                <Link to="/menu">
                  <button className="bg-[#ff866f] text-white rubik-font tracking-widest text-xl md:text-2xl rounded-3xl uppercase px-4 py-2 md:px-6 md:py-3 hover:bg-[#f0816c] hover:scale-105 transition-all duration-500">
                    Menu
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ToMenu;
