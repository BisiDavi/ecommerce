/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Applayout from "@/layout/Applayout";
import ContactBanner from "@/components/Banner/ContactBanner";
import ContactusCard from "@/components/Contactus/ContactusCard";

const DynamicContactMap = dynamic(() => import("@/components/Contactus/ContactMap"));
const DynamicContactForm = dynamic(() => import("@/components/Form/ContactForm"));
const DynamicPartnerOutlet = dynamic(
  () => import("@/components/Contactus/PartnerOutlet")
);

export default function ContactUs() {
  return (
    <Applayout title="Contact us">
      <ContactBanner />
      <ContactusCard />
      <DynamicPartnerOutlet />
      <div className="container-fluid px-0" id="map">
        <div className="row g-0">
          <DynamicContactMap />
          <DynamicContactForm />
        </div>
      </div>
    </Applayout>
  );
}
