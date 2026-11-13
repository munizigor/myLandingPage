"use client";

import { useEffect, useRef } from 'react';
import { useActionState } from 'react'; 
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, type ContactFormState } from '@/lib/schema';
import { submitContactForm } from '@/lib/actions';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Clock, Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, SectionHeader } from '@/components/ds/section';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="motion-safe:animate-spin" aria-hidden="true" /> Enviando…
        </>
      ) : (
        <>
          <Send aria-hidden="true" /> Enviar mensagem
        </>
      )}
    </Button>
  );
}

function Field({
  id,
  label,
  error,
  help,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  help?: string;
  children: React.ReactNode;
}) {
  const note = error ?? help;
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-label text-foreground">
        {label}
      </Label>
      {children}
      {note && (
        <p id={`${id}-nota`} className={cn("text-small", error ? "text-destructive" : "text-muted-foreground")}>
          {note}
        </p>
      )}
    </div>
  );
}

const fieldClass = (hasError: boolean) =>
  cn(
    "min-h-11 border-input bg-card text-body placeholder:text-muted-foreground focus-visible:border-primary",
    hasError && "border-destructive"
  );

export function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState); 
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Mensagem enviada" : "Não foi possível enviar",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        reset(); 
        formRef.current?.reset(); 
      }
    }
  }, [state, toast, reset]);


  // Combine server-side issues with client-side errors
  const nameError = errors.name?.message || (state.issues && state.fields?.name === errors.name?.ref?.value ? state.issues.find(issue => issue.toLowerCase().includes('nome')) : undefined);
  const emailError = errors.email?.message || (state.issues && state.fields?.email === errors.email?.ref?.value ? state.issues.find(issue => issue.toLowerCase().includes('email')) : undefined);
  const messageError = errors.message?.message || (state.issues && state.fields?.message === errors.message?.ref?.value ? state.issues.find(issue => issue.toLowerCase().includes('mensagem')) : undefined);


  return (
    <Section id="contato">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="min-w-0">
          <SectionHeader
            eyebrow="Contato"
            title="Vamos conversar sobre o seu projeto"
            lead="Conte o contexto, o problema de negócio e o prazo. Respondo com uma proposta de próximos passos."
          />
          <p className="mt-8 flex items-center gap-2 text-small text-muted-foreground">
            <Clock className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Resposta em até dois dias úteis.
          </p>
        </div>

        <div className="min-w-0 rounded-lg border border-border bg-card p-6 shadow-ds-sm md:p-8">
          <form ref={formRef} action={formAction} className="grid gap-6" noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Nome" error={nameError}>
                <Input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className={fieldClass(!!nameError)}
                  aria-invalid={!!nameError}
                  aria-describedby={nameError ? "name-nota" : undefined}
                />
              </Field>
              <Field id="email" label="E-mail" error={emailError}>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="nome@empresa.com.br"
                  {...register("email")}
                  className={fieldClass(!!emailError)}
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "email-nota" : undefined}
                />
              </Field>
            </div>

            <Field id="message" label="Mensagem" error={messageError}>
              <Textarea
                id="message"
                rows={6}
                placeholder="Conte o contexto do projeto e o prazo."
                {...register("message")}
                className={cn(fieldClass(!!messageError), "min-h-[140px] resize-y")}
                aria-invalid={!!messageError}
                aria-describedby={messageError ? "message-nota" : undefined}
              />
            </Field>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-small text-muted-foreground">Seus dados são usados apenas para responder.</p>
              <SubmitButton />
            </div>

            {state.message && !state.success && state.issues === undefined && (
              <p className="text-small text-destructive">{state.message}</p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}
