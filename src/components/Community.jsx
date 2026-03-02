import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Community() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0.5, 1], [100, -100]);

    return (
        <section id="bendruomene" className="relative min-h-screen flex items-center bg-gray-900 text-white overflow-hidden py-32">
            {/* Immersive Background Images */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
                    <img
                        src="/images/lt_community_gym.png"
                        alt="Lietuvos Bendruomenė"
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute inset-0 noise-overlay opacity-50"></div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-block glass-panel-dark px-6 py-2 rounded-full mb-10 text-xs font-bold tracking-widest uppercase text-white/80 border border-white/10 shadow-2xl">
                            Vienybės Galia
                        </div>

                        <h2 className="text-4xl sm:text-7xl font-heading font-black leading-[0.9] tracking-tighter mb-6 sm:mb-8 text-white">
                            Sukurta <br />
                            <span className="text-outline-white text-transparent">Lietuvai</span>
                        </h2>

                        <p className="text-lg sm:text-2xl font-light mb-10 sm:mb-12 text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Mes neskiriame tėvų ir vaikų — mes kuriame erdvę jų bendram triumfui. Tai vieta, kur šeimos auga, juda ir stiprėja kartu.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#registracija"
                                className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-white/10 hover:shadow-white/20 transition-all text-center group"
                            >
                                Prisijungti
                                <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">→</span>
                            </motion.a>

                        </div>
                    </motion.div>

                    <div className="hidden lg:flex justify-end relative">
                        {/* Abstract Artistic Elements */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="w-80 h-[500px] glass-panel-dark rounded-[3rem] overflow-hidden p-4 relative z-20 shadow-2xl ring-1 ring-white/20 transform translate-y-20 -translate-x-10"
                        >
                            <img
                                src="/images/lt_outdoor_community_1772479224750.png"
                                alt="Šeimos Sportas Lietuvoje"
                                className="w-full h-full object-cover rounded-[2rem] filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                            className="absolute top-10 right-0 w-64 h-80 rounded-[3rem] overflow-hidden z-10 shadow-2xl ring-4 ring-gray-900"
                        >
                            <img
                                src="/images/lt_kids_active_1772479168846.png"
                                alt="Aktyvūs vaikai"
                                className="w-full h-full object-cover filter contrast-125"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
