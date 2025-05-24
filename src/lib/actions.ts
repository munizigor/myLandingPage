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
      message: "Invalid form data. Please check the fields and try again.",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  const { name, email, message } = parsed.data;

  // Simulate sending email or saving to database
  console.log("Contact Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Example with Resend (uncomment and configure if using Resend)
  /*
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Your verified Resend sending email
      to: 'your-email@example.com', // Your receiving email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return { message: "Thank you! Your message has been sent successfully.", success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      message: "An error occurred while sending your message. Please try again later.",
      success: false,
    };
  }
  */
  
  // Placeholder success response
  return { message: "Thank you! Your message has been received (simulated).", success: true };
}
