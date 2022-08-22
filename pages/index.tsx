import type { NextPage } from "next";
import WhyAlgovera from "../components/HomeSections/WhyAlgovera";
import HeroDesktop from "../components/HomeSections/HeroSection/HeroDesktop";
import HeroMobile from "../components/HomeSections/HeroSection/HeroMobile";
import EndProduct from "../components/HomeSections/EndProduct";
import Community from "../components/HomeSections/Community";
import DeveloperUX from "../components/HomeSections/DeveloperUX";
import Traction from "../components/HomeSections/Traction";
import GetStarted from "../components/HomeSections/GetStarted";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <HeroMobile />
        <HeroDesktop />
        <section className="flex flex-col space-y-20 sm:space-y-52">
          <EndProduct />
          <DeveloperUX />
          <Community />
          <WhyAlgovera />
          <Traction />
          <GetStarted />
        </section>
      </main>
    </div>
  );
};

export default Home;
