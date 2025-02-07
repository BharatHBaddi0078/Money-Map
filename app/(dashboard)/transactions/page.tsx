"use client";

import React, { useState } from "react"; 
import { Metadata } from "next"; 
import TransactionTable from "@/components/dashboard/transactionTable";
import { DateRangePicker } from "@/components/ui/dateRangePicker";
import { startOfMonth } from "date-fns";

function TransactionsPage() {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: startOfMonth(new Date()),
    to: new Date(),
  });
  return (
    <>
      <div className="border-b bg-card">
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
          <div>
            <p className="text-3xl font-bold">Transactions history</p>
          </div>
          <DateRangePicker
            initialDateFrom={dateRange.from}
            initialDateTo={dateRange.to}
            showCompare={false}
            onUpdate={(values) => {
              const { from, to } = values.range;
              // We update the date range only if both dates are set
              if (!from || !to) return;

              setDateRange({ from, to });
            }}
          />
        </div>
      </div>
      <div className="container mb-20">
        <TransactionTable from={dateRange.from} to={dateRange.to} />
      </div>
    </>
  );
}

export default TransactionsPage;