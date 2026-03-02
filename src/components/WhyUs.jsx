import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Target, Sparkles, TrendingUp } from 'lucide-react';

export default function WhyUs() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
    };

    const cards = [
        {
            icon: <Smile size={40} className="text-secondary" />,
            title: "Žaidimo Galia",
            text: "Kiekviena treniruotė – tai naujas nuotykis pavirtęs į žaidimą. Vaikai net nepastebi, kaip sportuodami lavina visas raumenų grupes ir mokosi disciplinos.",
            delay: 0,
        },
        {
            icon: <Target size={40} className="text-primary" />,
            title: "100% Dėmesio",
            subtitle: "Į rezultatus orientuotas modelis",
            text: "Profesionalus, bet žaismingas požiūris. Mes stebime kiekvieno pažangą asmeniškai ir užtikriname individualų dėmesį.",
            delay: 0.1,
        },
        {
            icon: <Sparkles size={40} className="text-yellow-500" />,
            title: "Saugiausia Erdvė",
            text: "Moderni aplinka, skatinanti drąsą bandyti nauja. Erdvė sukurta taip, kad vaikai jaustųsi visiškai saugūs ir laisvi judėti.",
            delay: 0.2,
        },
        {
            icon: <TrendingUp size={40} className="text-teal-600" />,
            title: "Nuolatinis Tobulėjimas",
            text: "Metodikos, atitinkančios naujausius sveikatingumo standartus. Nuolat mokomės ir pritaikome inovacijas vaikų fiziniam ugdymui.",
            delay: 0.3,
        }
    ];

    return (
        <section id="kodel-mes" className="py-32 bg-background-warm relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">Vertybės</span>
                        <h2 className="text-6xl sm:text-7xl font-heading font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
                            Mūsų <br />
                            <span className="text-secondary italic font-serif font-light">Filosofija</span>
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-600 font-medium leading-relaxed">
                            Neskaičiuojame atsispaudimų. Skaičiuojame šypsenas ir įveiktus asmeninius barjerus. Sportas turi naviguoti vaiko emocijas, o ne tik kūną.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-[2.5rem] p-10 sm:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-secondary/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Subtle hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                            <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                                {card.icon}
                            </div>

                            <h3 className="text-3xl font-heading font-bold mb-3 text-gray-900 leading-tight">
                                {card.title}
                            </h3>

                            {card.subtitle && (
                                <h4 className="text-lg font-bold text-gray-400 mb-4">{card.subtitle}</h4>
                            )}

                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
