import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is MoneyMap?</AccordionTrigger>
        <AccordionContent>
          MoneyMap is a comprehensive finance management application designed to
          help you manage your finances with ease and efficiency.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How does MoneyMap handle data security?
        </AccordionTrigger>
        <AccordionContent>
          MoneyMap uses Clerk for secure user authentication, ensuring your data
          is protected with multi-factor authentication and robust security
          measures.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What technologies are used in MoneyMap?
        </AccordionTrigger>
        <AccordionContent>
          MoneyMap is built using Next.js, Shadcn/UI, Tanstack Query, Prisma
          ORM, PostgreSQL, Google Gemini LLM for AI suggestions, Streamlit,
          Pandas, and Matplotlib for visualizations, and Recharts for dynamic
          graphs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Can I track my expenses and income?</AccordionTrigger>
        <AccordionContent>
          Yes, you can manage and track your income and expenses easily with our
          Income/Expenses module using Prisma ORM and PostgreSQL.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Does MoneyMap provide personalized financial advice?
        </AccordionTrigger>
        <AccordionContent>
          Yes, MoneyMap provides personalized financial advice using Google
          Gemini LLM, analyzing your financial data to offer tailored
          suggestions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          Is MoneyMap accessible on mobile devices?
        </AccordionTrigger>
        <AccordionContent>
          Yes, MoneyMap is designed with responsive design principles, ensuring
          a seamless experience across both desktop and mobile devices.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function Faq() {
  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Need help?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <AccordionDemo />
        </div>
      </div>
    </section>
  );
}
