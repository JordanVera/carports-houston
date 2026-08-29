'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/lib/content';
import { getServiceNavGroups } from '@/lib/services';
import { cn } from '@/lib/utils';

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  service: '',
  message: '',
};

const fieldClassName = 'h-11 px-3';

type ContactFormProps = {
  initialService?: string;
};

export function ContactForm({ initialService = '' }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    ...initialForm,
    service: initialService,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const serviceGroups = getServiceNavGroups();

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.firstName.trim()) next.firstName = 'First name is required';
    if (!form.lastName.trim()) next.lastName = 'Last name is required';
    if (!form.phone.trim()) next.phone = 'Phone number is required';
    if (!form.email.trim()) {
      next.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address';
    }
    if (!form.service) next.service = 'Select a service';
    if (!form.message.trim()) next.message = 'Project details are required';
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

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 className="size-12 text-primary" />
        <div>
          <p className="text-lg font-semibold">Quote request received</p>
          <p className="mt-2 text-muted-foreground">
            Thank you for reaching out. We typically respond within a few hours.
            For immediate help, call{' '}
            <a
              href={siteConfig.phoneHref}
              className="font-medium text-primary hover:underline"
            >
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setForm({ ...initialForm, service: initialService });
          }}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="firstName"
          label="First name"
          error={errors.firstName}
        >
          <Input
            id="firstName"
            autoComplete="given-name"
            value={form.firstName}
            onChange={(event) => updateField('firstName', event.target.value)}
            aria-invalid={!!errors.firstName}
            className={fieldClassName}
          />
        </Field>
        <Field id="lastName" label="Last name" error={errors.lastName}>
          <Input
            id="lastName"
            autoComplete="family-name"
            value={form.lastName}
            onChange={(event) => updateField('lastName', event.target.value)}
            aria-invalid={!!errors.lastName}
            className={fieldClassName}
          />
        </Field>
        <Field id="phone" label="Phone number" error={errors.phone}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            aria-invalid={!!errors.phone}
            placeholder="(281) 555-0123"
            className={fieldClassName}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            aria-invalid={!!errors.email}
            placeholder="you@example.com"
            className={fieldClassName}
          />
        </Field>
      </div>

      <Field id="address" label="Property address">
        <Input
          id="address"
          autoComplete="street-address"
          value={form.address}
          onChange={(event) => updateField('address', event.target.value)}
          placeholder="Street address, Houston TX"
          className={fieldClassName}
        />
      </Field>

      <Field id="service" label="Service needed" error={errors.service}>
        <select
          id="service"
          value={form.service}
          onChange={(event) => updateField('service', event.target.value)}
          aria-invalid={!!errors.service}
          className={cn(
            'h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 text-sm outline-none transition-colors',
            'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
            'aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
            'dark:bg-input/30',
            !form.service && 'text-muted-foreground',
          )}
        >
          <option value="">Select a service</option>
          {serviceGroups.map((group) => (
            <optgroup key={group.category} label={group.label}>
              {group.items.map((item) => (
                <option key={item.href} value={item.name}>
                  {item.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </Field>

      <Field id="message" label="Project details" error={errors.message}>
        <Textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={!!errors.message}
          placeholder="Describe your project — what you need built, the size of the space, timeline, or any specifics."
          className="min-h-32 px-3"
        />
      </Field>

      <Button type="submit" size="lg" className="h-12 w-full text-base">
        Get my free quote
        <ArrowRight className="size-4" />
      </Button>
      <p className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <Clock className="size-3.5 shrink-0" />
        We typically respond within a few hours. No obligation, no pressure.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
