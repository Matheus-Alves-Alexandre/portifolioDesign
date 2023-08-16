import React from "react";

import hero from "../../public/assets/hero.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-primary-background">
      <div className="flex justify-between">
        <div className="flex-row p-36 ">
          <h1 className="text-white  font-extrabold text-7xl p-3">
            Hi! I Am <br /> Matheus Alexandre
          </h1>
          <h3 className="text-white  font-semibold text-3xl p-3">
            Im a Web Designer and Developer{" "}
          </h3>
          <h3 className="text-gray-600 font-light text-2xl p-3">
            Hi, I am creative web designer, who dream making the world better
            place by creating captivating products.
          </h3>
          <button className="border p-4 mt-5 text-white">Dowload my CV</button>
        </div>
     {/*    <div className="hidden-bar">
          <Image src={hero} alt="hero" height={961} width={500} />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
