import BannerSection from "@/components/banner/BannerSection";
import BlogSection from "@/components/blog/BlogSection";
import CategorySection from "@/components/category/CategorySection";
import CategorySection2 from "@/components/category/CategorySection2";
import CounterSection from "@/components/counter/CounterSection";
import CourseSection from "@/components/course/CourseSection";
import FooterCopyright from "@/components/footer/FooterCopyright";
import FooterSection from "@/components/footer/FooterSection";
import HeaderSection from "@/components/header/HeaderSection";
import PartnerSection from "@/components/partner/PartnerSection";
import PromoSection from "@/components/promo/PromoSection";
import TeamSection from "@/components/team/TeamSection";
import TestimonySection from "@/components/testimony/TestimonySection";
import VideoSection from "@/components/video/VideoSection";
import type { Metadata } from "next";
import AboutSection from "@/components/about/AboutSection";
import {
  BlogType,
  CourseType,
  PartnerLogoType,
  TeamType,
  TestimonialType,
} from "@/types";
import {
  getBlogData,
  getCourseData,
  getPartnerLogos,
  getTeamData,
  getTestimonyData,
} from "@/sanity/sanity.query";

export const metadata: Metadata = {
  title: "Oyster - Homepage One",
  description: "Developed By ReactTemplateBuilder",
};
export default async function Home() {
  const partnerLogos: PartnerLogoType[] = await getPartnerLogos();
  const testimonyData: TestimonialType[] = await getTestimonyData();
  const courseData: CourseType[] = await getCourseData();
  const teamData: TeamType[] = await getTeamData();
  const blogData: BlogType[] = await getBlogData();
  return (
    <main className="Oyster-home-1-main Oyster-layout">
      <HeaderSection />
      <BannerSection />
      <CounterSection />
      <CategorySection style="pb-0" />
      <AboutSection />
      <CategorySection2 />
      {courseData && <CourseSection showHeader courseData={courseData} />}
      {partnerLogos && <PartnerSection partnerData={partnerLogos} />}
      <VideoSection />
      {teamData && <TeamSection teamData={teamData} />}
      <PromoSection />
      {testimonyData && (
        <TestimonySection style="pb-0" testimonyData={testimonyData} />
      )}
      {blogData && <BlogSection showHeader endIndex={3} blogData={blogData} />}
      <FooterSection />
      <FooterCopyright />
    </main>
  );
}
