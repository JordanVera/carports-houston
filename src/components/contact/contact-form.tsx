"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactContent, siteConfig } from "@/lib/content";
import { siteImages } from "@/lib/images";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.message.trim()) next.message = "Message is required";
    return next;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      <PageHeader
        title={contactContent.title}
        subtitle={contactContent.subtitle}
        image={siteImages.restaurantPatio.src}
        imageAlt={siteImages.restaurantPatio.alt}
        imageClassName="object-[50%_40%]"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.4fr_1fr]">
          <Card className="border-border/80">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <CheckCircle2 className="size-12 text-primary" />
                  <div>
                    <p className="text-lg font-semibold">Message received!</p>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. For immediate assistance, call us at{" "}
                      <a
                        href={siteConfig.phoneHref}
                        className="font-medium text-primary hover:underline"
                      >
                        {siteConfig.phone}
                      </a>
                      .
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="name">Contact Name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      aria-invalid={!!errors.name}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="(281) 555-0123"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      aria-invalid={!!errors.message}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Your Inquiry
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl ring-1 ring-foreground/10">
              <Image
                src={siteImages.outdoorDining.src}
                alt={siteImages.outdoorDining.alt}
                fill
                placeholder="blur"
                className="object-cover object-[50%_40%]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <Card className="border-border/80">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:underline"
                >
                  <Phone className="size-5" />
                  {siteConfig.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/80">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={siteConfig.emailHref}
                  className="inline-flex items-center gap-2 text-primary transition-colors hover:underline"
                >
                  <Mail className="size-5 shrink-0" />
                  {siteConfig.email}
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/80">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Service Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inline-flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-5 shrink-0 text-primary" />
                  {siteConfig.serviceArea}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
