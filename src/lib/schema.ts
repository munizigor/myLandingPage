import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }).max(100),
  email: z.string().email({ message: "Por favor, insira um endereço de email válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }).max(1000),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};
