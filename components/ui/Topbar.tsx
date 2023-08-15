import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <nav className="flex bg-primary-background p-5">
      <Link href="/">
        <Image src={""} alt="logo" />
      </Link>
    </nav>
  );
};

export default Topbar;
