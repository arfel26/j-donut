import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Donut() {
  const classicDonuts = [
    { name: "Chocolate Sprinkle", src: "assets/donuts/1.png" },
    { name: "Choco Nut", src: "assets/donuts/2.png" },
    { name: "Powdered", src: "assets/donuts/3.png" },
    { name: "Strawberry Sprinkle", src: "assets/donuts/4.png" },
    { name: "Vanilla Sprinkle", src: "assets/donuts/5.png" },
    { name: "Coffee Sprinkle", src: "assets/donuts/6.png" },
    { name: "Banana", src: "assets/donuts/11.png" },
    { name: "Candy Sprinkle", src: "assets/donuts/12.png" },
    { name: "Peanut", src: "assets/donuts/13.png" },
  ];

  const premiumDonuts = [
    { name: "Ube Marble", src: "assets/donuts/7.png" },
    { name: "Carrot", src: "assets/donuts/8.png" },
    { name: "Bumblebee", src: "assets/donuts/9.png" },
    { name: "Pandan", src: "assets/donuts/10.png" },
    { name: "Rocky Road", src: "assets/donuts/14.png" },
    { name: "Coffee Nut", src: "assets/donuts/15.png" },
    { name: "Coffee Vanilla", src: "assets/donuts/16.png" },
    { name: "Googly Eyes", src: "assets/donuts/17.png" },
    { name: "Pink Mallows", src: "assets/donuts/18.png" },
    { name: "Cookies and Cream", src: "assets/donuts/19.png" },
    { name: "Vanilla Strawberry", src: "assets/donuts/20.png" },
  ];
  return (
    <div>
      <section className="px-4 py-16">
        <div className="h-auto flex justify-center items-center">
          <div className="max-w-9/10 md:max-w-8/10 lg:max-w-7/10 mx-auto ">
            <div className="classic space-y-8 md:space-y-16 lg:space-y-24">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="title text-center"
              >
                <h1 className="rubik-font text-5xl lg:text-6xl blue-text uppercase tracking-widest">
                  Classic Donuts
                </h1>
              </motion.div>
              <div className="classic-donuts">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
                  {classicDonuts.map((donut) => (
                    <motion.div
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.5 }}
                      className="card flex justify-center items-center"
                    >
                      <div className="group flex flex-col justify-center items-center text-center hover:text-[#354ca9] hover:scale-105 transition-all duration-500">
                        <h1 className="text-3xl lg:text-4xl rubik-font uppercase text-gray-700 group-hover:text-[#354ca9] duration-500 ">
                          {donut.name}
                        </h1>
                        <img
                          src={donut.src}
                          className="max-w-[260px] lg:max-w-[380px] rounded-full object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="premium space-y-8 md:space-y-16 lg:space-y-24 mt-8 md:mt-24 lg:mt-32">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="title text-center"
              >
                <h1 className="rubik-font text-5xl lg:text-6xl blue-text uppercase tracking-widest">
                  Premium Donuts
                </h1>
              </motion.div>
              <div className="premium-donuts">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
                  {premiumDonuts.map((donut) => (
                    <motion.div
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.5 }}
                      className="card flex justify-center items-center"
                    >
                      <div className="group flex flex-col justify-center items-center text-center hover:text-[#354ca9] hover:scale-105 transition-all duration-500">
                        <h1 className="text-3xl lg:text-4xl  rubik-font uppercase text-gray-700 group-hover:text-[#354ca9] duration-500 ">
                          {donut.name}
                        </h1>
                        <img
                          src={donut.src}
                          className="max-w-[260px] lg:max-w-[380px] rounded-full object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donut;
