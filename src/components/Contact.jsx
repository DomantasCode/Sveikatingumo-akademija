import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="kontaktai" className="py-32 relative bg-background-warm overflow-hidden">

            {/* Massive subtle typography */}
            <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none select-none opacity-5 -translate-y-1/2 flex justify-center">
                <h2 className="text-[25vw] font-heading font-black text-gray-900 whitespace-nowrap">K O N T A K T</h2>
            </div>

            <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20">
                    <span className="text-secondary font-bold tracking-widest uppercase mb-4 block text-sm">Pradėkime</span>
                    <h2 className="text-4xl sm:text-7xl font-heading font-black text-gray-900 tracking-tighter mix-blend-difference relative inline-block">
                        Ženkite <br />
                        <span className="text-outline">Pirmąjį</span> Žingsnį
                        <div className="absolute -bottom-4 right-0 w-32 h-2 bg-gradient-to-r from-primary to-orange-400"></div>
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col relative"
                >
                    {/* Form and Map Grid */}
                    <div className="grid lg:grid-cols-2">

                        {/* Form Side */}
                        <div className="p-6 sm:p-16 lg:p-20 relative bg-white z-10">

                            <form onSubmit={(e) => e.preventDefault()} className="relative z-20 space-y-10">
                                <div className="space-y-2 group">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-primary transition-colors">Herojaus Vardas</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-xl font-heading font-bold text-gray-900 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="(Vaiko ar Jūsų)"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-secondary transition-colors">Ryšio Kanalas</label>
                                    <input
                                        type="text"
                                        id="email"
                                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-xl font-heading font-bold text-gray-900 focus:border-secondary focus:outline-none transition-colors"
                                        placeholder="El. paštas / Telefonas"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-gray-400 group-focus-within:text-gray-900 transition-colors">Jūsų Žinutė</label>
                                    <textarea
                                        id="message"
                                        rows="2"
                                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-xl font-heading font-bold text-gray-900 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                                        placeholder="Noriu pradėti judėti..."
                                    ></textarea>
                                </div>

                                <div className="pt-8">
                                    <motion.button
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full bg-gray-900 text-white font-bold text-xl py-6 rounded-2xl shadow-xl hover:bg-black transition-colors flex justify-between items-center px-10 group/btn"
                                    >
                                        <span>Išsiųsti signalą</span>
                                        <span className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:translate-x-2 transition-transform">
                                            ↗
                                        </span>
                                    </motion.button>
                                </div>
                            </form>
                        </div>

                        {/* Interactive Map Section */}
                        <div className="relative h-64 sm:h-96 lg:h-auto overflow-hidden bg-gray-100 mt-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147454.49818814397!2d25.10170464670068!3d54.70068407422964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius!5e0!3m2!1sen!2slt!4v1709403328243!5m2!1sen!2slt"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '100%' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                            ></iframe>
                            <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply pointer-events-none"></div>

                            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 pointer-events-none">
                                <div className="glass-panel p-4 sm:p-6 rounded-3xl text-gray-900 shadow-2xl border border-white/50 backdrop-blur-xl bg-white/70 text-sm sm:text-base">
                                    <h4 className="font-heading font-bold text-xl sm:text-2xl mb-1">Mūsų Būstinė</h4>
                                    <p className="text-sm font-bold opacity-70 mb-4 tracking-widest text-primary">VILNIUS, LT</p>
                                    <p className="font-medium sm:text-lg border-b border-gray-900/10 pb-2 mb-2">info@sveikatingumoakademija.lt</p>
                                    <p className="font-medium sm:text-lg">+370 600 00000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
