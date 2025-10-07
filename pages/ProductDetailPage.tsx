
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProductById, getProductsByCategory, getWhatsAppURL } from '../utils/helpers';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : undefined;
  
  const [mainImage, setMainImage] = useState(product?.images.main || '');
  
  if (!product) {
    return <Navigate to="/products" />;
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const formatSpecLabel = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8 text-gray-600">
          <Link to="/" className="hover:text-brand-tan">Home</Link> &raquo; 
          <Link to="/products" className="hover:text-brand-tan"> Products</Link> &raquo; 
          <span> {product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <img src={mainImage} alt={product.name} className="w-full rounded-lg shadow-lg mb-4" />
            <div className="flex space-x-2">
              {[product.images.main, ...product.images.gallery].slice(0, 5).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-brand-tan' : 'border-transparent'}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <span className="text-brand-tan font-semibold">{product.category} - {product.grade} Grade</span>
            <h1 className="text-4xl font-bold text-brand-brown mt-2 mb-4">{product.name}</h1>
            <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#inquiry-form" className="w-full sm:w-auto text-center bg-brand-tan text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-brand-brown transition-colors">Request a Quote</a>
                <a href={getWhatsAppURL(`Hi, I'm interested in ${product.name}`)} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-green-600 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-green-700 transition-colors">WhatsApp Inquiry</a>
            </div>
          </div>
        </div>

        {/* Specifications and Features */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-brand-green mb-4 border-b-2 border-gray-200 pb-2">Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b py-2">
                  <span className="font-semibold text-gray-600">{formatSpecLabel(key)}:</span>
                  <span className="text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-green mb-4 border-b-2 border-gray-200 pb-2">Key Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-green mr-2 mt-1">&#10003;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Inquiry Form */}
        <div id="inquiry-form" className="mt-16 bg-brand-cream p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-brand-brown mb-6">Request a Quote for {product.name}</h2>
            {/* Form component would go here. For now, a placeholder form */}
            <form className="max-w-2xl mx-auto">
              {/* Form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input type="text" placeholder="Your Name *" required className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"/>
                 <input type="email" placeholder="Email Address *" required className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"/>
                 <input type="text" placeholder="Company Name" className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"/>
                 <input type="text" placeholder="Country *" required className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"/>
                 <input type="number" min={product.price.moq} placeholder={`Quantity in kg (Min: ${product.price.moq})*`} required className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"/>
            </div>
             <textarea placeholder="Your message or special requirements" rows={4} className="mt-4 p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"></textarea>
             <button type="submit" className="mt-6 w-full bg-brand-tan text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-brand-brown transition-colors">Submit Inquiry</button>
            </form>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-brand-brown mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
