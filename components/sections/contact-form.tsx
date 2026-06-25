"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { submitContact } from "@/app/actions";
import { contactSchema, subjects, type ContactInput } from "@/lib/contact-schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = React.useState<{
    ok: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "" as ContactInput["subject"],
      message: "",
      company: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    setStatus(null);
    const res = await submitContact(values);
    setStatus(res);
    if (res.ok) reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Honeypot (hidden from users) */}
      <div className="hidden" aria-hidden>
        <label>
          Empresa
          <input type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" error={errors.name?.message} htmlFor="name">
          <Input id="name" placeholder="O seu nome" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message} htmlFor="email">
          <Input
            id="email"
            type="email"
            placeholder="o.seu@email.pt"
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Telefone"
          error={errors.phone?.message}
          htmlFor="phone"
          optional
        >
          <Input
            id="phone"
            type="tel"
            placeholder="+351 ..."
            {...register("phone")}
          />
        </Field>
        <Field label="Assunto" error={errors.subject?.message} htmlFor="subject">
          <select
            id="subject"
            {...register("subject")}
            className="flex h-12 w-full rounded-xl border border-line bg-white px-4 text-[15px] text-ink shadow-sm transition-colors focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/30"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione um assunto
            </option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mensagem" error={errors.message?.message} htmlFor="message">
        <Textarea
          id="message"
          placeholder="Como podemos ajudar?"
          {...register("message")}
        />
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-0.5 size-5 shrink-0 rounded-md border-line text-navy accent-navy"
          />
          <span>
            Li e aceito a{" "}
            <a
              href="/politica-de-privacidade"
              className="font-medium text-navy underline decoration-gold/60 underline-offset-2 hover:text-ocean"
            >
              Política de Privacidade
            </a>{" "}
            e o tratamento dos meus dados para resposta a este pedido.
          </span>
        </label>
        {errors.consent?.message && (
          <p className="mt-1.5 text-sm text-red-600">{errors.consent.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            A enviar...
          </>
        ) : (
          <>
            Enviar mensagem
            <Send className="size-4" />
          </>
        )}
      </Button>

      {status && (
        <div
          role="status"
          className={cn(
            "flex items-start gap-3 rounded-xl border p-4 text-sm",
            status.ok
              ? "border-teal/30 bg-teal/10 text-teal"
              : "border-red-300 bg-red-50 text-red-700"
          )}
        >
          {status.ok ? (
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
          ) : (
            <AlertCircle className="mt-0.5 size-5 shrink-0" />
          )}
          <span>{status.message}</span>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor} className="flex items-center gap-1.5">
        {label}
        {optional && (
          <span className="text-xs font-normal text-muted">(opcional)</span>
        )}
      </Label>
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
