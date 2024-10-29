import AuthSection from "@/components/auth/AuthSection";
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oyster - Sign Up",
  description: "Developed By ReactTemplateBuilder",
};

export default function Home() {
  return (
    <main className="Oyster-sign-up-main">
      <Layout>
        <BreadCrumbSection currentPage="Sign Up" />
        <AuthSection />
      </Layout>
    </main>
  );
}
