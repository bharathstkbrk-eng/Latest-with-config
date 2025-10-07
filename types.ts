
export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: string;
  companyRegistration: string;
}

export interface ContactInfo {
  phone: {
    primary: string;
    primaryDisplay: string;
    secondary: string;
    secondaryDisplay: string;
  };
  email: {
    primary: string;
    sales: string;
    support: string;
  };
  whatsapp: {
    number: string;
    displayNumber: string;
    defaultMessage: string;
  };
  address: {
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    fullAddress: string;
  };
  hours: {
    weekdays: string;
    weekend: string;
    timezone: string;
  };
  social: {
    instagram: string;
    linkedin: string;
    facebook: string;
    twitter: string;
    youtube: string;
  };
}

export interface ImageConfig {
  url: string;
  alt: string;
}

export interface Images {
  logo: string;
  logoAlt: string;
  favicon: string;
  appleTouchIcon: string;
  hero: ImageConfig;
  categories: {
    robusta: ImageConfig;
    arabica: ImageConfig;
  };
  about: {
    team: string;
    facility: string;
    quality: string;
  };
  og: {
    image: string;
    imageAlt: string;
  };
}

export interface Product {
  id: string;
  name: string;
  category: 'Robusta' | 'Arabica';
  grade: string;
  shortDescription: string;
  fullDescription: string;
  price: {
    currency: string;
    unit: string;
    moq: string;
    moqUnit: string;
    note: string;
  };
  specifications: {
    beanSize: string;
    moisture: string;
    defects: string;
    origin: string;
    processing: string;
    packaging: string;
    certification: string;
    altitude?: string;
  };
  features: string[];
  images: {
    main: string;
    gallery: string[];
  };
  available: boolean;
  featured: boolean;
}

export interface HomepageContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      primary: string;
      primaryLink: string;
      secondary: string;
      secondaryLink: string;
    };
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  stats: {
    number: string;
    label: string;
  }[];
  whyChooseUs: {
    title: string;
    subtitle: string;
    reasons: {
      title: string;
      description: string;
    }[];
  };
}

export interface AboutPageContent {
  mission: string;
  vision: string;
  values: string[];
  story: string;
  certifications: string[];
  team: {
    title: string;
    description: string;
  };
}

export interface SeoConfig {
  siteName: string;
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string;
  author: string;
  siteUrl: string;
  twitterHandle: string;
}

export interface FormsConfig {
  inquiry: {
    successTitle: string;
    successMessage: string;
    errorMessage: string;
    emailSubject: string;
    minQuantity: number;
    minQuantityUnit: string;
    minQuantityMessage: string;
  };
  contact: {
    successTitle: string;
    successMessage: string;
    errorMessage: string;
    emailSubject: string;
  };
}

export interface NavigationItem {
  label: string;
  url: string;
}

export interface NavigationConfig {
  logo: string;
  menu: NavigationItem[];
  cta: {
    label: string;
    url: string;
  };
}

export interface SiteConfig {
  business: BusinessInfo;
  contact: ContactInfo;
  images: Images;
  products: Product[];
  homepage: HomepageContent;
  about: AboutPageContent;
  seo: SeoConfig;
  forms: FormsConfig;
  navigation: NavigationConfig;
}
