
import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

const AboutPage: React.FC = () => {
  const { about, images } = SITE_CONFIG;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-brown text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">About VB Exports</h1>
          <p className="text-xl mt-4 text-brand-cream max-w-3xl mx-auto">{SITE_CONFIG.business.description}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-brand-cream p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-brand-green mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">{about.mission}</p>
          </div>
          <div className="bg-brand-cream p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-brand-green mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">{about.vision}</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brand-brown mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{about.story}</p>
          </div>
          <div>
            <img src={images.about.facility} alt="Our facility" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>
      
      {/* Core Values & Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-3xl font-bold text-brand-green mb-6">Our Core Values</h3>
                <ul className="space-y-4">
                    {about.values.map((value, index) => (
                        <li key={index} className="flex items-start p-4 bg-gray-50 rounded-md">
                            <span className="text-brand-tan font-bold text-2xl mr-4">&#9672;</span>
                            <span className="text-gray-800">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-brand-green mb-6">Certifications & Quality</h3>
                 <img src={images.about.quality} alt="Quality check" className="rounded-lg shadow-lg mb-6 w-full h-48 object-cover"/>
                <ul className="space-y-3">
                    {about.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-green-600 mr-2">&#10004;</span>
                            <span className="text-gray-700">{cert}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      {/* Team Section */}
       <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold">{about.team.title}</h2>
             <p className="text-xl mt-4 max-w-3xl mx-auto text-brand-cream">{about.team.description}</p>
             <img src={images.about.team} alt="Our Team" className="mt-8 rounded-lg shadow-xl max-w-4xl mx-auto"/>
        </div>
       </section>

    </div>
  );
};

export default AboutPage;
