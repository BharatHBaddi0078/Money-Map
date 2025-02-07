import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { LinkPreview } from "./ui/link-preview";

export default function Footer() {
  return (
    <>
      <Separator orientation="horizontal" />
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            <div className="flex flex-col items-center text-center gap-6 not-prose">
              <Button>
                <LinkPreview
                  url="https://github.com/AJAmit17/MoneyMap"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  <p>Give a star at Github ⭐</p>
                </LinkPreview>{" "}
              </Button>
              <p>
                MoneyMap is an All in One and A simple Finance Management Application for every type of users.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 mb-4 md:mb-0">
              <Link href="/privacy-policy">
                <p className="hover:underline">Privacy Policy</p>
              </Link>
              <Link href="/terms-of-service">
                <p className="hover:underline">Terms of Service</p>
              </Link>
              <Link href="/cookie-policy">
                <p className="hover:underline">Cookie Policy</p>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 mt-6 flex flex-col md:flex-row md:justify-between md:items-center text-center">
            <div className="flex justify-center gap-4 mb-4 md:mb-0">
              <Button className="p-2" variant="outline" size="icon">
                <Github />
              </Button>
              <Button className="p-2" variant="outline" size="icon">
                <Twitter />
              </Button>
              <Button className="p-2" variant="outline" size="icon">
                <Facebook />
              </Button>
            </div>
            <p className="text-muted-foreground">
              ©{" "}
              <a href="https://github.com/AJAmit17" className="hover:underline">
                MoneyMap
              </a>
              . All rights reserved. 2024-present.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
