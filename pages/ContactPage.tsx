
import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

const ContactPage: React.FC = () => {
    const { contact } = SITE_CONFIG;

    return (
        <div className="bg-white">
            <section className="bg-brand-brown text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className="text-xl mt-4 text-brand-cream max-w-3xl mx-auto">
                        We're here to help. Reach out to us for inquiries, quotes, or any questions you may have about our products.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-brand-cream p-8 rounded-lg shadow-md">
                            <h2 className="text-3xl font-bold text-brand-brown mb-6">Send us a Message</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Your Name *" required className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"/>
                                    <input type="email" placeholder="Email Address *" required className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"/>
                                </div>
                                <input type="text" placeholder="Subject" className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"/>
                                <textarea placeholder="Your Message *" rows={5} required className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-tan focus:border-brand-tan"></textarea>
                                <button type="submit" className="w-full bg-brand-tan text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-brand-brown transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-brand-green mb-4">Contact Information</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p><strong>Email:</strong> <a href={`mailto:${contact.email.primary}`} className="text-brand-tan hover:underline">{contact.email.primary}</a></p>
                                    <p><strong>Phone:</strong> <a href={`tel:${contact.phone.primary}`} className="text-brand-tan hover:underline">{contact.phone.primaryDisplay}</a></p>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-brand-green mb-4">Our Address</h3>
                                <p className="text-gray-700">{contact.address.fullAddress}</p>
                            </div>
                             <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="text-2xl font-bold text-brand-green mb-4">Business Hours</h3>
                                <div className="text-gray-700">
                                    <p>{contact.hours.weekdays}</p>
                                    <p>{contact.hours.weekend}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
