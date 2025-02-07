"use client";
import React from "react";
import Image from "next/image";
import HeroSectionSimpleCentred from "@/components/hero";
import { Faq } from "@/components/faq";

export default function HeroScrollDemo() {
  return (
    <>
      <div className="min-h-full w-full dark:bg-slate-900 bg-slate-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        <HeroSectionSimpleCentred />
        <div className="flex items-center justify-center flex-col pb-12 px-12">
          <Image
            src="/hero.png"
            width={1200}
            height={1200}
            alt="Logo"
            className="max-w-full object-contain"
          />
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Modern Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Manage Your Finances with Ease
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our finance management app offers a suite of powerful features
                  to help you take control of your money.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Authentication</h3>
                </div>
                <p className="text-muted-foreground">
                  Secure login and registration using Clerk auth, ensuring data
                  protection with multi-factor authentication.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Dashboard</h3>
                </div>
                <p className="text-muted-foreground">
                  Overview of financial status using Tanstack Query and
                  Shadcn/UI, providing a comprehensive summary of your finances.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Income/Expenses</h3>
                </div>
                <p className="text-muted-foreground">
                  Manage your financial entries with Prisma ORM and PostgreSQL,
                  ensuring accurate data tracking and retrieval.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Visualization</h3>
                </div>
                <p className="text-muted-foreground">
                  Dynamic graphs using Recharts and static visualizations with
                  Matplotlib to help you understand your financial data.
                </p>
              </div>
              <div className="grid gap-1 border-b">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">AI Suggestions</h3>
                </div>
                <p className="text-muted-foreground">
                  Personalized financial advice powered by Google Gemini LLM,
                  tailored to your financial behavior and goals.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Mobile App</h3>
                </div>
                <p className="text-muted-foreground">
                  Stay on top of your finances anytime, anywhere with our
                  user-friendly mobile app.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Faq />
      </div>
    </>
  );
}
