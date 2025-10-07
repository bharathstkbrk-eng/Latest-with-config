
import { SiteConfig } from '../types';

export const SITE_CONFIG: SiteConfig = {
  business: {
    name: 'VB Exports',
    tagline: 'Premium Green Coffee Beans from India to Global Markets',
    description: 'Leading exporter of high-quality unroasted Arabica and Robusta coffee beans',
    foundedYear: '2020',
    companyRegistration: 'Update with your company registration number'
  },
  contact: {
    phone: {
      primary: '+919449522395',
      primaryDisplay: '+91 944 952 2395',
      secondary: '8073733673',
      secondaryDisplay: '807 373 3673'
    },
    email: {
      primary: 'info@vb-exports.com',
      sales: 'sales@vb-exports.com',
      support: 'support@vb-exports.com'
    },
    whatsapp: {
      number: '919449522395',
      displayNumber: '+91 944 952 2395',
      defaultMessage: 'Hi, I\'m interested in VB Exports premium green coffee beans'
    },
    address: {
      line1: 'VB Exports',
      line2: 'Bengaluru, Karnataka',
      line3: 'India - 560001',
      city: 'Bengaluru',
      state: 'Karnataka',
      country: 'India',
      postalCode: '560001',
      fullAddress: 'VB Exports, Bengaluru, Karnataka, India - 560001'
    },
    hours: {
      weekdays: 'Monday - Saturday: 9:00 AM - 6:00 PM IST',
      weekend: 'Sunday: Closed',
      timezone: 'IST (Indian Standard Time)'
    },
    social: {
      instagram: 'https://instagram.com/vbexports',
      linkedin: 'https://linkedin.com/company/vbexports',
      facebook: '',
      twitter: '',
      youtube: ''
    }
  },
  images: {
    logo: '/images/logo.png',
    logoAlt: 'VB Exports Logo',
    favicon: '/images/favicon.png',
    appleTouchIcon: '/images/apple-touch-icon.png',
    hero: {
      url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80',
      alt: 'Premium green coffee beans ready for export'
    },
    categories: {
      robusta: {
        url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
        alt: 'Robusta green coffee beans'
      },
      arabica: {
        url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
        alt: 'Arabica green coffee beans'
      }
    },
    about: {
      team: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
      facility: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&q=80',
      quality: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80'
    },
    og: {
      image: 'https://picsum.photos/1200/630',
      imageAlt: 'VB Exports - Premium Green Coffee Beans'
    }
  },
  products: [
    {
      id: 'robusta-aaa',
      name: 'Robusta AAA Grade',
      category: 'Robusta',
      grade: 'AAA',
      shortDescription: 'Premium Robusta beans with bold flavor and high caffeine content',
      fullDescription: 'Our Robusta AAA Grade represents the finest quality unroasted Robusta coffee beans from select plantations in Karnataka and Kerala. These beans are carefully hand-picked and sorted to ensure only the highest grade beans reach our international clients.',
      price: {
        currency: 'USD',
        unit: 'per kg',
        moq: '100',
        moqUnit: 'kg',
        note: 'Price varies based on quantity and shipping destination'
      },
      specifications: {
        beanSize: '7.5mm+',
        moisture: '11-12%',
        defects: 'Max 5%',
        origin: 'Karnataka & Kerala, India',
        processing: 'Washed',
        packaging: '60kg jute bags',
        certification: 'Export Quality, FSSAI Certified'
      },
      features: [
        'Hand-picked premium beans',
        'Consistent size and quality',
        'Low defect rate (<5%)',
        'Strong, bold flavor profile',
        'High caffeine content (2.2-2.7%)',
        'Excellent crema production',
        'Ideal for espresso blends',
        'Direct from certified plantations'
      ],
      images: {
        main: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
          'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
          'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80'
        ]
      },
      available: true,
      featured: true
    },
    {
      id: 'robusta-aa',
      name: 'Robusta AA Grade',
      category: 'Robusta',
      grade: 'AA',
      shortDescription: 'High-quality Robusta beans perfect for commercial blending',
      fullDescription: 'Our Robusta AA Grade offers excellent quality at competitive prices, making it ideal for commercial roasters and large-scale buyers. These beans maintain consistent quality while providing great value for bulk orders.',
      price: {
        currency: 'USD',
        unit: 'per kg',
        moq: '500',
        moqUnit: 'kg',
        note: 'Competitive pricing for bulk orders'
      },
      specifications: {
        beanSize: '6.5-7.5mm',
        moisture: '11-12%',
        defects: 'Max 8%',
        origin: 'Karnataka & Kerala, India',
        processing: 'Natural/Washed',
        packaging: '60kg jute bags',
        certification: 'Export Quality, FSSAI Certified'
      },
      features: [
        'Excellent value for money',
        'Consistent quality batches',
        'Strong flavor profile',
        'Perfect for blending',
        'High caffeine content',
        'Bulk order discounts available',
        'Reliable supply chain',
        'Quality tested batches'
      ],
      images: {
        main: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
          'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80'
        ]
      },
      available: true,
      featured: true
    },
    {
      id: 'robusta-a',
      name: 'Robusta A Grade',
      category: 'Robusta',
      grade: 'A',
      shortDescription: 'Commercial grade Robusta for large volume requirements',
      fullDescription: 'Our Robusta A Grade is perfect for buyers looking for commercial-grade beans in large quantities. These beans offer good quality at the most competitive prices for industrial-scale coffee production.',
      price: {
        currency: 'USD',
        unit: 'per kg',
        moq: '1000',
        moqUnit: 'kg',
        note: 'Best rates for container loads'
      },
      specifications: {
        beanSize: '6.0mm+',
        moisture: '11-13%',
        defects: 'Max 12%',
        origin: 'South India',
        processing: 'Natural',
        packaging: '60kg jute bags',
        certification: 'Export Quality'
      },
      features: [
        'Most economical option',
        'Ideal for instant coffee',
        'Large volume availability',
        'Container load pricing',
        'Consistent supply',
        'Good for commercial blends',
        'Stable quality',
        'Competitive market rates'
      ],
      images: {
        main: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80'
        ]
      },
      available: true,
      featured: false
    },
    {
      id: 'arabica-aaa',
      name: 'Arabica AAA Grade',
      category: 'Arabica',
      grade: 'AAA',
      shortDescription: 'Premium Arabica with complex flavor notes and aromatic profile',
      fullDescription: 'Our Arabica AAA Grade represents the pinnacle of Indian Arabica coffee. Grown in high-altitude regions of Karnataka, these beans offer exceptional cup quality with complex flavor notes, bright acidity, and aromatic excellence.',
      price: {
        currency: 'USD',
        unit: 'per kg',
        moq: '100',
        moqUnit: 'kg',
        note: 'Premium pricing for specialty grade'
      },
      specifications: {
        beanSize: '7.0mm+',
        moisture: '10-11%',
        defects: 'Max 3%',
        origin: 'High-altitude Karnataka, India',
        processing: 'Washed',
        packaging: '60kg jute bags',
        certification: 'Specialty Grade, Export Quality, FSSAI Certified',
        altitude: '1000-1500m above sea level'
      },
      features: [
        'Specialty grade quality',
        'Complex flavor profile',
        'Bright, clean acidity',
        'Floral and fruity notes',
        'High cup quality (85+ points)',
        'Single-origin traceability',
        'Sustainable farming practices',
        'Perfect for specialty roasters',
        'Limited availability'
      ],
      images: {
        main: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&q=80',
          'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80'
        ]
      },
      available: true,
      featured: true
    },
    {
      id: 'arabica-aa',
      name: 'Arabica AA Grade',
      category: 'Arabica',
      grade: 'AA',
      shortDescription: 'High-quality Arabica for premium coffee blends',
      fullDescription: 'Our Arabica AA Grade offers excellent quality Arabica beans suitable for premium commercial blends and single-origin roasts. These beans provide consistent quality with good flavor characteristics at competitive pricing.',
      price: {
        currency: 'USD',
        unit: 'per kg',
        moq: '250',
        moqUnit: 'kg',
        note: 'Competitive pricing for quality Arabica'
      },
      specifications: {
        beanSize: '6.5-7.0mm',
        moisture: '10-12%',
        defects: 'Max 6%',
        origin: 'Karnataka, India',
        processing: 'Washed/Natural',
        packaging: '60kg jute bags',
        certification: 'Export Quality, FSSAI Certified',
        altitude: '800-1200m above sea level'
      },
      features: [
        'Excellent quality-to-price ratio',
        'Balanced flavor profile',
        'Medium acidity',
        'Chocolate and nutty notes',
        'Versatile for various roasts',
        'Good body and sweetness',
        'Consistent availability',
        'Ideal for commercial roasters'
      ],
      images: {
        main: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80'
        ]
      },
      available: true,
      featured: true
    }
  ],
  homepage: {
    hero: {
      title: 'Premium Green Coffee Beans',
      subtitle: 'Direct from India to Global Markets',
      description: 'Export-quality unroasted Arabica and Robusta coffee beans. Sourced from select plantations, graded to perfection, delivered worldwide.',
      cta: {
        primary: 'View Our Products',
        primaryLink: '/products',
        secondary: 'Request Quote',
        secondaryLink: '/contact'
      }
    },
    features: [
      {
        icon: '🌱',
        title: 'Premium Quality',
        description: 'Hand-picked beans from certified plantations with strict quality control at every step.'
      },
      {
        icon: '🌍',
        title: 'Global Export',
        description: 'Reliable shipping to international markets with proper documentation and packaging.'
      },
      {
        icon: '📋',
        title: 'Certified Excellence',
        description: 'Export quality certification, FSSAI approved, meeting international standards.'
      },
      {
        icon: '💼',
        title: 'B2B Partnership',
        description: 'Dedicated support for roasters, distributors, and coffee businesses worldwide.'
      }
    ],
    stats: [
      {
        number: '500+',
        label: 'Tons Exported Annually'
      },
      {
        number: '25+',
        label: 'Countries Served'
      },
      {
        number: '100%',
        label: 'Quality Guaranteed'
      },
      {
        number: '5+',
        label: 'Years of Excellence'
      }
    ],
    whyChooseUs: {
      title: 'Why Choose VB Exports?',
      subtitle: 'Your Trusted Partner in Coffee Export',
      reasons: [
        {
          title: 'Direct from Source',
          description: 'We work directly with coffee plantations, ensuring freshness and traceability.'
        },
        {
          title: 'Quality Assurance',
          description: 'Multiple quality checks and grading processes before export.'
        },
        {
          title: 'Competitive Pricing',
          description: 'Fair pricing with no middlemen, better value for bulk orders.'
        },
        {
          title: 'Reliable Logistics',
          description: 'Experienced export team handling all shipping and documentation.'
        },
        {
          title: 'Custom Solutions',
          description: 'Flexible packaging, grading, and quantities based on your needs.'
        },
        {
          title: 'Dedicated Support',
          description: '24/7 customer support and quick response to all inquiries.'
        }
      ]
    }
  },
  about: {
    mission: 'To deliver premium green coffee beans from India to global markets while maintaining the highest standards of quality, sustainability, and customer service.',
    vision: 'To be recognized as the most reliable and quality-focused coffee export company, connecting Indian coffee excellence with international markets.',
    values: [
      'Quality First: Never compromise on bean quality',
      'Transparency: Honest business practices and pricing',
      'Sustainability: Supporting eco-friendly farming',
      'Reliability: Consistent supply and timely delivery',
      'Partnership: Long-term relationships with clients'
    ],
    story: 'VB Exports was founded with a vision to showcase India\'s finest coffee to the world. Starting from the coffee-growing regions of Karnataka, we have built strong relationships with plantations and farmers, ensuring that only the best beans reach our international clients. Our expertise in quality grading, export documentation, and logistics makes us a preferred partner for coffee businesses worldwide.',
    certifications: [
      'FSSAI Certified',
      'Export Quality Certification',
      'ISO Compliant Packaging',
      'Organic Certification (select products)'
    ],
    team: {
      title: 'Our Export Team',
      description: 'Experienced professionals handling every aspect of coffee export from sourcing to delivery.'
    }
  },
  seo: {
    siteName: 'VB Exports',
    defaultTitle: 'VB Exports - Premium Green Coffee Beans from India',
    titleTemplate: '%s | VB Exports',
    description: 'VB Exports - Leading exporter of premium green coffee beans from India. High-quality unroasted Arabica and Robusta beans for global markets. Export quality, competitive pricing, reliable delivery.',
    keywords: 'green coffee beans, unroasted coffee, arabica beans, robusta beans, coffee export india, wholesale coffee beans, bulk coffee beans, coffee supplier india, indian coffee export, premium coffee beans, coffee beans wholesale',
    author: 'VB Exports',
    siteUrl: 'https://vb-exports.com',
    twitterHandle: '@vbexports'
  },
  forms: {
    inquiry: {
      successTitle: 'Thank you for your inquiry!',
      successMessage: 'We have received your request. Our export team will contact you within 24 hours.',
      errorMessage: 'Sorry, there was an error sending your inquiry. Please try again or contact us directly.',
      emailSubject: 'New Product Inquiry from VB Exports Website',
      minQuantity: 100,
      minQuantityUnit: 'kg',
      minQuantityMessage: 'Minimum order quantity is 100 kg. Please contact us for smaller quantities.'
    },
    contact: {
      successTitle: 'Message Sent Successfully!',
      successMessage: 'Thank you for contacting us. We will respond to your inquiry soon.',
      errorMessage: 'Sorry, there was an error sending your message. Please try again or call us directly.',
      emailSubject: 'New Contact Form Submission'
    }
  },
  navigation: {
    logo: 'VB Exports',
    menu: [
      { label: 'Home', url: '/' },
      { label: 'Products', url: '/products' },
      { label: 'About Us', url: '/about' },
      { label: 'Contact', url: '/contact' }
    ],
    cta: {
      label: 'Get Quote',
      url: '/contact'
    }
  }
};
