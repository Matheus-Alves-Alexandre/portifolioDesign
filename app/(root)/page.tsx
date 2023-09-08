import About from "@/components/ui/About";
import Hero from "@/components/ui/Hero";
import MyServices from "@/components/ui/MyServices";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <MyServices />
    </main>
  );
}
