import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { posts } from "@/content/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogTeaser() {
  return (
    <section id="blog" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Blog & Notícias"
            title="Para decidir com clareza"
            intro="Artigos simples sobre seguros, saúde e poupança, para o ajudar a escolher melhor."
            className="max-w-2xl"
          />
          <Reveal className="hidden sm:block">
            <Button asChild variant="outline" size="md">
              <a href="#blog">Ver todos os artigos</a>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal as="article" key={post.slug} delay={i * 0.08}>
              <a
                href="#blog"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                {/* cover */}
                <div className="grain relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ivory-deep via-sand to-gold-tint">
                  <div className="mesh-warm absolute inset-0 opacity-70" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-navy shadow-soft backdrop-blur">
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
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center sm:hidden">
          <Button asChild variant="outline" size="md">
            <a href="#blog">Ver todos os artigos</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
