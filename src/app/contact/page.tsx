import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Carports Houston for custom metal buildings, carports, and commercial structures. Call 281-387-1989.',
};

export default function ContactPage() {
  return <ContactForm />;
}
