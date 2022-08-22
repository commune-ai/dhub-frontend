import { ReactElement } from "react";
import Banner1 from "../../components/Banner/Banner1";
import MarketplaceBannerImage from "../../components/Banner/Images/MarkeplaceBannerImage";
import AssetGrid from "../../components/Grid/AssetGrid";
import HeadingStyle1 from "../../components/Headings/HeadingStyle1";

function Marketplace(): ReactElement {
  const title = (
    <div>
      <h1>
        <span>Solve</span> A Problem
      </h1>
      <h1>
        <span>Build</span> An AI Solution
      </h1>
      <h1>
        <span>Earn</span> An Income
      </h1>
    </div>
  );
  const subtitle =
    "We want to help you build and monetize AI solutions. Algovera is working on tools to make it easier to build AI apps and to launch AI businesses.";
  const button1 = (
    <a
      href="https://discord.com/invite/e65RuHSDS5"
      target="_blank"
      rel="noopener noreferrer"
    >
      Join Us
    </a>
  );
  const button2 = (
    <a
      href="https://docs.algovera.ai/docs/Handbook/Vision,%20Mission%20and%20Values/Vision"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn More
    </a>
  );
  const image = <MarketplaceBannerImage />;

  const heading = "AI Assets";
  const headingTitle = "Start with open source data & models";
  const description1 =
    "Algovera Marketplace will aggregate assets from multiple sources and make them available to you easily. You can use these assets to build your own AI solutions.";
  const description2 =
    "Our marketplace is still in development and we recommend checking out places like Ocean Marketplace & HuggingFace in the meantime.";

  return (
    <div className="space-y-52">
      <Banner1
        title={title}
        subtitle={subtitle}
        button1={button1}
        button2={button2}
        image={image}
      />
      <div className="space-y-10">
        <HeadingStyle1
          heading={heading}
          title={headingTitle}
          description1={description1}
          description2={description2}
        />
        <div className="space-y-5">
          <div className="flex justify-between">
            <h2 className="section-heading pl-3">Data & Algorithms</h2>
            <a
              className="justify-self-end underline underline-offset-4 decoration-primary pr-8"
              href="https://algovera.notion.site/Algovera-Marketplace-26f20143ab0c467d82e65aa5cb1f7e11"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore All
            </a>
          </div>
          <AssetGrid />
        </div>
      </div>
    </div>
  );
}
export default Marketplace;
