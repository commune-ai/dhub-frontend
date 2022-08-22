import { ReactElement } from "react";
import Banner1 from "../../components/Banner/Banner1";
import SquadSection from "../../components/Squad/SquadSection";
import EventSection from "../../components/Event/EventSection";
import AlgoverseBannerImage from "../../components/Banner/Images/AlgoverseBannerImage";

function Algoverse(): ReactElement {
  const title = (
    <div>
      <h1>
        <span>Meet</span> AI Enthusiasts
      </h1>
      <h1>
        <span>Learn</span> From The Best
      </h1>
      <h1>
        <span>Collaborate</span> on Projects
      </h1>
    </div>
  );
  const subtitle =
    "Algoverse is the Schelling point for creating grassroots AI. Algoverse brings together talent from all areas into a shared space.";
  const button1 = (
    <a
      href="https://app.gather.town/app/6q5cie3Lb1W5RMwN/Algovera%20HQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      Algovera HQ
    </a>
  );
  const button2 = (
    <a
      href="https://algovera.notion.site/6de7d47890334b8389b3ded588dd65ee?v=929373418cfa4c13b7d882c3b128cff2"
      target="_blank"
      rel="noopener noreferrer"
    >
      Community Directory
    </a>
  );
  const image = <AlgoverseBannerImage />;
  return (
    <div className="space-y-40 mb-20">
      <Banner1
        title={title}
        subtitle={subtitle}
        button1={button1}
        button2={button2}
        image={image}
      />
      <SquadSection />
      <EventSection />
    </div>
  );
}

export default Algoverse;
