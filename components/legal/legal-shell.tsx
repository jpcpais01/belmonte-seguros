import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

export function LegalShell({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line/70 bg-ivory/80 backdrop-blur-xl">
        <div className="container-page flex h-18 items-center justify-between">
          <Link href="/" aria-label="Belmonte Seguros — início">
            <Logo />
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Voltar ao início
            </Link>
          </Button>
        </div>
      </header>

      <main className="py-16 sm:py-24">
        <div className="container-page max-w-3xl">
          <span className="eyebrow mb-4">Informação</span>
          <h1 className="text-4xl sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted">
            Última atualização: {updatedAt}
          </p>

          <div className="legal-prose mt-10">{children}</div>

          <div className="mt-12 rounded-2xl border border-gold/30 bg-gold-tint/40 p-5 text-sm text-ink-soft">
            <strong className="font-semibold text-navy">Nota:</strong> este é um
            texto de exemplo (placeholder). Substitua-o pelo conteúdo legal
            definitivo, revisto por profissional qualificado, antes de publicar.
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
