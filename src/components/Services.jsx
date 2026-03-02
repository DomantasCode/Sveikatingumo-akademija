import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeartPulse, Activity } from 'lucide-react';

export default function Services() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

    return (
        <section id="paslaugos" className="py-32 relative bg-background-warm overflow-hidden">

            {/* Background Section Typography */}
            <div className="absolute top-0 right-0 overflow-hidden pointer-events-none select-none opacity-5">
                <motion.div style={{ scale }} className="origin-top-right">
                    <h2 className="text-[30vw] font-heading font-black leading-none text-gray-900 m-0 p-0">KRY<br />PTYS</h2>
                </motion.div>
            </div>

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">Išskirtinės Programos</span>
                        <h2 className="text-6xl sm:text-7xl font-heading font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
                            Pamatas <br />
                            <span className="text-secondary italic font-serif font-light">Ateičiai</span>
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-600 font-medium leading-relaxed">
                            Mes tikime, kad fizinis lavinimas turi teikti džiaugsmą. Tai vieta, kur Lietuvos vaikai atranda judėjimo laisvę per asmeninį dėmesį.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">

                    {/* Pillar 1: Kineziterapija */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group mt-10 lg:mt-32"
                    >
                        {/* Massive Background Number */}
                        <div className="absolute -top-10 sm:-top-20 -left-4 sm:-left-10 text-[8rem] sm:text-[15rem] font-heading font-black text-gray-100/50 z-0 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-10 group-hover:text-secondary/10">
                            01
                        </div>

                        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 shadow-2xl relative z-10 border border-gray-100 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10 group-hover:bg-secondary/20 transition-colors duration-700"></div>

                            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-teal-400 rounded-full flex items-center justify-center shadow-lg shadow-secondary/30 text-white transform group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                    <HeartPulse size={40} />
                                </div>

                                {/* Floating Image Mini-Card */}
                                <div className="w-40 sm:w-48 h-32 rounded-2xl overflow-hidden shadow-md transform rotate-3 group-hover:-rotate-3 transition-transform duration-500 hidden sm:block">
                                    <img src="/images/lt_physiotherapy_1772479206616.png" alt="Kineziterapija" className="w-full h-full object-cover filter contrast-125" />
                                </div>
                            </div>

                            <h3 className="text-4xl font-heading font-extrabold mb-6 text-gray-900 group-hover:text-secondary transition-colors">Sąmoninga Kineziterapija</h3>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Individualus dėmesys kiekvienam vaikui. Lietuvos kineziterapeutų paruoštos programos ne tik stiprina kūną ir formuoja taisyklingą laikyseną, bet ir suteikia pasitikėjimo savimi kiekviename žingsnyje.
                            </p>

                            <div className="space-y-4 mb-12">
                                {['Laikysenos korekcija', 'Motorikos lavinimas', 'Individualūs planai'].map((item, i) => (
                                    <div key={i} className="flex items-center text-gray-800 font-bold border-b border-gray-100 pb-3">
                                        <span className="w-8 border-t-2 border-secondary mr-4"></span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Pillar 2: Aktyvus Laisvalaikis */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Massive Background Number */}
                        <div className="absolute -bottom-5 sm:-bottom-10 -right-4 sm:-right-10 text-[8rem] sm:text-[15rem] font-heading font-black text-gray-100/50 z-0 select-none pointer-events-none transition-transform duration-700 group-hover:translate-y-10 group-hover:text-primary/10">
                            02
                        </div>

                        <div className="bg-gradient-to-br from-primary to-orange-500 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 shadow-2xl relative z-10 overflow-hidden text-white mt-10 lg:mt-0">
                            <div className="absolute inset-0 noise-overlay opacity-20"></div>
                            <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

                            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-10">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform duration-500 relative z-10 flex-shrink-0">
                                    <Activity size={40} className="text-white" />
                                </div>

                                {/* Floating Image Mini-Card */}
                                <div className="w-40 sm:w-48 h-32 rounded-2xl overflow-hidden shadow-lg border border-white/20 transform -rotate-3 group-hover:rotate-3 transition-transform duration-500 hidden sm:block relative z-10">
                                    <img src="/images/lt_gallery_1_1772479270497.png" alt="Aktyvus laisvalaikis" className="w-full h-full object-cover filter contrast-125" />
                                </div>
                            </div>
                            <h3 className="text-4xl font-heading font-extrabold mb-6 relative z-10">Aktyvus Laisvalaikis</h3>
                            <p className="text-lg text-white/90 mb-10 leading-relaxed font-medium relative z-10">
                                Pamilti judesį – tai pamilti gyvenimą. Kuriame saugią, įtraukiančią aplinką, kur fizinis aktyvumas ir asmeniniai rekordai tampa smagiu kasdieniu žaidimu vaikams.
                            </p>

                            <div className="space-y-4 mb-12 relative z-10">
                                {['Lavina koordinaciją', 'Pasitikėjimas savimi', 'Komandinis darbas'].map((item, i) => (
                                    <div key={i} className="flex items-center text-white font-bold border-b border-white/20 pb-3">
                                        <span className="w-8 border-t-2 border-white mr-4"></span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
