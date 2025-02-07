import prisma from "@/lib/prisma";

import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const transactions = await prisma.transaction.findMany({
    where: {
      userId: user.id,
    },
  });

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  return new NextResponse(
    JSON.stringify({ incomeTransactions, expenseTransactions }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
