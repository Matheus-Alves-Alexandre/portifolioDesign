import Image from "next/image";
import Link from "next/link";
import React from "react";
import home from "../../public/assets/home.png";

const Topbar = () => {
  return (
    <nav className="flex hidden-bar bg-primary-background p-5 justify-between ">
      <div>
        <Link href="/">
          <Image src={home} alt="logo" width={250} height={250} />
        </Link>
      </div>
      <div className="flex justify-center text-white gap-10 ">
        <a className="font-light text-xl hover:text-gray-400" href="#">
          Home
        </a>
        <a className="font-light  text-xl hover:text-gray-400" href="#">
          Services
        </a>
        <a className="font-light  text-xl hover:text-gray-400" href="#">
          Blog
        </a>
        <a className="font-light  text-xl hover:text-gray-400" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
