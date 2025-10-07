
import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';
import { getFeaturedProducts } from '../utils/helpers';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const { homepage, images, business } = SITE_CONFIG;
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src={images.hero.url} alt={images.hero.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">{homepage.hero.title}</h1>
          <p className="text-xl md:text-2xl mt-4 mb-8 max-w-3xl mx-auto">{homepage.hero.subtitle}</p>
          <div className="flex justify-center space-x-4">
            <Link to={homepage.hero.cta.primaryLink} className="bg-brand-tan text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-brand-tan transition-all duration-300">
              {homepage.hero.cta.primary}
            </Link>
            <Link to={homepage.hero.cta.secondaryLink} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-brand-brown transition-all duration-300">
              {homepage.hero.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {homepage.features.map((feature, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl mb-4 inline-block">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-brand-brown mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {homepage.stats.map((stat, index) => (
              <div key={index}>
                <p className="text-5xl font-bold text-brand-tan">{stat.number}</p>
                <p className="text-lg mt-2 text-brand-cream">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-brand-brown mb-4">Our Featured Products</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Hand-selected for their superior quality and flavor profiles, these are the beans our clients love most.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-brown">{homepage.whyChooseUs.title}</h2>
            <p className="text-xl text-gray-600 mt-2">{homepage.whyChooseUs.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homepage.whyChooseUs.reasons.map((reason, index) => (
              <div key={index} className="p-6 bg-brand-cream rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-brand-green mb-2">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
