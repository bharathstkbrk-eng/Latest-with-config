
import { SITE_CONFIG } from '../config/siteConfig';
import { Product } from '../types';

export function getProductById(productId: string): Product | undefined {
  return SITE_CONFIG.products.find(p => p.id === productId);
}

export function getProductsByCategory(category: 'Robusta' | 'Arabica'): Product[] {
  return SITE_CONFIG.products.filter(p => p.category === category && p.available);
}

export function getFeaturedProducts(): Product[] {
  return SITE_CONFIG.products.filter(p => p.featured === true && p.available);
}

export function getAvailableProducts(): Product[] {
  return SITE_CONFIG.products.filter(p => p.available === true);
}

export function getWhatsAppURL(customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.contact.whatsapp.defaultMessage;
  return `https://wa.me/${SITE_CONFIG.contact.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function getContactEmail(type: 'primary' | 'sales' | 'support' = 'primary'): string {
  return SITE_CONFIG.contact.email[type] || SITE_CONFIG.contact.email.primary;
}
