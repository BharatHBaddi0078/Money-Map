import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";
import Link from "next/link";

export default function HeroSectionSimpleCentred() {
  return (
    <>
      {/* Hero */}
      <div>
        <div className="container py-14 lg:py-18">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
              href="#"
            >
              Mobile Application - Coming Soon
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              MoneyMap
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-xl text-muted-foreground">
              An all in One Finanace Management Web Application, which is handy
              and easy to use.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <Button size={"lg"}>
              <Link href={`/dashboard`}>Get Started</Link>
            </Button>
            <Button size={"lg"} variant={"outline"}>
              <LinkPreview url="https://github.com/AJAmit17/MoneyMap">
                Learn more
              </LinkPreview>
            </Button>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
