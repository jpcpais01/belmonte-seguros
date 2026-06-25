import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Belmonte Seguros recolhe, utiliza e protege os seus dados pessoais.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Política de Privacidade" updatedAt="junho de 2026">
      <p>
        A {site.legalName} respeita a sua privacidade e está empenhada em
        proteger os dados pessoais que nos confia. Esta política descreve, de
        forma transparente, como tratamos a sua informação, em conformidade com
        o Regulamento Geral sobre a Proteção de Dados (RGPD).
      </p>

      <h2>1. Responsável pelo tratamento</h2>
      <p>
        O responsável pelo tratamento dos seus dados é a {site.legalName}, com
        contacto através de{" "}
        <a href={site.emailHref}>{site.email}</a> ou {site.phone}.
      </p>

      <h2>2. Que dados recolhemos</h2>
      <ul>
        <li>Dados de identificação e contacto (nome, email, telefone);</li>
        <li>
          Informação necessária à simulação e contratação de seguros e
          benefícios;
        </li>
        <li>
          Dados de navegação no website, quando aplicável (cookies essenciais).
        </li>
      </ul>

      <h2>3. Finalidades do tratamento</h2>
      <p>
        Utilizamos os seus dados para responder a pedidos de contacto, elaborar
        simulações, prestar serviços de mediação de seguros e cumprir obrigações
        legais e regulamentares.
      </p>

      <h2>4. Os seus direitos</h2>
      <p>
        Pode, a qualquer momento, solicitar o acesso, a retificação, o
        apagamento, a limitação ou a portabilidade dos seus dados, bem como
        opor-se ao seu tratamento, contactando-nos através dos meios indicados.
      </p>

      <h2>5. Conservação e segurança</h2>
      <p>
        Conservamos os seus dados apenas durante o período necessário às
        finalidades para que foram recolhidos e adotamos medidas técnicas e
        organizativas adequadas à sua proteção.
      </p>
    </LegalShell>
  );
}
