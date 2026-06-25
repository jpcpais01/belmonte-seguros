"use server";

import { contactSchema } from "@/lib/contact-schema";

export type ContactState = {
  ok: boolean;
  message: string;
};

/**
 * Server action for the contact form.
 *
 * It validates input on the server, then (placeholder) delivers the message.
 * To enable real email delivery, connect a provider such as Resend:
 *
 *   1. `npm install resend`
 *   2. Add RESEND_API_KEY and CONTACT_TO_EMAIL to your environment
 *      (Vercel → Project → Settings → Environment Variables).
 *   3. Uncomment the delivery block below.
 *
 * Until then, submissions are validated and logged to the server console,
 * and the user sees a success confirmation.
 */
export async function submitContact(data: unknown): Promise<ContactState> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      ok: false,
      message:
        "Não foi possível enviar. Verifique os campos e tente novamente.",
    };
  }

  // Honeypot tripped → silently accept without doing anything.
  if (parsed.data.company) {
    return { ok: true, message: "Mensagem recebida. Entraremos em contacto em breve." };
  }

  const { name, email, phone, subject, message } = parsed.data;

  try {
    // --- Email delivery placeholder -------------------------------------
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Website Belmonte <site@belmonte-seguros.pt>",
    //   to: process.env.CONTACT_TO_EMAIL ?? "geral@belmonte-seguros.pt",
    //   replyTo: email,
    //   subject: `Novo pedido de contacto — ${subject}`,
    //   text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone || "—"}\n\n${message}`,
    // });
    // --------------------------------------------------------------------

    // Temporary: log the lead so nothing is lost before email is wired up.
    console.info("[contacto] Novo pedido:", {
      name,
      email,
      phone,
      subject,
      message,
    });

    return {
      ok: true,
      message:
        "Mensagem enviada com sucesso. A nossa equipa entrará em contacto consigo brevemente.",
    };
  } catch (error) {
    console.error("[contacto] Falha no envio:", error);
    return {
      ok: false,
      message:
        "Ocorreu um erro ao enviar a mensagem. Por favor, contacte-nos por telefone.",
    };
  }
}
