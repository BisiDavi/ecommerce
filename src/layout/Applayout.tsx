import Head from "next/head";
import Script from "next/script";
import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LayoutWrapper from "@/layout/LayoutWrapper";


interface Applayout {
  title: string;
}


export default function Applayout({ children, title }: PropsWithChildren<Applayout>) {
  return (
    <LayoutWrapper>
      <Script
        src="https://en.trustmate.io/api/widget/4420c1ed-e3a7-47c2-b6a2-2d7386a819da/script"
        strategy="afterInteractive"
      />
      <Script
        src="https://en.trustmate.io/api/widget/01739a85-4698-4d4c-90d5-876048fba847/script"
        strategy="afterInteractive"
      />
      <Head>
        <title>{title} | Sailfish e-commerce online store </title>
      </Head>
      <Header />
      <main className="w-full items-center flex flex-col">
        {children}
        <Footer />
      </main>
    </LayoutWrapper>
  );
}
