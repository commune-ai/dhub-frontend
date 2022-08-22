import React, { ReactElement } from "react";
import CommunityLinks from "./CommunityLinks";
import HeadingStyle1 from "../../Headings/HeadingStyle1";
import CommunitySVG from "./CommunitySVG";

export default function Community(): ReactElement {
  const heading = "AI Community";
  const title = "An ecosystem of talent, positive culture & crazy ideas";
  const description1 =
    "Algovera’s community is full of interesting people from all backgrounds with a unified goal of building radically new ML businesses. Anyone can join the community and start adding value.";
  const description2 =
    "We believe the next Silicon Valley is going to be a virtual space. Our goal with Algoverse is to be that space for AI builder and entrepreneurs.";
  const action = (
    <a
      className="button-1"
      href="https://app.gather.town/app/6q5cie3Lb1W5RMwN/Algovera%20HQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      Explore Algoverse
    </a>
  );

  return (
    <div className="pb-12">
      <HeadingStyle1
        heading={heading}
        title={title}
        description1={description1}
        description2={description2}
        action={action}
      />
      <div className="pt-4">
        <CommunitySVG />
      </div>
      <CommunityLinks />
    </div>
  );
}
