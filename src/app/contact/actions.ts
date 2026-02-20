'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  status: 'success' | 'error';
};

export async function submitContactForm(
  prevState: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.message?.[0] || 'Invalid data provided.',
      status: 'error',
    };
  }
  
  const web3FormsAccessKey = '638de203-2123-409c-bca3-a81808978e61';
  
  const data = {
    ...validatedFields.data,
    access_key: web3FormsAccessKey,
    subject: `New Message from ${validatedFields.data.name}`,
    from_name: "INSPIRE MANIT Website",
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (result.success) {
      return {
        message: 'Your message has been sent successfully! We will get back to you soon.',
        status: 'success',
      };
    } else {
       return {
        message: result.message || 'An error occurred while sending your message.',
        status: 'error',
      };
    }

  } catch (error) {
    return {
      message: 'An unexpected network error occurred. Please try again later.',
      status: 'error',
    };
  }
}
