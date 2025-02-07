import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col my-5">
      <Navbar />
      <div className="relative w-full">{children}</div>
      <Footer />
    </div>
  );
}

export default layout;