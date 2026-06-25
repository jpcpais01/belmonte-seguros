import { z } from "zod";

export const subjects = [
  "Seguro de Vida",
  "Seguro de Saúde",
  "Seguro Automóvel",
  "Seguro de Casa",
  "Acidentes Pessoais",
  "Reforma & Poupança",
  "Seguros para Empresa",
  "Outro assunto",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indique o seu nome."),
  email: z
    .string()
    .trim()
    .min(1, "Indique o seu email.")
    .email("Indique um email válido."),
  phone: z
    .string()
    .trim()
    .min(9, "Indique um telefone válido.")
    .or(z.literal("")),
  subject: z.enum(subjects, { error: "Selecione um assunto." }),
  message: z
    .string()
    .trim()
    .min(10, "Escreva a sua mensagem (mínimo 10 caracteres)."),
  consent: z
    .boolean()
    .refine((v) => v === true, "É necessário aceitar a Política de Privacidade."),
  // Honeypot — deve ficar sempre vazio (anti-spam).
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
