import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Applayout({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
