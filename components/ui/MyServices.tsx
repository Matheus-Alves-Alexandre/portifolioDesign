"use client";
import Image from "next/image";
import React from "react";

import matheus from "../../public/assets/matheus.png";

const MyServices = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-[#181A21] p-20">
      <h1 className="text-9xl  font-extrabold  text-[#ffffff05] ">
        My Services
        <h2 className="text-2xl font-semibold text-white -mt-10 ml-10">
          My Sevices
        </h2>
        <h2 className="text-xl font-semibold text-white  ml-10">
          SERVICES THAT I PROVIDE
        </h2>
      </h1>
      <div className=" grid grid-cols-3 mt-20  gap-10">
        <div className="bg-white w-[400px] h-[400px] rounded-2xl">
          <h1 className="text-right text-6xl p-6 ">01</h1>
          <div className=" p-6">
            <Image src={matheus} alt="menu" width={80} />
            <h2 className="text-xl font-semibold p-2">web design</h2>
            <span className="text-base font-light p-2">
              We analyse your website’s structure, internal architecture & other
              key elements that are weighted.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
