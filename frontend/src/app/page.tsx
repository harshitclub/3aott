import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import Hero from "@/components/local/homepage/hero/Hero";
import HomeVideos from "@/components/local/homepage/homeVideos/HomeVideos";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeVideos />
      </main>
      <Footer />
    </>
  );
}
