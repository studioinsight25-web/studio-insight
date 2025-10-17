import "./globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Studio Insight",
  description: "Diepgaande reviews voor ondernemers & creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className="bg-white text-ink">
        <DefaultSeo {...SEO} />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
