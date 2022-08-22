import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function EventList() {
  let [categories] = useState({
    "Community Events": [
      {
        id: 1,
        title: "Review Party #4",
        date: "15th August, 2022",
        time: "13:00(UTC)",
        status: "Finished",
        description:
          "We'll be hosting our first Algovera Grants Review Party where we can have an informal chat about some of the project submissions. If you find some time, read over some of the proposals beforehand. If you don't get a chance, that's cool too! Pop along anyway, and listen to others share their thoughts.",
        link: "https://discord.gg/YfPBZv2C?event=1007359044765360349",
      },
    ],
    "Town Halls": [
      {
        id: 1,
        title: "Round #4",
        date: "19th August, 2022",
        time: "14:30(UTC)",
        status: "upcoming",
        description:
          "Round #4 proposal leads will give a short presentation to the community. This is a chance for you to ask questions on the proposals. ",
        link: "https://discord.gg/YfPBZv2C?event=1008001436933697658",
      },
    ],
    Hackathons: [
      {
        id: 1,
        title: "AlgoLYNXathon",
        date: "11th of March, 2022",
        time: "25th of March, 2022",
        status: "finished",
        description:
          "The aim of this hack is to collaborate and learn together, and form an early community of people who are interested in using data science and AI to analyse biometric data with web3 tools.",
        link: "https://www.youtube.com/watch?v=O05nH1kzgWE",
      },
    ],
  });

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-secondary-light drop-shadow-lg dark:bg-tertiary">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-indigo-500",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-indigo-200 hover:bg-white/[0.12] hover:text-indigo-500 dark:hover:text-white transition"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl drop-shadow-xl  p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul className="grid sm:grid-cols-3 gap-3">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100  dark:hover:bg-white/[0.12] bg-secondary-light dark:bg-tertiary transition"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.time}</li>
                      <li>&middot;</li>
                      <li className="capitalize">{post.status}</li>
                    </ul>

                    <p>{post.description || ""}</p>
                    <a
                      href={post.link}
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
