import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Hero/>
      <About/>
      <Services/>
      {/* Contact  */}
    </div>
  );
}
