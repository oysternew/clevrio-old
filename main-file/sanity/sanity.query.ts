import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPartnerLogos() {
  return client.fetch(
    groq`*[_type == "partner_logos"]{
      img {alt, "image": asset->url},
    }`
  );
}
export async function getTestimonyData() {
  return client.fetch(
    groq`*[_type == "testimony_data"]{
      _id,
      img {alt, "image": asset->url},
      name,
      company,
      testimony,
    }`
  );
}
export async function getCourseData() {
  return client.fetch(
    groq`*[_type == "course_data"]{
      _id,
      img {alt, "image": asset->url},
      category,
      title,
      "slug": slug.current,
      course,
      duration,
      fee,
    }`
  );
}
export async function getTeamData() {
  return client.fetch(
    groq`*[_type == "team_data"]{
      _id,
      img {alt, "image": asset->url},
      socials[],
      name,
      "slug": slug.current,
      role,
      course,
      students,
    }`
  );
}
export async function getPricingData() {
  return client.fetch(
    groq`*[_type == "pricing_data"]{
      _id,
      plan,
      price,
      features[],
    }`
  );
}
export async function getFaqData() {
  return client.fetch(
    groq`*[_type == "faq_data"]{
      _id,
      question,
      answer
    }`
  );
}
export async function getBlogData() {
  return client.fetch(
    groq`*[_type == "blog_data"]{
      _id,
      img {alt, "image": asset->url},
      date,
      category,
      title,
      "slug": slug.current,
    }`
  );
}
