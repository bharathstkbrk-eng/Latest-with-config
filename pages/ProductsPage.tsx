
import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { getAvailableProducts } from '../utils/helpers';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const products = getAvailableProducts();
  
  const productsByCategory = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-brand-brown">Our Green Coffee Beans</h1>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Explore our selection of premium Arabica and Robusta beans, sourced directly from the finest plantations in India.</p>
        </div>

        {Object.entries(productsByCategory).map(([category, products]) => (
          <section key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-brand-green border-b-2 border-brand-tan pb-2 mb-8">{category} Coffee Beans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
