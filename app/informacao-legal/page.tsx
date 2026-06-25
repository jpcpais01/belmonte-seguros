import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Informação Legal",
  description:
    "Informação sobre a atividade de mediação de seguros da Belmonte Seguros e respetivo registo na ASF.",
};

export default function LegalPage() {
  return (
    <LegalShell title="Informação Legal" updatedAt="junho de 2026">
      <p>
        A {site.legalName} exerce a atividade de mediação de seguros nos termos
        da legislação em vigor, sob a supervisão da ASF — Autoridade de
        Supervisão de Seguros e Fundos de Pensões.
      </p>

      <h2>Registo de mediador</h2>
      <p>
        {site.asf}. Pode confirmar o registo no portal da{" "}
        <a href={site.asfUrl} target="_blank" rel="noopener noreferrer">
          ASF
        </a>
        .
      </p>

      <h2>Identificação</h2>
      <ul>
        <li>Denominação: {site.legalName}</li>
        <li>Email: <a href={site.emailHref}>{site.email}</a></li>
        <li>Telefone: {site.phone}</li>
        {site.addresses.map((a) => (
          <li key={a.label}>
            {a.street}, {a.area}, {a.postal}
          </li>
        ))}
      </ul>

      <h2>Âmbito da atividade</h2>
      <p>
        Atuamos como mediador de seguros, prestando aconselhamento imparcial e
        comparando soluções de várias seguradoras a operar em Portugal. Não
        assumimos a posição de seguradora; a aceitação dos riscos é da
        responsabilidade das companhias de seguros.
      </p>

      <h2>Reclamações</h2>
      <p>
        Pode apresentar reclamações através do{" "}
        <a
          href="https://www.livroreclamacoes.pt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Livro de Reclamações eletrónico
        </a>{" "}
        ou diretamente junto da ASF.
      </p>
    </LegalShell>
  );
}
