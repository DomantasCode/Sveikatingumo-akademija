import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-[100vh] lg:min-h-[90vh] flex items-center bg-background-warm overflow-hidden pt-16 pb-16 lg:pt-0 lg:pb-0">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8">
                            <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">
                                Sveikatingumo Akademija
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
                            Augame tvariame <br className="hidden sm:block" />
                            <span className="relative inline-block mt-2">
                                <span className="relative z-10 text-primary italic pr-4">judesyje</span>
                                {/* Subtle background swipe for emphasis */}
                                <span className="absolute bottom-1 left-0 w-full h-4 bg-orange-200/50 -z-10 rounded-full"></span>
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-light">
                            Kuriame erdvę, kurioje Lietuvos vaikai stiprėja per žaidimą, o tėvai randa ramybę dėl profesionalios kineziterapijos. Atraskite sveikatos meną kartu su mumis.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                href="#kontaktai"
                                className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-black transition-all text-center shadow-xl shadow-gray-900/20"
                            >
                                Susisiekti su mumis
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Image Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative h-[400px] sm:h-[500px] lg:h-[700px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl mt-8 lg:mt-0"
                    >
                        <img
                            src="/images/lt_hero_natural_family.png"
                            alt="Šeima bėgioja parke"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gray-900/5 hover:bg-transparent transition-colors duration-500"></div>

                        {/* Modern Floating Graphic */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white/90 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 scale-90 sm:scale-100 origin-bottom-left"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                                😊
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 leading-none mb-1">100%</p>
                                <p className="text-sm text-gray-500 font-medium">Laimingų vaikų</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
