import React from "react";

function Pastry() {
  const pastries = [
    { name: "Croissant", src: "/pastry/1.png" },
    { name: "Macaron", src: "/pastry/2.png" },
    { name: "Cookies", src: "/pastry/3.png" },
  ];
  return (
    <div>
      <section className="my-22 flex justify-center">
        <div className="max-w-screen-2xl px-20 space-y-24">
          <div className="classic space-y-24">
            <div className="title text-center">
              <h1 className="rubik-font text-6xl blue-text uppercase tracking-widest">
                Pastry
              </h1>
            </div>
            <div className="classic-donuts">
              <div className="grid grid-cols-4 gap-16">
                {pastries.map((pastry) => (
                  <div className="card flex justify-center items-center">
                    <div className="group flex flex-col justify-center items-center text-center hover:text-[#354ca9] hover:scale-105 transition-all duration-500">
                      <h1 className="text-4xl rubik-font uppercase text-gray-700 group-hover:text-[#354ca9] duration-500 ">
                        {pastry.name}
                      </h1>
                      <img
                        src={pastry.src}
                        className="w-[300px] object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pastry;
