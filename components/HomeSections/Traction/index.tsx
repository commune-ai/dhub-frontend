import React, { ReactElement } from "react";

export default function Traction(): ReactElement {
  return (
    <div className="pb-12 relative">
      <div className="text-left px-4 sm:px-6 lg:px-8">
        <h2 className="text-base text-indigo-500 font-semibold tracking-wide uppercase">
          AI Commons
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Creating universal access to the potential of AI
        </p>
        <div className="flex flex-wrap sm:flex-nowrap">
          <div>
            <p className="mt-4 max-w-lg description">
              Our goal by empowering creators to build their own AI business is
              for everyone to gain the benefits of AI. We believe if people had
              the ability and resources to work on what they are passionate
              about, they will work on thing that are prosperous to the world.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <p className="text-2xl leading-6 font-medium text-gray-900 dark:text-gray-100">
                Talent Network
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500 dark:text-gray-300 ">
              We want to create the largest network of AI talent.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <p className="text-2xl leading-6 font-medium text-gray-900 dark:text-gray-100">
                Data Commons
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500 dark:text-gray-300 ">
              We will have open source data anyone can access.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <p className="text-2xl leading-6 font-medium text-gray-900 dark:text-gray-100">
                Shared Infrastructure
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500 dark:text-gray-300 ">
              Reduce the cost of infrastructure by sharing resources.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <p className="text-2xl leading-6 font-medium text-gray-900 dark:text-gray-100">
                Access to Capital
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500 dark:text-gray-300 ">
              Good ideas should get the capital needed to develop and scale.
            </dd>
          </div>
        </dl>
      </div>
      <div className="bg-primary w-full h-fit"></div>
    </div>
  );
}
