import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const HERO_FALLBACK =
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80';

const base =
  'https://ntsuddpjnvgkhkpufisc.supabase.co/storage/v1/object/public/Midias-Clientes';
const heroBackgroundImages = [
  `${base}/Projeto%209.jpeg`,
  `${base}/Projeto%207.jpeg`,
  `${base}/Projeto%206.jpeg`,
  `${base}/Projeto%205.jpeg`,
  `${base}/Projeto%204.jpeg`,
  `${base}/Projeto%203.jpeg`,
  `${base}/Projeto%202.jpeg`,
  `${base}/Projeto%2010.jpeg`,
  `${base}/Projeto%201.jpeg`,
];

const heroTitles = [
  'Padron - Elétrica, Automação e CFTV',
  'Padrão LIGHT, Aumento de Carga e Centrais de Alarme',
  'Soluções Completas em Elétrica e Automação',
] as const;

const heroLinks = ['#services', '#services', '#contact'] as const;

const heroSlides = heroBackgroundImages.map((image, i) => ({
  id: i + 1,
  image,
  fallback: HERO_FALLBACK,
  title: heroTitles[i % heroTitles.length],
  link: heroLinks[i % heroLinks.length],
}));

const HeroThree = () => {
  return (
    <section className="hero-section hero-3" style={{ position: 'relative' }}>
      <div className="array-button" style={{ zIndex: 10 }}>
        <button className="array-prev">
          <i className="fa fa-arrow-left" />
        </button>
        <button className="array-next">
          <i className="fa fa-arrow-right" />
        </button>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        speed={3000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.dot-2',
          clickable: true,
        }}
        navigation={{
          nextEl: '.array-prev',
          prevEl: '.array-next',
        }}
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <>
                <div
                  className="hero-image bg-cover"
                  style={{
                    backgroundColor: '#1a1a2e',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                  }}
                >
                  <img
                    src={slide.image}
                    alt=""
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.onerror = null;
                      if (t.dataset.fallbackApplied === '1') {
                        t.style.opacity = '0';
                        return;
                      }
                      t.dataset.fallbackApplied = '1';
                      t.src = slide.fallback;
                    }}
                  />
                  {/* CAMADA DE OVERLAY ADICIONADA AQUI */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor:
                        'rgba(0, 0, 0, 0.65)' /* Filtro escuro a 65% */,
                    }}
                  />
                </div>
                <div
                  className="container"
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div className="row justify-content-center w-100">
                    <div className="col-xl-10">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        className="hero-content text-center"
                      >
                        <motion.h1
                          className="text-white fw-bold mb-4"
                          style={{
                            fontFamily: "'Inter', 'Roboto', sans-serif",
                            fontSize:
                              'clamp(2.5rem, 5vw, 4rem)' /* Responsivo: menor em telemóveis, maior em desktop */,
                            textShadow: '2px 4px 8px rgba(0,0,0,0.5)',
                            lineHeight: '1.2',
                          }}
                          initial={{ y: 40, opacity: 0 }}
                          animate={{
                            y: isActive ? '0' : 40,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: 'linear',
                          }}
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.div
                          initial={{ y: 40, opacity: 0 }}
                          animate={{
                            y: isActive ? '0' : 40,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5,
                            ease: 'linear',
                          }}
                          className="hero-button"
                        >
                          <Link
                            to={slide.link}
                            className="theme-btn"
                            style={{
                              padding: '14px 32px',
                              fontSize: '1rem',
                              textTransform: 'uppercase',
                              fontWeight: '700',
                              letterSpacing: '0.5px',
                            }}
                          >
                            Ver nossos serviços
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroThree;
