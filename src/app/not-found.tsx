import React from "react";
import { Metadata } from "next";
import { OG_IMAGE, PAGE_DESCRIPTION, TITLE } from "@/app/utils/constants";
import { NotFound } from "@/app/components/pages/404";

export const metadata: Metadata = {
  title: "404 Not Found - " + TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: "404 Not Found - " + TITLE,
    description: PAGE_DESCRIPTION,
    images: OG_IMAGE,
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
