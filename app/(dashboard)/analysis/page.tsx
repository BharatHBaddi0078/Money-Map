import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "MoneyMap | Finance Analysis",
  description: "",
};

const Analysis = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 min-h-full">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center p-4">
          Finance Analysis
          <p className=" text-gray-600 text-sm">
            NOTE: Please Export your Transaction csv file from{" "}
            <Link className="text-blue-700" href={`/transactions`}>
              Transaction
            </Link>{" "}
            page and Upload it here
          </p>
        </h1>
        <div className="relative pb-[100%] rounded-lg">
          <iframe
            title="MoneyMap Analysis App"
            src="https://moneymap.streamlit.app/?embed=true"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
            style={{ borderRadius: "inherit" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
