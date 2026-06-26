import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/motion/reveal";
import { PostCard } from "@/components/blog/post-card";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog & Notícias",
  description:
    "Artigos simples sobre seguros, saúde, poupança e proteção da família e da empresa. Conselhos da equipa Belmonte Seguros.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="grain mesh-warm relative overflow-hidden pt-30 pb-12 sm:pt-36 sm:pb-16">
          <div className="container-page relative z-10">
            <Reveal>
              <span className="eyebrow mb-4">Blog &amp; Notícias</span>
              <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Conselhos para decidir com clareza
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                Seguros, saúde e poupança explicados de forma simples - para o
                ajudar a proteger melhor o que é importante para si.
              </p>
            </Reveal>
          </div>
        </section>

        {/* All posts */}
        <section className="py-12 sm:py-16">
          <div className="container-page">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal as="article" key={post.slug} delay={(i % 3) * 0.08}>
                  <PostCard
                    post={post}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
