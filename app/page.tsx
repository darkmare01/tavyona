import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeBusinesses from "@/components/home/HomeBusinesses";
import HomeWhy from "@/components/home/HomeWhy";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";
import HomeShowcase from "@/components/home/HomeShowcase";
import Footer from "@/components/home/Footer";
import HomeCTA from "@/components/home/HomeCTA";



export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeBusinesses />
      <HomeAbout />
      <HomeWhy />
      <HomeHowItWorks />
      <HomeShowcase />
      <HomeCTA />

    </>
  );
}
