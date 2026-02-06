import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name must be less than 50 characters" }),
  lastName: z.string()
    .trim()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name must be less than 50 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  service: z.string()
    .min(1, { message: "Please select a service" }),
  message: z.string()
    .trim()
    .min(10, { message: "Please tell us more about your needs (at least 10 characters)" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (!captchaToken) {
      toast({
        title: "Please complete the reCAPTCHA",
        description: "Click the 'I'm not a robot' checkbox to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        service: data.service === "drone-inspections" ? "Drone Inspections" : "Drone Photography",
        message: data.message,
        from_name: "ENORD UAV SOLUTIONS",
        reply_to: data.email,
        "g-recaptcha-response": captchaToken,
      };

      await emailjs.send(
        "service_3nkima9",
        "template_6ft4tsh",
        templateParams,
        "PQyMQv2dZ_9fuD-nN"
      );

      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send",
        description: "Please try again or contact us directly at info@enord.com.au",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john.smith@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="0400 000 000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="drone-inspections">Drone Inspections</SelectItem>
                  <SelectItem value="drone-photography">Drone Photography</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about your drone hire needs</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="I need a drone for construction site documentation in Parramatta for 2 weeks starting next month..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Ler5GIsAAAAALAhceB13vwtF7HXkVhT8I8vT8xK"
            onChange={onCaptchaChange}
          />
        </div>

        <Button 
          type="submit" 
          size="lg" 
          variant="cta" 
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;