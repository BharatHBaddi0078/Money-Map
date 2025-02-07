"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ModeToggle } from "./modeToggle";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

const items = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "Transactions", link: "/transactions" },
  { label: "AI Assistant", link: "/ai-assistant" },
  { label: "Analyse", link: "/analysis" },
  { label: "Manage", link: "/manage" },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]" side="left">
            <div className="relative flex items-center justify-start text-2xl font-bold">
              <div className="p-2">
                <Image src={`/logo.png`} width={30} height={30} alt={"logo"} />
              </div>
              <Link href={"/"}>MoneyMap</Link>
            </div>
            <div className="flex flex-col gap-1 pt-4">
              {items.map((item) => (
                <NavbarItem
                  key={item.label}
                  link={item.link}
                  label={item.label}
                  clickCallback={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}

function DesktopNavbar() {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <div className="relative flex items-center justify-start text-2xl font-bold">
            <div className="p-2">
              <Image src={`/logo.png`} width={30} height={30} alt={"logo"} />
            </div>
            <Link href={"/"}>MoneyMap</Link>
          </div>
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}

function NavbarItem({
  link,
  label,
  clickCallback,
}: {
  link: string;
  label: string;
  clickCallback?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-foreground"
        )}
        onClick={() => {
          if (clickCallback) clickCallback();
        }}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block" />
      )}
    </div>
  );
}

export default Navbar;
