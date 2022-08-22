import React from "react";
import { TbTrack } from "react-icons/tb";
import { GiSandsOfTime } from "react-icons/gi";

export default function GetStarted() {
  return (
    <div className="space-y-10 sm:grid sm:grid-cols-4 sm:gap-x-16 sm:gap-y-10 sm:space-y-0 py-12 px-4 sm:px-6 md:px-8">
      <div className="communityLink col-span-2">
        <p className="font-bold">Get involved</p>
        <p className="description">Become early contributors to Algovera.</p>
      </div>
      <div className="communityLink">
        <div className="icon-primary">
          <TbTrack className="h-full w-full p-2" />
        </div>
        <p className="font-bold">Explore a Track</p>
        <p>See the many ways to start utilizing Algovera. </p>
        <a
          className="link-primary"
          href="https://docs.algovera.ai/docs/Tracks/Introduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tracks
        </a>
      </div>
      <div className="communityLink">
        <div className="icon-primary">
          <GiSandsOfTime className="h-full w-full p-2" />
        </div>
        <p className="font-bold">Join our waiting list</p>
        <p>Enterprise clients can get dedicated support</p>
        <a
          className="link-primary"
          href="https://airtable.com/shrFLIgEXaldTKve7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Waiting List
        </a>
      </div>
    </div>
  );
}
