import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
    const images = [
        "/images/lt_family_sports_1772479150585.png",
        "/images/lt_kids_active_1772479168846.png",
        "/images/lt_physiotherapy_1772479206616.png",
        "/images/lt_outdoor_community_1772479224750.png",
        "/images/lt_gallery_1_1772479270497.png",
        "/images/lt_gallery_kids_running.png",
        "/images/lt_gallery_physio_kids.png"
    ];

    const imagesRow1 = [...images, ...images, ...images];
    const imagesRow2 = [...images].reverse().concat([...images].reverse()).concat([...images].reverse());

    return (
        <section className="py-16 sm:py-24 bg-background-warm overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 relative z-10 text-center">
                <h2 className="text-3xl sm:text-5xl font-heading font-black text-gray-900 tracking-tighter mix-blend-difference mb-4">
                    Akimirkos <span className="text-transparent text-outline">Galerijoje</span>
                </h2>
                <p className="text-gray-500 font-medium max-w-xl mx-auto">
                    Tikros šypsenos, nesuvaidintos emocijos ir Lietuvos vaikų pergalių džiaugsmas.
                </p>
            </div>

            <div className="relative flex flex-col gap-8 w-full">
                {/* Row 1 - Moving Left */}
                <div className="flex w-[400%] sm:w-[200%] md:w-[150%] lg:w-max group">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        className="flex gap-8 px-4"
                    >
                        {imagesRow1.map((src, idx) => (
                            <div key={idx} className="w-48 sm:w-80 h-48 sm:h-80 flex-shrink-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl relative transition-all duration-500 hover:scale-[1.02] hover:z-10">
                                <img src={src} alt="Galerijos foto" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Moving Right */}
                <div className="flex w-[400%] sm:w-[200%] md:w-[150%] lg:w-max group mt-4">
                    <motion.div
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 45, repeat: Infinity }}
                        className="flex gap-8 px-4"
                    >
                        {imagesRow2.map((src, idx) => (
                            <div key={idx} className="w-40 sm:w-72 h-40 sm:h-72 flex-shrink-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-xl relative transition-all duration-500 hover:scale-105 hover:z-10 origin-center">
                                <img src={src} alt="Galerijos foto" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply hover:opacity-0 transition-opacity"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
