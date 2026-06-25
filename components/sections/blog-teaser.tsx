import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/blog/post-card";
import { posts } from "@/content/posts";

export function BlogTeaser() {
  const featured = posts.slice(0, 3);

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
              <Link href="/blog">Ver todos os artigos</Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal as="article" key={post.slug} delay={i * 0.08}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center sm:hidden">
          <Button asChild variant="outline" size="md">
            <Link href="/blog">Ver todos os artigos</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
