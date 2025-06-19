import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "3D Visualization Solutions - 3D Marketing for eCommerce | 3D Source",
  description: "Unlock the power of Photoreal 3D Marketing Technology with Metabox, Virtual Photography and unmatched 3D product configurators. Book your demo today.",
  keywords:
    "3D modeling services, 3D product configurators, 3D configurators, 3D visualizers, custom 3D models, photo realistic models, 3d animation, 3D spinners, 3D repository, virtual photography, rendering, virtual reality, photography systems, 3D for marketing, 3D ecosystem, Metaverse, Omniverse, Photoreal 3D, Best 3D provider, 3D Services, 3D Solutions, 3D Products, cloud 3d, game engine technology, 3D for business, 3D business solutions, 3D Source",

  other: {
    "msvalidate.01": "1D1F0B1DC644CDAC1AE6E1E378DB1184",
    copyright: "",
  },
};

export const viewport: Viewport = {
  themeColor: "#071a30",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
