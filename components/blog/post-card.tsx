import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import type { Post } from "@/content/posts";

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function PostCard({
  post,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  post: Post;
  sizes?: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy shadow-soft backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {post.readingTime}
          </span>
        </div>
        <h3 className="mt-3 text-lg leading-snug text-navy transition-colors group-hover:text-ocean">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
          Ler artigo
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
