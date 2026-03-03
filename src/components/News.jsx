import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function News() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section id="sklaida" className="py-32 bg-background-warm relative border-t border-gray-200/50 overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>

            <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">Aktualijos</span>
                    <h2 className="text-5xl sm:text-6xl font-heading font-bold text-gray-900 leading-none">
                        Akademijos <span className="font-light italic text-gray-400">Sklaida</span>
                    </h2>
                </div>

                {/* Single Featured Article */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-6 sm:p-10 flex flex-col md:flex-row gap-6 sm:gap-10 items-center group relative overflow-hidden"
                >
                    {/* Subtle Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative h-64 sm:h-96 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-lg">
                        <img
                            src="/images/lt_news_sports_event.png"
                            alt="Sporto šventė mieste"
                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>

                        {/* Trust Badge */}
                        <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl">
                            Vilniaus M. Savivaldybė
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Paskelbta: 2024 m. Rugsėjo 10 d.
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight group-hover:text-primary transition-colors duration-500">
                            Sveikatingumo Akademija Laimėjo Vilniaus Miesto Finansavimą Projektui
                        </h3>

                        <div className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                            <p className="mb-4">
                                Džiaugiamės galėdami pranešti, kad mūsų akademija sėkmingai laimėjo Vilniaus miesto savivaldybės skelbtą sveikatingumo projektų finansavimo konkursą. Šis pasiekimas leis mums dar labiau išplėsti veiklas, įsigyti moderniausios įrangos ir suteikti galimybę sportuoti dar didesniam vaikų skaičiui.
                            </p>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="mt-4">
                                            Projekto lėšos bus tiesiogiai nukreiptos į nemokamų atvirų treniruočių ciklų organizavimą bendruomenėms bei inovatyvios kineziterapinės bazės kūrimą, kuri iš esmės keis požiūrį į ankstyvąjį vaikų fizinį ugdymą ir laikysenos formavimą.
                                        </p>
                                        <p className="mt-4 font-bold text-gray-900">
                                            Ačiū už pasitikėjimą – mes toliau keičiame Lietuvos vaikų ateitį!
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            whileHover={{ x: 10 }}
                            className="self-start px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white hover:bg-primary transition-colors rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-lg flex items-center gap-2 sm:gap-3 group/btn w-full sm:w-auto justify-center sm:justify-start"
                        >
                            {isExpanded ? 'Skaityti mažiau' : 'Skaityti straipsnį'}
                            <motion.span
                                animate={{ rotate: isExpanded ? -90 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform"
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
