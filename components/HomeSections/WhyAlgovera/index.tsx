import React, { ReactElement } from "react";

export default function WhyAlgovera(): ReactElement {
  return (
    <div className="pb-12 bg-secondary-light dark:bg-secondary-dark z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-base text-indigo-500 font-semibold tracking-wide uppercase">
            Why Algovera
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            A collaborative and user-centric approach to AI development
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center icon-primary bg-yellow-400">
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
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                  Ownership to Creators
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300 ">
                Creators get 100% of the ownership of what they create. We only
                charge a transaction fee if you decide to charge for your
                module.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center icon-primary bg-fuchsia-400">
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
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                  User Involvement
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300 ">
                Build with your users by leveraging crowdsourcing and
                incentivising tools from our web3 components.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center icon-primary bg-sky-400">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                  Build for Apps
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300 ">
                We focus on building for production level ML apps, so that your
                side project can become your business.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center icon-primary bg-emerald-400">
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
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                  Integrations Roadmap
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300 ">
                We are constantly adding new integrations, making Algovera more
                and more powerful.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
