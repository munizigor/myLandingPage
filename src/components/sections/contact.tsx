"use client";

import { useEffect, useRef } from 'react';
import { useActionState } from 'react'; // Changed from 'react-dom' and 'useFormState'
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
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-r-2 border-primary-foreground rounded-full" viewBox="0 0 24 24"></svg>
          Sending...
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Send className="h-5 w-5" /> Send Message
        </div>
      )}
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed to useActionState
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
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        reset(); // Reset react-hook-form fields
        formRef.current?.reset(); // Reset native form fields
      }
    }
  }, [state, toast, reset]);


  // Combine server-side issues with client-side errors
  const nameError = errors.name?.message || (state.issues && state.fields?.name === errors.name?.ref?.value ? state.issues.find(issue => issue.toLowerCase().includes('name')) : undefined);
  const emailError = errors.email?.message || (state.issues && state.fields?.email === errors.email?.ref?.value ? state.issues.find(issue => issue.toLowerCase().includes('email')) : undefined);
  const messageError = errors.message?.message || (state.issues && state.fields?.message === errors.message?.ref?.value ? state.issues.find(issue => issue.toLowerCase().includes('message')) : undefined);


  return (
    <section id="contact" className="py-12 md:py-16">
      <Card className="max-w-2xl mx-auto shadow-xl bg-card">
        <CardHeader className="text-center">
          <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Get in Touch</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Have a project in mind or want to discuss a collaboration? Fill out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2 mb-1 text-foreground/90">
                <User className="h-4 w-4 text-primary" /> Your Name
              </Label>
              <Input
                id="name"
                type="text"
                {...register("name")}
                className={nameError ? "border-destructive" : ""}
                aria-invalid={!!nameError}
              />
              {nameError && <p className="text-sm text-destructive mt-1">{nameError}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2 mb-1 text-foreground/90">
                <Mail className="h-4 w-4 text-primary" /> Your Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={emailError ? "border-destructive" : ""}
                aria-invalid={!!emailError}
              />
              {emailError && <p className="text-sm text-destructive mt-1">{emailError}</p>}
            </div>

            <div>
              <Label htmlFor="message" className="flex items-center gap-2 mb-1 text-foreground/90">
                <MessageSquare className="h-4 w-4 text-primary" /> Your Message
              </Label>
              <Textarea
                id="message"
                rows={5}
                {...register("message")}
                className={messageError ? "border-destructive" : ""}
                aria-invalid={!!messageError}
              />
              {messageError && <p className="text-sm text-destructive mt-1">{messageError}</p>}
            </div>
            
            <SubmitButton />

            {state.message && !state.success && state.issues === undefined && (
               <p className="text-sm text-destructive mt-2 text-center">{state.message}</p>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
