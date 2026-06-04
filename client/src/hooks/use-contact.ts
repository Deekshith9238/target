import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

// ─────────────────────────────────────────────────────────────
// 🔑  EmailJS Configuration
//     Sign up free at https://www.emailjs.com and fill these in:
//
//  1. EMAILJS_SERVICE_ID  → Dashboard → Email Services → Service ID
//  2. EMAILJS_TEMPLATE_ID → Email Templates → Template ID
//  3. EMAILJS_PUBLIC_KEY  → Account → General → Public Key
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_dddaiug";
const EMAILJS_TEMPLATE_ID = "template_d7zufrt";
const EMAILJS_PUBLIC_KEY = "pQJAxGAE92pQ319xI";

export interface ContactInput {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export function useCreateContactMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        phone: data.phone || "Not provided",
        message: data.message,
        to_name: "Target Heating & Cooling",
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status !== 200) {
        throw new Error("Failed to send message");
      }

      return result;
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });
}
