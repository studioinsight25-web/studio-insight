import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import ReviewCard from "../components/ReviewCard";

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none bg-gradient-to-br from-brand-light via-white to-skysoft" />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Studio Insight
              </h1>
              <p className="mt-4 text-lg text-ink-soft">
                Diepgaande reviews voor ondernemers & creators. Praktisch, eerlijk en
                gericht op prestaties in échte studio- en podcast-workflows.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/reviews" className="inline-block bg-brand text-white px-6 py-3 rounded-2xl shadow-soft hover:bg-brand-dark transition">
                  Lees reviews
                </Link>
                <Link href="#about" className="inline-block px-6 py-3 rounded-2xl border border-ink/10 hover:bg-brand-light transition">
                  Over Studio Insight
                </Link>
              </div>
            </div>
            <div className="justify-self-center">
              <Image src="/hero-mic.png" alt="Microfoon" width={520} height={420} className="rounded-2xl shadow-soft" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Laatste reviews</h2>
          <Link href="/reviews" className="text-ink-soft hover:underline">Alles bekijken →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <ReviewCard
            href="/reviews/shure-mv7"
            title="Shure MV7"
            excerpt="Hybride USB/XLR met professioneel geluid en groot gebruiksgemak."
            img="/images/shure-mv7.jpg"
          />
          <ReviewCard
            href="/reviews/rode-podmic"
            title="RØDE PodMic"
            excerpt="Betaalbare broadcast sound, robuust en gericht op spraak."
            img="/images/rode-podmic.jpg"
          />
          <ReviewCard
            href="/reviews/epos-b20"
            title="EPOS B20"
            excerpt="USB-condensator met meerdere patronen en frisse toon."
            img="/images/epos-b20.jpg"
          />
        </div>
      </section>

      <section id="about" className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl border border-ink/10 p-8 shadow-soft">
          <h3 className="text-xl font-semibold">Waarom Studio Insight?</h3>
          <p className="mt-3 text-ink-soft">
            Ik test microfoons zoals ondernemers en makers ze écht gebruiken: in
            thuiskantoren, kleine studio's en onderweg. Geen marketingpraat — wel
            metingen, vergelijking en duidelijke audiofragmenten (die je later kunt toevoegen).
          </p>
        </div>
      </section>
    </>
  );
}
