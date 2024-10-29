import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import AddressSection from "@/components/contact/AddressSection";
import ContactSection from "@/components/contact/ContactSection";
import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oyster - Contact",
  description: "Developed By ReactTemplateBuilder",
};

export default function Home() {
  return (
    <main className="Oyster-blog-main">
      <Layout>
        <BreadCrumbSection currentPage="Contact" headerText="Get In Touch" />
        <AddressSection />
        <ContactSection style="pt-0" />
      </Layout>
    </main>
  );
}
