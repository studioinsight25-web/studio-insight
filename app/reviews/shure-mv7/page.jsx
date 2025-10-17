import Image from "next/image";
import { NextSeo } from "next-seo";

export default function ShureMV7Review() {
  return (
    <>
      <NextSeo
        title="Shure MV7 Review (2025)"
        description="Uitgebreide test van de Shure MV7 – audio, gebruiksgemak en prestaties voor ondernemers en podcasters."
        openGraph={{ type: "article" }}
      />
      <article className="max-w-3xl mx-auto py-12 px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Shure MV7 Review (2025)</h1>
          <p className="text-ink-soft mt-2">
            De Shure MV7 is een hybride USB/XLR-microfoon die studiokwaliteit combineert met super eenvoudig gebruik.
          </p>
        </header>

        <div className="rounded-2xl overflow-hidden mb-6">
          <Image src="/images/shure-mv7.jpg" alt="Shure MV7 microfoon" width={1200} height={630} />
        </div>

        <section className="prose max-w-none">
          <h2>Eerste indruk</h2>
          <p>
            De aluminium behuizing voelt premium, de montage is solide, en de hybride aansluiting
            maakt het een veilige keuze als je later wilt doorgroeien naar XLR.
          </p>

          <h2>Geluidskarakter</h2>
          <ul>
            <li>Neigt naar een warme, radiovriendelijke toon</li>
            <li>Plopgevoeligheid goed onder controle met de meegeleverde windkap</li>
            <li>USB-voorversterker schoon genoeg voor de meeste stemmen</li>
          </ul>

          <h2>Plus- en minpunten</h2>
          <ul>
            <li><strong>+</strong> Hybride USB/XLR, zeer flexibel</li>
            <li><strong>+</strong> Degelijke bouwkwaliteit</li>
            <li><strong>–</strong> USB-kant mist de diepte van top-XLR-preamps</li>
          </ul>
        </section>

        <a
          href="#"
          className="inline-block bg-brand text-white px-6 py-3 rounded-2xl mt-8 shadow-soft hover:bg-brand-dark transition"
        >
          ➜ Bekijk prijs & beschikbaarheid
        </a>
      </article>
    </>
  );
}
