import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { ContactIllustration } from "./illustrations/ContactIllustration";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      setSubmitSuccess(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmitSuccess(false);
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-contact-heading">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subheading">
            Ready to transform your HR processes? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card>
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@company.com"
                              {...field}
                              data-testid="input-email"
                            />
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
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(555) 123-4567"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your HR needs..."
                              className="min-h-32 resize-none"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={mutation.isPending}
                      data-testid="button-submit"
                    >
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>

                    {submitSuccess && (
                      <p className="text-sm text-center text-primary font-medium" data-testid="text-success">
                        Message sent successfully! We'll be in touch soon.
                      </p>
                    )}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="mb-6">
                <ContactIllustration />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3" data-testid="info-address">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      123 Business Plaza<br />
                      Suite 400<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="info-address">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      123 Business Plaza<br />
                      Suite 400<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="info-email">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:info@kaizenhr.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      info@kaizenhr.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="info-phone">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="info-hours">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
