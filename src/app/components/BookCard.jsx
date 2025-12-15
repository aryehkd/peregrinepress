import Image from "next/image";
import Link from "next/link";

export default function BookCard({ title, description, imageUrl, href }) {
  return (
    <article className="group w-full max-w-[260px] overflow-hidden rounded-xl border border-black/10 bg-[#fbf8ea] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative aspect-[5/7] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 90vw, 260px"
          className="object-contain p-3 transition group-hover:scale-[1.01]"
        />
      </div>

      <div className="flex min-h-[140px] flex-col p-4">
        <h3 className="font-serif text-lg font-semibold leading-snug text-black">
          {title}
        </h3>

        {/* If description is actually author, consider renaming prop to author */}
        <p className="mt-1 font-serif text-sm text-black/70 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto pt-4">
          <Link
            href={href}
            className="inline-flex items-center font-serif text-sm font-semibold text-[#636b30] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#636b30]/60 focus-visible:ring-offset-2"
          >
            Learn more <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}