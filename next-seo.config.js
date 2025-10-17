/** @type {import('next-seo').DefaultSeoProps} */
const config = {
  titleTemplate: "%s | Studio Insight",
  defaultTitle: "Studio Insight – Diepgaande reviews voor ondernemers & creators",
  description: "Studio Insight biedt eerlijke, uitgebreide reviews van studio- en podcastmicrofoons, met praktische tips voor ondernemers en contentmakers.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.studioinsight.nl",
    siteName: "Studio Insight",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Insight – Microfoonreviews & Studio Tips"
      }
    ]
  },
  twitter: {
    cardType: "summary_large_image"
  }
};
export default config;
