"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import Logos from "../../public/assets/Logos.png";

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};
const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-primary-background p-20">
      <motion.h1
        variants={textContainer}
        className="text-9xl text-center font-extrabold  text-[#ffffff05] "
      >
        About my self
      </motion.h1>
      <div className="flex gap-20   justify-between items-center ">
        <div className="max-lg:hidden ">
          <Image src={Logos} alt="hero" height={1000} />
        </div>
        <div className="border-l-2 border-white p-1 h-[600px]" />
        <div className="text-white text-start">
          <motion.h1 className="">A BIT ABOUT ME </motion.h1>
          <h3 className="text-3xl p-2 ">
            A Passionate Designer Who Loves to Design...
          </h3>
          <span className="text-[#868A9B] p-3">
            Hi, I’m Richard Brain and I am creative web designer, who dream
            making the world better place by creating captivating products.
          </span>
          <div />
          <span className="text-[#868A9B] p-3">
            Thousands of clients have procured exceptional results while working
            with me. Delivering work within time and budget which meets client’s
            requirements is our moto.
          </span>
          <div className=" mt-5 ml-5">
            <h6 className="font-bold text-lg p-1 ">birthday</h6>
            <h6 className="font-bold text-lg p-1">address</h6>
            <h6 className="font-bold text-lg p-1">phone</h6>
            <h6 className="font-bold text-lg p-1">language</h6>
            <h6 className="font-bold text-lg p-1">experience</h6>
            <h6 className="font-bold text-lg p-1">email</h6>
            <h6 className="font-bold text-lg p-1">skype</h6>
            <h6 className="font-bold text-lg p-1">freelancer</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
