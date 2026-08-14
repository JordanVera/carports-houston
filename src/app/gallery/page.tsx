import type { Metadata } from "next";

import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our portfolio of custom metal structures, carports, and commercial buildings built across Houston.",
};

export default function GalleryPage() {
  return <GalleryGrid />;
}
