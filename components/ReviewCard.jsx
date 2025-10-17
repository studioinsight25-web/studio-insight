import Link from "next/link";
import Image from "next/image";

export default function ReviewCard({ href, title, excerpt, img }) {
  return (
    <Link href={href} className="group block bg-white border border-ink/10 rounded-2xl overflow-hidden shadow-soft hover:-translate-y-0.5 transition">
      <div className="relative aspect-[16/9]">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-ink-soft mt-1">{excerpt}</p>
        <span className="inline-block mt-3 text-brand-dark">Lees review →</span>
      </div>
    </Link>
  );
}
