export const siteConfig = {
  name: 'Carports Houston',
  tagline: 'Your Trusted Carport Experts',
  description:
    'Expert carport and metal building services for residential and commercial needs in Houston and the Texas Gulf Coast.',
  phone: '281-387-1989',
  phoneHref: 'tel:+12813871989',
  email: 'carportsunlimited@yahoo.com',
  emailHref: 'mailto:carportsunlimited@yahoo.com',
  serviceArea: 'Texas Gulf Coast Region',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export const stats = [
  {
    value: '250+',
    label: 'Custom Projects',
    description: 'Completed across the Gulf Coast',
  },
  {
    value: '30',
    label: 'Years of Experience',
    description: 'Trusted metal structure experts',
  },
  {
    value: 'USA',
    label: 'Made Materials',
    description: 'Premium American metal products',
  },
] as const;

export const homeHero = {
  title: 'Carports Houston',
  subtitle: 'Your Trusted Carport Experts',
  description:
    'With over 30 years of experience, we specialize in quality commercial and residential metal buildings, ensuring safety and durability.',
};

export const servicesPreview = [
  {
    title: 'Residential Metal Buildings',
    description:
      'Custom-designed metal buildings for homes, ensuring durability and aesthetic appeal tailored to your needs.',
    image: 'residentialService' as const,
    items: [
      'Custom carports',
      'Patio covers',
      'Pergolas & awnings',
      'RV covers',
    ],
  },
  {
    title: 'Commercial Metal Solutions',
    description:
      'Robust metal structures for businesses, providing reliable and efficient solutions for your commercial projects.',
    image: 'commercialService' as const,
    items: [
      'Parking structures',
      'Cantilever carports',
      'Aircraft hangars',
      'Commercial roofing',
    ],
  },
] as const;

export const residentialServices = {
  title: 'Residential Metal Buildings',
  description:
    'Custom-designed metal buildings for homes, ensuring durability and aesthetic appeal tailored to your needs.',
  items: [
    'Custom carports',
    'Patio covers',
    'Metal buildings',
    'Pergolas',
    'RV covers',
    'Awnings',
  ],
};

export const commercialServices = {
  title: 'Commercial Metal Solutions',
  description:
    'Robust metal structures for businesses, providing reliable and efficient solutions for your commercial projects.',
  items: [
    'Parking structures',
    'Cantilever carports',
    'Apartment covers',
    'Riding arenas',
    'Aircraft hangars',
    'Car wash shelters',
    'Commercial roofing',
  ],
};

export const aboutContent = {
  title: 'Your Trusted Carport Experts',
  paragraphs: [
    'Carports Houston is a family-owned and operated company proudly serving homeowners, businesses, and commercial clients throughout the Texas Gulf Coast Region. With over 25 years of experience, we specialize in designing and building durable, high-quality metal structures that deliver lasting protection, function, and curb appeal.',
    'Our work includes custom carports, patio covers, metal buildings, pergolas, and commercial structures built to meet the needs of both residential and commercial properties. Every project is completed with a focus on strength, craftsmanship, and long-term value.',
    'At Carports Houston, we are committed to using premium metal products made in the USA, giving our customers confidence in the quality, reliability, and durability of every structure we build. Our proven experience and dedication to excellence have made us a trusted choice for metal structural solutions across the region.',
    'Whether you are looking to protect your vehicles, expand your outdoor living space, enhance your property, or create a dependable commercial structure, Carports Houston is ready to bring your vision to life. We combine professional design, quality materials, and skilled workmanship to create structures that are built to last.',
  ],
  closing:
    'Ready to add lasting value, protection, and style to your property? Contact Carports Houston today to discuss your project and discover a custom metal structure designed around your needs.',
};

export const trustHighlights = [
  {
    title: 'Decades of Experience',
    description:
      'Over 25 years designing and building metal structures across the Gulf Coast.',
  },
  {
    title: 'USA-Made Materials',
    description:
      'Premium metal products made in the USA for quality, reliability, and durability.',
  },
  {
    title: 'Residential & Commercial',
    description:
      'From custom carports to large commercial structures — we do it all.',
  },
] as const;

export const featuredProject = {
  badge: 'Featured Project',
  title: 'Commercial metal buildings built to last',
  description:
    'From storefront canopies to full commercial shells, we design and install metal structures that stand up to Gulf Coast weather and keep your property working.',
  highlights: [
    'Engineered for Houston wind and weather',
    'USA-made steel and fasteners',
    'Custom sizes, colors, and layouts',
  ],
};

export const contactContent = {
  title: 'Contact Us',
  subtitle: 'Get in touch for your metal building needs today!',
};
