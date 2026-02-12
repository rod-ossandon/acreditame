import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const metrics = [
    {
        service: "Credenciales ID",
        code: "SYS_ID_V4",
        review: "La calidad es impecable. Las imágenes en alta definición y el sello perlado dan un toque único.",
        stats: [
            { label: "Calidad Material", value: 100 },
            { label: "Definición Img", value: 95 },
            { label: "Originalidad", value: 98 },
        ]
    },
    {
        service: "Soporte Técnico",
        code: "OPS_MAINTENANCE",
        review: "Limpieza detallada de hardware y software. Equipos funcionando como nuevos. Atención rápida.",
        stats: [
            { label: "Tiempo Respuesta", value: 95 },
            { label: "Eficiencia", value: 98 },
            { label: "Uptime", value: 100 },
        ]
    },
    {
        service: "Seguridad CCTV",
        code: "SEC_CAM_NET",
        review: "Instalación profesional. Monitoreo en tiempo real 24/7 estable. Confiabilidad total.",
        stats: [
            { label: "Instalación", value: 100 },
            { label: "Acceso Remoto", value: 98 },
            { label: "Fiabilidad", value: 99 },
        ]
    },
    {
        service: "Consultoría",
        code: "STRATEGY_CORE",
        review: "Clave para el crecimiento. Soluciones tecnológicas personalizadas que optimizaron procesos.",
        stats: [
            { label: "Impacto", value: 95 },
            { label: "Personalización", value: 98 },
            { label: "Asesoría", value: 100 },
        ]
    },
     {
        service: "Merchandising",
        code: "LASER_3D",
        review: "Productos únicos que hicieron destacar nuestra marca en el evento corporativo.",
        stats: [
            { label: "Acabado", value: 100 },
            { label: "Durabilidad", value: 95 },
            { label: "Diseño", value: 98 },
        ]
    }
];

export default function TestimonialsSection() {
    return (
        <section id="resultados" className="relative z-10 py-20 md:py-32 px-4 bg-transparent border-b border-white/5 overflow-hidden">

            <div className="max-w-7xl mx-auto mb-16 text-center">
                <span className="text-gold-primary font-mono text-xs font-bold tracking-widest mb-2 block">/// SYSTEM_FEEDBACK</span>
                <h2 className="text-3xl md:text-5xl font-bold uppercase text-white font-wide tracking-tight">
                    Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-secondary">Comprobados</span>
                </h2>
            </div>

            <div className="max-w-[1200px] mx-auto testimonial-swiper-container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="w-full py-12"
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 50 },
                    }}
                >
                    {metrics.map((item, index) => (
                        <SwiperSlide key={index} className="max-w-[350px] md:max-w-[400px]">
                            <FeedbackCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx>{`
                .swiper-pagination-bullet {
                    background: #333;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background: #D4AF37 !important; /* Gold Primary */
                    width: 20px;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                /* Ajuste para que las sombras del coverflow no tapen el contenido */
                .swiper-slide-shadow-left, .swiper-slide-shadow-right {
                    background-image: linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0));
                }
            `}</style>
        </section>
    );
}

const FeedbackCard = ({ data }) => (
    <div className="group relative h-full flex flex-col justify-between
        bg-black/40 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        overflow-hidden
        transition-all duration-500
        hover:border-gold-primary/50
        hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]
    ">

        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-primary/10 rounded-full blur-[60px] group-hover:bg-gold-primary/20 transition-all duration-700"></div>
        <div className="relative z-10 p-8 flex flex-col h-full">

            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-lg font-bold text-white font-wide uppercase leading-tight">{data.service}</h3>
                    <span className="text-[9px] font-mono text-gold-primary tracking-wider bg-black/50 border border-gold-primary/20 px-2 py-0.5 rounded mt-2 inline-block">
                        ID: {data.code}
                    </span>
                </div>
                <div className="text-gold-primary text-xs tracking-widest drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                    ★★★★★
                </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-8 italic relative pl-4 border-l-2 border-gold-primary/30">
                <span className="text-gold-primary/20 text-4xl absolute -top-4 -left-2 font-serif select-none">"</span>
                {data.review}
            </p>

            <div className="mt-auto space-y-4">
                {data.stats.map((stat, idx) => (
                    <div key={idx}>
                        <div className="flex justify-between text-[10px] font-mono font-bold text-gray-500 mb-1 uppercase">
                            <span>{stat.label}</span>
                            <span className="text-white group-hover:text-gold-primary transition-colors">{stat.value}%</span>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-gold-primary via-gold-secondary to-gold-primary rounded-full relative"
                                style={{ width: `${stat.value}%` }}
                            >
                                <div className="absolute inset-0 bg-white/30 w-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
