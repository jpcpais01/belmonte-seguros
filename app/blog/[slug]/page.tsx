import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PostCard, formatDate } from "@/components/blog/post-card";
import { posts, postsBySlug } from "@/content/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postsBySlug[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postsBySlug[slug];
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <article className="pt-28 sm:pt-32">
          {/* Header */}
          <div className="container-page">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-navy"
            >
              <ArrowLeft className="size-4" />
              Voltar ao blog
            </Link>

            <div className="mx-auto mt-6 max-w-3xl">
              <span className="inline-flex rounded-full bg-gold-tint px-3 py-1 text-xs font-semibold text-gold">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <User className="size-4" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {post.readingTime} de leitura
                </span>
              </div>
            </div>
          </div>

          {/* Cover */}
          <div className="container-page mt-8">
            <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-[1.5rem] shadow-lift">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56rem"
                className="object-cover"
              />
            </div>
          </div>

          {/* Body */}
          <div className="container-page mt-12">
            <div className="mx-auto max-w-2xl">
              {post.body.map((block, i) =>
                block.type === "h2" ? (
                  <h2
                    key={i}
                    className="mt-10 text-2xl text-navy sm:text-[1.7rem]"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <p
                    key={i}
                    className="mt-4 text-lg leading-relaxed text-ink-soft"
                  >
                    {block.text}
                  </p>
                )
              )}

              {/* CTA */}
              <div className="mt-12 rounded-[1.5rem] border border-gold/30 bg-gold-tint/40 p-7 text-center sm:p-9">
                <h3 className="text-2xl text-navy">
                  Quer aconselhamento à sua medida?
                </h3>
                <p className="mx-auto mt-2 max-w-md text-ink-soft">
                  Fale com a nossa equipa. A simulação é gratuita e sem
                  compromisso.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button asChild variant="primary" size="lg">
                    <Link href="/simulacao">Pedir Simulação</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          <section className="py-16 sm:py-20">
            <div className="container-page">
              <h2 className="text-2xl text-navy sm:text-3xl">Continuar a ler</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PostCard
                    key={p.slug}
                    post={p}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
