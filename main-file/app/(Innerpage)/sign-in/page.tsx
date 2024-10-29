import AuthSection from "@/components/auth/AuthSection";
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oyster - Sign In",
  description: "Developed By ReactTemplateBuilder",
};

export default function Home() {
  return (
    <main className="Oyster-sign-up-main">
      <Layout>
        <BreadCrumbSection currentPage="Sign In" />
        <AuthSection login />
      </Layout>
    </main>
  );
}
