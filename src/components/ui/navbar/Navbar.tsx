"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "@/components/Logo";
import StudioLogo from "@/components/studio/logo/StudioLogo";
import BlogLogo from "@/components/blog/logo/BlogLogo";
import DarkModeButton from "@/components/ui/buttons/DarkModeButton";
import Social from "@/components/ui/icons/Social";

const navigation = [
  { name: "Portfolio", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default function Example() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-900">
      {pathname.startsWith("/studio") ? null : (
        <nav
          className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 bg-white dark:bg-slate-900 shadow-sm dark:shadow-md fixed z-10"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            {pathname.startsWith("/blog") ? (
              <Link href="/blog" className="flex gap-2 items-center">
                <span className="sr-only">Logo</span>
                <BlogLogo />
              </Link>
            ) : (
              <Link href="/" className="flex gap-2 items-center">
                <span className="sr-only">Logo</span>
                <Logo />
              </Link>
            )}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                aria-hidden="true"
              />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {navigation.map((nav) => {
              const isActive = pathname === nav.href;
              return (
                <Link
                  key={nav.name}
                  href={nav.href}
                  className={
                    isActive
                      ? `border-b-2 border-gray-500 dark:border-gray-300 dark:border-gray`
                      : `border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-500 pt-2`
                  }
                >
                  {nav.name}
                </Link>
              );
            })}
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
            <DarkModeButton />
            <Social />
          </div>
        </nav>
      )}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {pathname.startsWith("/blog") ? (
              <Link href="/blog" className="flex gap-2 items-center">
                <span className="sr-only">Logo</span>
                <BlogLogo />
              </Link>
            ) : (
              <Link href="/" className="flex gap-2 items-center">
                <span className="sr-only">Logo</span>
                <Logo />
              </Link>
            )}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((nav) => (
                  <Link
                    key={nav.name}
                    href={nav.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:dark:bg-gray-800 dark:hover:gray-gray-800 dark:text-gray-100"
                  >
                    {nav.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 flex justify-center gap-2">
                <DarkModeButton />
                <Social />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
