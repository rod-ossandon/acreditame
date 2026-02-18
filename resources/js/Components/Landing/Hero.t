import React from 'react';
import verticalCard from '@/assets/vertical.png';

export default function Hero() {
    return (
        <header id="hero" className="relative z-10 pt-32 pb-40 px-6 border-b border-white/5 overflow-hidden">

            {/* 1. Fondo Atmosférico (Ahora en Bronce Oscuro) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-dark/20 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

            {/* 2. Líneas de Circuito SVG (Colores Hex actualizados a Oro y Ámbar) */}
            <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M600 0V200H800M600 400V600H400M200 200H0V0" stroke="url(#paint0_linear)" strokeWidth="2"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
                        {/* Stop 1: Oro (#D4AF37) */}
                        <stop stopColor="#D4AF37" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="#D4AF37"/>
                        {/* Stop 2: Ámbar (#F59E0B) */}
                        <stop offset="1" stopColor="#F59E0B" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

                <div className="space-y-8">

                    {/* 3. Título Principal (Degradado Dorado Lujoso) */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tighter text-white font-wide">
                        Bienvenido a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-secondary to-gold-light filter drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]">
                            ACREDITAME
                        </span>
                    </h1>

                    <div className="flex flex-col gap-6 pt-8 border-t border-white/10 max-w-lg">
                        <h2 className="text-xl md:text-2xl font-wide font-bold text-white uppercase tracking-wider leading-tight">
                            ¡Impulsa tu industria al siguiente nivel!
                        </h2>

                        {/* 4. Palabras Clave Resaltadas en Oro y Ámbar */}
                        <p className="text-sm md:text-base text-gray-400 font-sans leading-relaxed">
                            Descubre cómo nuestras soluciones <span className="text-gold-primary font-semibold">innovadoras</span> y productos de calidad pueden <span className="text-gold-secondary font-semibold">revolucionar</span> tu negocio.
                        </p>

                         <div className="inline-flex items-center gap-3 text-xs md:text-sm font-wide font-bold uppercase tracking-widest text-gray-300 mt-2">
                            <span className="relative flex h-3 w-3">
                              {/* 5. Punto de estado "Ping" en Oro */}
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-primary"></span>
                            </span>
                            Únete al movimiento hacia la excelencia.
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6">
                        {/* 6. Botón Principal con Gradiente Dorado */}
                        <button className="px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-secondary text-white text-xs font-wide font-bold uppercase tracking-widest rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-105">
                            Comenzar Ahora
                        </button>
                        <button className="px-8 py-4 border border-white/20 text-white text-xs font-wide font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all duration-300">
                            Explorar Soluciones
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end group h-[500px] items-center">
                    {/* 7. Luz de fondo detrás de la tarjeta (Oro/Ámbar) */}
                    <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-gold-primary/40 via-gold-secondary/30 to-transparent rounded-full blur-[120px] animate-pulse group-hover:from-gold-primary/60 transition-all duration-700"></div>

                    <div className="relative z-10 Perspective-[1000px]">
                        <img
                            src={verticalCard}
                            alt="ID Card Acreditame Premium"
                            // 8. Sombra intensa Dorada para la tarjeta
                            className="w-72 md:w-96 h-auto object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.6)] animate-float rotate-[-8deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-in-out will-change-transform"
                        />
                        <div className="absolute inset-0 rounded-[2rem] border border-white/20 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
