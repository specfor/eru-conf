import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Guidelines from "@/components/Guidelines";
import Awards from "@/components/Awards";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Timeline />
        <Guidelines />
        <Awards />
        <Team />
      </main>
      <Footer />
    </>
  );
}
