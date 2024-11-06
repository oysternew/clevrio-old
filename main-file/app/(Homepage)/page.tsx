import React from "react";
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
  IntroductionTradingType,
} from "@/types";
import {
  getBlogData,
  getCourseData,
  getPartnerLogos,
  getTeamData,
  getTestimonyData,
  introductionTrading,
} from "@/sanity/sanity.query";
import IntroductionSection from "@/components/introduction/IntroductionSection";
import DivAnimateY from "@/components/utils/DivAnimateY";
import DivAnimateX from "@/components/utils/DivAnimateX";

export const metadata: Metadata = {
  title: "Clevrio - Homepage One",
  description: "Developed By ReactTemplateBuilder",
};

export const revalidate = 3600;

export default async function Home() {
  const partnerLogos: PartnerLogoType[] = await getPartnerLogos();
  const testimonyData: TestimonialType[] = await getTestimonyData();
  const courseData: CourseType[] = await getCourseData();
  const teamData: TeamType[] = await getTeamData();
  const blogData: BlogType[] = await getBlogData();
  const introductionData: IntroductionTradingType[] =
    await introductionTrading();

  // Define the desired order of IDs (replace these with actual IDs from your data)
  const orderedIds = [
    "d058d5a8-17e1-423b-8b99-133386ee45c3",
    "df845a39-45b2-4519-9987-b13ee75f78fc",
    "4e4a1824-cb73-4611-93f1-17e084a41a81",
    "8af0f251-e8d3-40a5-b8f3-92a647f385c3",
    "be389bf7-c539-4b93-bc1a-89e48ebe0714",
    "b362070b-fc62-405b-ba79-84ffaf40f72d",
    "77d80f18-0e1e-47e9-a656-b24c4f1226d4",
  ];

  // Create a mapping of introductionData by ID for easy access
  const dataById = Object.fromEntries(
    introductionData.map((data) => [data._id, data])
  );

  return (
    <main className="Clevrio-home-1-main Clevrio-layout">
      <HeaderSection />
      <BannerSection />
      <CounterSection />
      <div className=" pozadina text-center">
        Combined volume of the FX and CFD markets surpasses US$5 trillion daily
      </div>
      {/*<CategorySection style="pb-0" />
      <AboutSection />
      <CategorySection2 />
      {courseData && <CourseSection showHeader courseData={courseData} />}
      {partnerLogos && <PartnerSection partnerData={partnerLogos} />}
      <VideoSection />
      {teamData && <TeamSection teamData={teamData} />}
      <PromoSection />
      {testimonyData && (
        <TestimonySection style="pb-0" testimonyData={testimonyData} />
      )}*/}
      {orderedIds.map((id, index) => {
        const data = dataById[id];
        return (
          data &&
          (index % 2 === 0 ? (
            <div id={data._id} className="section-offset">
              <DivAnimateY className="container" key={data._id}>
                <IntroductionSection introductionData={[data]} />
              </DivAnimateY>
            </div>
          ) : (
            <div id={data._id} className="section-offset">
              <DivAnimateX className="container" key={data._id}>
                <IntroductionSection introductionData={[data]} />
              </DivAnimateX>
            </div>
          ))
        );
      })}

      {/*{blogData && <BlogSection showHeader endIndex={3} blogData={blogData} />}*/}
      <FooterSection />
      <FooterCopyright />
    </main>
  );
}
