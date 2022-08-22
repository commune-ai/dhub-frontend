/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import RightButtons from "./RightButtons";
import ThemeIcon from "./ThemeIcon";

const navigation = [
  { name: "Docs", href: "https://docs.algovera.ai/", current: false },
  { name: "Algoverse", href: "algoverse", current: false },
  { name: "Earn", href: "earn", current: false },
  { name: "Marketplace", href: "marketplace", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="z-20 dark:bg-secondary-dark/30 bg-secondary-light/30 backdrop-blur-md sticky top-0 border-b border-slate-200 dark:border-slate-600"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile Menu Icon*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md transition text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                  <Link href="/">
                    <Image
                      className="block lg:hidden h-8 w-auto"
                      src="/algovera.svg"
                      alt="Logo for Algovera"
                      width={135}
                      height={45}
                    />
                  </Link>
                </div>

                {/* Menubar */}
                <div className="hidden sm:block sm:mx-auto sm:my-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) =>
                      item.name !== "Docs" ? (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-900 transition dark:hover:bg-tertiary hover:bg-slate-300/30  dark:hover:text-slate-300 dark:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-900 transition dark:hover:bg-tertiary hover:bg-slate-300/30  dark:hover:text-slate-300 dark:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Theme Icon | Discord */}
              <RightButtons />
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 mx-auto">
              {navigation.map((item) =>
                item.name !== "Docs" ? (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white text-center"
                        : "text-gray-900 transition dark:hover:bg-tertiary hover:bg-slate-300/30  dark:hover:text-slate-300 dark:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium text-center"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ) : (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white text-center"
                        : "text-gray-900 transition dark:hover:bg-tertiary hover:bg-slate-300/30  dark:hover:text-slate-300 dark:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium text-center"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              )}
              <div className="flex justify-center align-center py-4">
                <Disclosure.Button
                  key="discord"
                  as="a"
                  href="https://discord.com/invite/e65RuHSDS5"
                  target="_blank"
                  className="font-medium text-center block px-6 py-4 transition dark:hover:bg-tertiary hover:bg-slate-300/30  dark:hover:text-slate-300 dark:text-white "
                >
                  Join Discord
                </Disclosure.Button>
                <div className="flex justify-center align-center px-6 py-4 border-l border-gray-500 ">
                  <ThemeIcon />
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
