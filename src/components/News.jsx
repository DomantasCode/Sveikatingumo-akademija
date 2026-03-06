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
                    className={`bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 p-6 sm:p-10 flex flex-col ${isExpanded ? '' : 'md:flex-row'} gap-6 sm:gap-10 md:items-start items-center group relative`}
                >
                    {/* Subtle Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-[2rem] sm:rounded-[3rem]"></div>

                    {/* Image Side */}
                    <motion.div layout className={`w-full relative h-64 sm:h-96 ${isExpanded ? 'md:h-[400px] lg:h-[500px] md:w-full' : 'md:w-1/2 md:h-[500px] md:sticky md:top-36'} rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-lg z-10`}>
                        <motion.img layout
                            src="/images/lt_news_teachers_fitness.png"
                            alt="Mokytojų funkcinės treniruotės"
                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>

                        {/* Trust Badge */}
                        <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl">
                            Vilniaus M. Savivaldybė
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div layout className={`w-full flex flex-col justify-center ${isExpanded ? 'md:w-full' : 'md:w-1/2'}`}>
                        <div className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Programa startuoja: 2026 m.
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight group-hover:text-primary transition-colors duration-500">
                            Vilniuje startuoja nemokamos funkcinės treniruotės mokytojams: dalyvaus ne mažiau kaip 70 pedagogų
                        </h3>

                        <div className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                            <p className="mb-4">
                                MB „Sveikatingumo akademija“ laimėjo Vilniaus miesto savivaldybės finansuojamą projektų konkursą ir 2026 metais įgyvendins programą „Stiprus mokytojas“, skirtą sostinės pedagogų fizinei sveikatai stiprinti. Planuojama, kad projekte dalyvaus ne mažiau kaip 70 pedagogų iš 10 Vilniaus ugdymo įstaigų.
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
                                        <p className="mt-4 font-bold text-gray-900">Investicija į mokytojų sveikatą ir mokyklų bendruomenės gerovę</p>
                                        <p className="mt-2">Mokytojo darbas reikalauja ne tik profesinių žinių ir emocinio įsitraukimo, bet ir fizinės ištvermės. Ilgos valandos stovint ar sėdint, nuolatinė įtampa, padidėjęs darbo krūvis dažnai sukelia nugaros, kaklo bei pečių juostos skausmus, energijos stoką ir ilgalaikį nuovargį.</p>
                                        <p className="mt-4">Programa „Stiprus mokytojas“ orientuota į prevenciją – siekiama padėti pedagogams stiprinti kūną, mažinti įtampą ir formuoti tvarius fizinio aktyvumo įpročius.</p>

                                        <div className="my-6 pl-4 border-l-4 border-primary italic text-gray-500">
                                            „Stiprus mokytojas – tai investicija ne tik į pedagogo fizinę sveikatą, bet ir į visos mokyklos bendruomenės gerovę. Kai mokytojas jaučiasi energingas ir fiziškai stiprus, tai tiesiogiai atsispindi jo darbo kokybėje ir emocinėje aplinkoje klasėje“, – sako projekto iniciatorius Mantas Straževičius.
                                        </div>

                                        <p className="mt-4 font-bold text-gray-900">Kaip bus įgyvendinamas projektas?</p>
                                        <ul className="list-disc list-inside mt-2 space-y-2 mb-6 text-sm sm:text-base">
                                            <li><strong className="text-gray-800">Treniruotės vyks:</strong> pačiose mokyklose, pedagogams patogiu laiku po darbo, nuosekliai stiprinant viso kūno raumenyną.</li>
                                            <li><strong className="text-gray-800">Programa padės:</strong> stiprinti nugaros raumenis, mažinti kaklo bei pečių juostos įtampą, didinti darbingumą ir formuoti ilgalaikius fizinio aktyvumo įpročius.</li>
                                        </ul>

                                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                            <p className="font-bold text-gray-900 mb-2 text-lg">Kvietimas Vilniaus mokykloms</p>
                                            <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                                Kviečiame Vilniaus ugdymo įstaigas teikti paraiškas dalyvauti programoje. Atrinktas 10 mokyklų paskelbsime kovo 15 dieną.
                                                <br /><br />
                                                <span className="text-xs text-gray-400">Projektas finansuojamas Vilniaus miesto savivaldybės biudžeto lėšomis.</span>
                                            </p>
                                            <a
                                                href="https://docs.google.com/forms/d/1nmk6_dfRdmOsRWMciMO7ZZGoJz4K2NrkimyGbo0Ur4M/viewform"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-lg"
                                            >
                                                Registracija mokykloms →
                                            </a>
                                        </div>
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
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}
