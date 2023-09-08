"use client";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

import hero from "../../public/assets/hero.png";
import Image from "next/image";
const Hero = () => {
  const count = useMotionValue(0);
  const count_2 = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const rounded_2 = useTransform(count_2, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 15, { duration: 3 });
    const controls_2 = animate(count_2, 20, { duration: 3 });

    return controls.stop, controls_2.stop;
  }, []);
  return (
    <motion.section className="relative w-full h-screen mx-auto bg-primary-background p-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex justify-between"
      >
        <div className="flex-row p-32  max-lg:p-0 ">
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="border p-4 mt-5 text-white"
          >
            Dowload my CV
          </motion.button>
        </div>
        <div className="max-lg:hidden">
          <Image src={hero} alt="hero" height={961} width={500} />
        </div>
      </motion.div>
      <div className="bg-[#181A21] w-full rounded-md ">
        <div className=" flex p-10 justify-center gap-60">
          <div className="text-white justify-center items-center gap-10">
            <motion.h1 className="p-2 text-center text-5xl font-thin">
              {rounded}
            </motion.h1>
            <h2 className="p-2 text-center text-lg font-bold">Projects</h2>
          </div>
          <div className="text-white justify-center items-center gap-10">
            <motion.h1 className="p-2 text-center text-5xl font-thin">
              {rounded_2}
            </motion.h1>
            <h2 className="p-2 text-center text-lg font-bold">Projects</h2>
          </div>
          <div className="text-white justify-center items-center gap-10">
            <h1 className="p-2 text-center text-5xl font-thin">15+</h1>
            <h2 className="p-2 text-center text-lg font-bold">Projects</h2>
          </div>
          <div className="text-white justify-center items-center gap-10">
            <h1 className="p-2 text-center text-5xl font-thin">15+</h1>
            <h2 className="p-2 text-center text-lg font-bold">Projects</h2>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
