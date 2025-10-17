import Link from "next/link";
import { NextSeo } from "next-seo";

const reviews = [
  { slug: "shure-mv7", title: "Shure MV7", excerpt: "Hybride USB/XLR met professioneel geluid.", img: "/images/shure-mv7.jpg" },
  { slug: "rode-podmic", title: "RØDE PodMic", excerpt: "Broadcast sound voor een scherpe prijs.", img: "/images/rode-podmic.jpg" },
  { slug: "epos-b20", title: "EPOS B20", excerpt: "USB-condensator, helder en veelzijdig.", img: "/images/epos-b20.jpg" },
];

export default function ReviewsIndex() {
  return (
    <>
      <NextSeo title="Reviews" />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Alle reviews</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(r => (
            <Link key={r.slug} href={`/reviews/${r.slug}`} className="block border border-ink/10 rounded-2xl p-5 hover:shadow-soft transition bg-white">
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-brand-light/60 mb-4">
                {/* In productie: gebruik next/image met echte assets */}
              </div>
              <h2 className="text-xl font-semibold">{r.title}</h2>
              <p className="text-ink-soft mt-1">{r.excerpt}</p>
              <span className="inline-block mt-3 text-brand-dark">Lees review →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
