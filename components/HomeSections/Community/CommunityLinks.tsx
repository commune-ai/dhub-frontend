import React, { ReactElement } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";

function CommunityLinks(): ReactElement {
  return (
    <div className="space-y-10 sm:grid sm:grid-cols-3 sm:gap-x-32 sm:gap-y-10 sm:space-y-0 py-12 px-4 sm:px-6 md:px-8">
      <div className="communityLink">
        <div className="icon-primary">
          <AiOutlineDollarCircle className="h-full w-full p-2" />
        </div>
        <p>We give micro grants to people develop their AI side-project</p>
        <a
          className="link-primary"
          href="https://twitter.com/AlgoveraAI/status/1557353893260140544?s=20&t=aYAZw0lBWIObDVGrG0J8Fg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Micro grants
        </a>
      </div>
      <div className="communityLink">
        <div className="icon-primary">
          <MdWork className="h-full w-full p-2" />
        </div>
        <p>We provide freelance work opportunities for data scienitists </p>
        <a
          className="link-primary"
          href="https://airtable.com/shrM89bWBQ5I8FIfa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freelance
        </a>
      </div>
      <div className="communityLink">
        <div className="icon-primary">
          <FaCodeBranch className="h-full w-full p-2" />
        </div>
        <p>We host hackathons around data & machine learning</p>
        <a
          className="link-primary"
          href="https://www.youtube.com/watch?v=O05nH1kzgWE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hackathon
        </a>
      </div>
    </div>
  );
}

export default CommunityLinks;
