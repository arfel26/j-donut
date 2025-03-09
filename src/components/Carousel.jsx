import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import "swiper/css/bundle";

function Carousel() {
  return (
    <div>
      <section className="px-4 py-16">
        <div className="h-full lg:h-[80vh] flex justify-center items-center">
          <div className="max-w-9/10 md:max-w-8/10 lg:max-w-7/10 mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div
                  className="h-[630px] md:h-[800px] lg:h-[700px] rounded-3xl bg-cover bg-center bg-no-repeat text-white"
                  style={{ backgroundImage: "url('assets/bg1.png')" }}
                >
                  <div className="flex justify-center flex-col items-center text-center h-full text-white px-8 md:px-16 lg:px-32 bg-black/65 rounded-3xl space-y-6 lg:space-y-4">
                    <motion.div
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      <h1 className="rubik-font text-6xl lg:text-8xl tracking-wider">
                        About <span className="orange-text">Just Donut</span>
                      </h1>
                      <h1 className="poppins-font text-xl lg:text-2xl tracking-wider">
                        At Just Donut, we keep things simple—freshly made,
                        delicious donuts that bring joy in every bite. We
                        believe that the best things in life are sweet, and
                        nothing beats the comfort of a perfectly crafted donut.
                      </h1>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="h-[630px] md:h-[800px] lg:h-[700px] rounded-3xl bg-cover bg-center bg-no-repeat text-white"
                  style={{ backgroundImage: "url('assets/bg2.png')" }}
                >
                  <div className="flex justify-center flex-col items-center text-center h-full text-white px-8 md:px-16 lg:px-32 bg-black/65 rounded-3xl space-y-6 lg:space-y-4">
                    <motion.div
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      <h1 className="rubik-font text-6xl lg:text-8xl tracking-wider orange-text">
                        Our Story
                      </h1>
                      <h1 className="poppins-font text-xl lg:text-2xl text-center tracking-wider">
                        Just Donut was born out of a passion for creating
                        mouthwatering treats that brighten your day. From
                        classic favorites to exciting new flavors, we make every
                        donut with care, using only the finest ingredients.
                      </h1>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
