import Image from "next/image";

function subscribe(email: string) {
  fetch("api/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  }).then((response) => {
    if (response.ok) {
      alert("Thanks for subscribing!");
    } else {
      alert("Please enter a valid email address");
    }
  });
}

export default function Footer() {
  return (
    <footer className="p-4 bg-slate-50 sm:p-6 dark:bg-footer-dark">
      <div className="md:flex md:justify-between">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <a href="https://algovera.ai" className="flex items-center">
            <Image
              src="/algovera.svg"
              alt="logo for Algovera"
              width={135}
              height={45}
            />
          </a>
        </div>

        {/* Right Panel */}
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Docs
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://docs.algovera.ai/docs/Handbook/Introduction"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Handbook
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://docs.algovera.ai/blog"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="https://docs.algovera.ai/docs/Tracks/Introduction"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tracks
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Community
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://discord.gg/e65RuHSDS5"
                  className="hover:underline "
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://twitter.com/algoveraai"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC2A5iUpP6k52ZZmC8LFj1IA"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              More
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/AlgoveraAI/"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://algovera.substack.com/"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://www.algovera.ai/" className="hover:underline">
            Algovera, Inc
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
