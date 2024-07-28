import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowWeBuild from "@/components/HowWeBuild";
import Options from "@/components/Options";
import UsedBy from "@/components/UsedBy";
import Vectors from "@/components/Vectors";
import Why from "@/components/Why";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="margin">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <Why></Why>
      <UsedBy></UsedBy>
      <HowWeBuild></HowWeBuild>
      <Options></Options>
      <Footer></Footer>
      <Vectors></Vectors>
    </main>
  );
}
