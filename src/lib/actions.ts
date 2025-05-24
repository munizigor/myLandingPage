"use server";
import type { ContactFormState } from '@/lib/schema';
import { ContactFormSchema } from '@/lib/schema';

// In a real app, you would integrate an email sending service like Resend, SendGrid, etc.
// For example:
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Dados do formulário inválidos. Por favor, verifique os campos e tente novamente.",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  const { name, email, message } = parsed.data;

  // Simulate sending email or saving to database
  console.log("Formulário de Contato Enviado:");
  console.log("Nome:", name);
  console.log("Email:", email);
  console.log("Mensagem:", message);

  // Example with Resend (uncomment and configure if using Resend)
  /*
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Your verified Resend sending email
      to: 'your-email@example.com', // Your receiving email
      subject: `Nova Submissão do Formulário de Contato de ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });
    return { message: "Obrigado! Sua mensagem foi enviada com sucesso.", success: true };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return {
      message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
      success: false,
    };
  }
  */
  
  // Placeholder success response
  return { message: "Obrigado! Sua mensagem foi recebida (simulado).", success: true };
}
