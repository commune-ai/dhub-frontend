import React, { ReactElement } from "react";
import HeadingStyle2 from "../../Headings/HeadingStyle2";
import DeveloperSVG from "./DeveloperSVG";

export default function index(): ReactElement {
  const heading = "Designed For Engineers";
  const title = "Build better ML application faster";
  const description =
    "We abstract away the complexities of fragmented technologies and expose the functionalities so that you can start building your application.";
  const action = (
    <a
      className="button-1"
      href="https://airtable.com/shrUUi1Hdnc2R94nh"
      target="_blank"
      rel="noopener noreferrer"
    >
      Apply for Alpha
    </a>
  );
  const point1 = {
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    description:
      "Start building within Algovera while we are still developing our product.",
    link: (
      <a
        className="ml-16 link-primary"
        href="https://docs.algovera.ai/docs/Handbook/Grants/Introduction"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started
      </a>
    ),
  };
  const point2 = {
    icon: (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    description:
      "We will support the most popular ML tools and plan to add more integrations",
    link: (
      <a
        className="ml-16 link-primary"
        href="https://algovera.notion.site/Integration-Roadmap-7e52039e6a084434a8fcafedcf4be6d1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore integrations
      </a>
    ),
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      <HeadingStyle2
        heading={heading}
        title={title}
        description={description}
        action={action}
        point1={point1}
        point2={point2}
      />
      <div className="w-full mt-8 sm:mt-0 px-4 sm:px-6 lg:px-8 ">
        <DeveloperSVG />
      </div>
    </div>
  );
}
