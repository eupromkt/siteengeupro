
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { translations } from './translations';
import { Language } from './types';
import { 
  ChevronRight, 
  Menu, 
  X, 
  HardHat, 
  Ruler, 
  Factory, 
  Star, 
  Phone,
  ArrowRight,
  BarChart,
  Palette,
  Check,
  Building2,
  Wrench,
  Target,
  Eye,
  Gem,
  Clock,
  Cpu,
  Layers,
  ClipboardList,
  Search,
  Quote,
  Globe
} from 'lucide-react';

interface ColorTheme {
  id: string;
  name: string;
  color: string;
  dark: string;
  gradient: string;
  shadow: string;
}

const THEMES: ColorTheme[] = [
  { id: 'orange', name: 'Aço Corten', color: '#FF6B00', dark: '#B34B00', shadow: 'rgba(255, 107, 0, 0.3)', gradient: 'linear-gradient(135deg, #FF9E42 0%, #FF6B00 50%, #B34B00 100%)' },
  { id: 'cobalt', name: 'Cobalto', color: '#0047AB', dark: '#002D6B', shadow: 'rgba(0, 71, 171, 0.3)', gradient: 'linear-gradient(135deg, #4A90E2 0%, #0047AB 50%, #002D6B 100%)' },
  { id: 'premium-gold', name: 'Ouro Nobre', color: '#FFD700', dark: '#996515', shadow: 'rgba(255, 215, 0, 0.3)', gradient: 'linear-gradient(135deg, #FFF080 0%, #FFD700 50%, #996515 100%)' },
  { id: 'copper', name: 'Cobre', color: '#B87333', dark: '#80461B', shadow: 'rgba(184, 115, 51, 0.3)', gradient: 'linear-gradient(135deg, #E3A67A 0%, #B87333 50%, #80461B 100%)' },
  { id: 'amethyst', name: 'Ametista', color: '#702963', dark: '#4B0082', shadow: 'rgba(112, 41, 99, 0.3)', gradient: 'linear-gradient(135deg, #9370DB 0%, #702963 50%, #4B0082 100%)' },
  { id: 'gold', name: 'Latão', color: '#D4AF37', dark: '#8A6D3B', shadow: 'rgba(212, 175, 55, 0.3)', gradient: 'linear-gradient(135deg, #E5D590 0%, #D4AF37 50%, #8A6D3B 100%)' },
  { id: 'emerald', name: 'Zinco Verde', color: '#50C878', dark: '#2E8B57', shadow: 'rgba(80, 200, 120, 0.3)', gradient: 'linear-gradient(135deg, #A2F2B3 0%, #50C878 50%, #2E8B57 100%)' },
  { id: 'ruby', name: 'Esmalte Rubi', color: '#E0115F', dark: '#8A0B35', shadow: 'rgba(224, 17, 95, 0.3)', gradient: 'linear-gradient(135deg, #F78DA7 0%, #E0115F 50%, #8A0B35 100%)' },
  { id: 'arctic', name: 'Ciano Glacial', color: '#00F5FF', dark: '#00868B', shadow: 'rgba(0, 245, 255, 0.3)', gradient: 'linear-gradient(135deg, #8EE5EE 0%, #00F5FF 50%, #00868B 100%)' },
  { id: 'midnight', name: 'Grafite', color: '#1A1A1A', dark: '#000000', shadow: 'rgba(26, 26, 26, 0.3)', gradient: 'linear-gradient(135deg, #444444 0%, #1A1A1A 50%, #000000 100%)' },
];

const FLAGS_WORLD = [
  'br', 'us', 'fr', 'de', 'jp', 'cn', 'gb', 'it', 'ca', 'es', 
  'pt', 'ae', 'kr', 'ch', 'nl', 'au', 'ar', 'mx', 'in', 'be'
];

const COUNTRY_NAMES: Record<string, string> = {
  br: 'Brasil', us: 'Estados Unidos', fr: 'França', de: 'Alemanha', 
  jp: 'Japão', cn: 'China', gb: 'Reino Unido', it: 'Itália', 
  ca: 'Canadá', es: 'Espanha', pt: 'Portugal', ae: 'Emirados Árabes', 
  kr: 'Coreia do Sul', ch: 'Suíça', nl: 'Holanda', au: 'Austrália', 
  ar: 'Argentina', mx: 'México', in: 'Índia', be: 'Bélgica'
};

const SectionDivider: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="w-full h-8 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative w-full max-w-7xl h-[1px]">
        <motion.div 
          style={{ 
            opacity, 
            scaleX,
            background: 'radial-gradient(circle, var(--primary-color) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            boxShadow: `0px 0px 15px var(--primary-color)`
          }}
          className="absolute inset-0 w-full h-full bg-theme-primary"
        />
      </div>
    </div>
  );
};

const Reveal: React.FC<{ 
  children: React.ReactNode, 
  delay?: number, 
  direction?: 'up' | 'down' | 'left' | 'right', 
  distance?: number,
  className?: string
}> = ({ children, delay = 0, direction = 'up', distance = 20, className = "" }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      transition: { duration: 0.6, delay, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [currentTheme, setCurrentTheme] = useState(THEMES[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemePanelOpen, setIsThemePanelOpen] = useState(false);
  const [isLangPanelOpen, setIsLangPanelOpen] = useState(false);
  const [activeFlagIdx, setActiveFlagIdx] = useState(0);
  const [isInteractingWithFlags, setIsInteractingWithFlags] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const t = translations[lang];
  const WHATSAPP_NUMBER = '86999164816';
  const DEMO_SUFFIX = 'Estou vindo do site de demonstração.';
  const DEFAULT_WA_MSG = `Olá, gostaria de agendar uma consulta com o engenheiro. ${DEMO_SUFFIX}`;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', currentTheme.color);
    document.documentElement.style.setProperty('--primary-gradient', currentTheme.gradient);
    document.documentElement.style.setProperty('--primary-shadow', currentTheme.shadow);
    document.documentElement.style.setProperty('--primary-dark', currentTheme.dark);
  }, [currentTheme]);

  useEffect(() => {
    if (isInteractingWithFlags) return;
    const timer = setInterval(() => {
      setActiveFlagIdx((prev) => (prev + 1) % FLAGS_WORLD.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isInteractingWithFlags]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/55${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getFlagUrl = (code: string) => {
    const flagCode = (code === 'pt') ? 'br' : (code === 'en' ? 'us' : code);
    return `https://flagcdn.com/w640/${flagCode}.png`;
  };

  const getDiffIcon = (index: number) => {
    switch (index) {
      case 0: return <Clock size={32} className="text-theme-primary" />;
      case 1: return <HardHat size={32} className="text-theme-primary" />;
      case 2: return <Layers size={32} className="text-theme-primary" />;
      case 3: return <ClipboardList size={32} className="text-theme-primary" />;
      case 4: return <Search size={32} className="text-theme-primary" />;
      case 5: return <Cpu size={32} className="text-theme-primary" />;
      default: return <Star size={32} className="text-theme-primary" />;
    }
  };

  const panel3dVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, x: 0,
      transition: { type: "spring", damping: 25, stiffness: 100 }
    },
    exit: { opacity: 0, x: '100%' }
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-theme-primary origin-left z-[300]" 
        style={{ scaleX, boxShadow: `0px 2px 10px var(--primary-shadow)` }} 
      />

      <div className="relative min-h-screen blueprint-bg overflow-x-hidden">
        <nav className="fixed top-0 left-0 w-full z-50 glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollTo('home')}>
              <HardHat className="text-theme-primary w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex items-center">
                <span className="font-black text-xl sm:text-2xl tracking-tighter leading-none uppercase flex gap-1">
                  <span className="text-white">SUA</span>
                  <span className="text-theme-primary">LOGO</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-6">
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold uppercase tracking-widest text-white/80 mr-4">
                {['home', 'about', 'services', 'diff', 'testimonials'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => scrollTo(section)} 
                    className="hover-text-theme-primary transition-colors relative group py-2"
                  >
                    {(t.nav as any)[section === 'home' ? 'start' : section]}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-theme-primary transition-all group-hover:w-full" />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <button onClick={() => setIsLangPanelOpen(true)} className="p-2.5 text-white/70 bg-white/5 rounded-full border border-white/10 shadow-lg group">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 group-hover:scale-110 transition-transform">
                    <img src={getFlagUrl(lang)} alt={lang} className="w-full h-full object-cover" />
                  </div>
                </button>

                <button onClick={() => setIsThemePanelOpen(true)} className="p-2.5 text-white/70 bg-white/5 rounded-full border border-white/10 shadow-lg">
                  <Palette size={18} />
                </button>

                <button className="lg:hidden p-2.5 text-theme-primary bg-white/5 rounded-full border border-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              <button onClick={() => scrollTo('contact')} className="hidden sm:flex btn-primary-3d px-6 py-2 rounded-sm whitespace-nowrap text-[11px]">
                {t.nav.cta}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 z-[250] bg-[#0b0b0b] flex flex-col items-center justify-center lg:hidden"
            >
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-4 text-white/60">
                <X size={40} />
              </button>
              
              <div className="flex flex-col items-center gap-10">
                {['home', 'about', 'services', 'diff', 'testimonials', 'contact'].map((section, idx) => (
                  <motion.button 
                    key={section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => scrollTo(section)} 
                    className="text-3xl font-black uppercase tracking-tighter text-white active:text-theme-primary"
                  >
                    {(t.nav as any)[section === 'home' ? 'start' : section]}
                  </motion.button>
                ))}
                
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => scrollTo('contact')}
                  className="mt-4 btn-primary-3d px-12 py-5 rounded-xl text-lg font-bold"
                >
                  {t.nav.cta}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(isThemePanelOpen || isLangPanelOpen) && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => {setIsThemePanelOpen(false); setIsLangPanelOpen(false);}} className="fixed inset-0 z-[350] bg-black/80" />
              <motion.div 
                variants={panel3dVariants} initial="hidden" animate="visible" exit="exit"
                className="fixed right-0 top-0 h-full w-full max-w-sm z-[400] bg-[#121212] border-l border-white/10 p-10 overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-10">
                  <h3 className="font-black uppercase tracking-[0.3em] text-xs theme-text">
                    {isThemePanelOpen ? 'Curadoria de Cores' : 'Idiomas Globais'}
                  </h3>
                  <button onClick={() => {setIsThemePanelOpen(false); setIsLangPanelOpen(false);}} className="text-white/20 hover:text-white"><X size={24} /></button>
                </div>
                
                {isThemePanelOpen ? (
                  <div className="grid grid-cols-2 gap-6">
                    {THEMES.map((theme) => (
                      <button key={theme.id} onClick={() => { setCurrentTheme(theme); setIsThemePanelOpen(false); }} className={`flex flex-col items-center gap-4 p-5 rounded-2xl border transition-all ${currentTheme.id === theme.id ? 'border-theme-primary bg-white/5' : 'border-white/5'}`}>
                        <div className="w-16 h-16 rounded-full shadow-2xl" style={{ background: theme.gradient }}></div>
                        <span className="text-[10px] uppercase font-black text-white">{theme.name}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    {(['pt', 'en', 'es', 'jp', 'cn'] as Language[]).map((code) => (
                      <button 
                        key={code} onClick={() => { setLang(code); setIsLangPanelOpen(false); }} 
                        className={`flex items-center justify-between p-6 rounded-2xl border transition-all ${lang === code ? 'border-theme-primary bg-white/5' : 'border-white/5'}`}
                      >
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                <img src={getFlagUrl(code)} alt={code} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-bold text-white uppercase">{code === 'pt' ? 'Português (Brasil)' : code === 'en' ? 'English' : code === 'es' ? 'Español' : code === 'jp' ? '日本語' : '中文'}</span>
                        </div>
                        {lang === code && <Check className="text-theme-primary" size={24} strokeWidth={4} />}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.3 }} transition={{ duration: 2.5 }} src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/80 to-transparent"></div>
          </div>
          <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
            <Reveal direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight uppercase tracking-tighter text-white mb-8">{t.hero.title}</h1>
            </Reveal>
            <Reveal delay={0.4} direction="up">
              <p className="text-base sm:text-lg lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12">{t.hero.subtitle}</p>
            </Reveal>
            <Reveal delay={0.6} direction="up">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button onClick={() => scrollTo('contact')} className="btn-primary-3d px-12 py-5 flex items-center justify-center gap-3">
                  {t.hero.btn1} <ArrowRight size={20} />
                </button>
                <button onClick={() => scrollTo('services')} className="px-12 py-5 border-2 border-theme-primary text-theme-primary font-bold uppercase text-sm rounded-sm hover:bg-theme-primary hover:text-white transition-all shadow-lg">
                  {t.hero.btn2}
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionDivider />

        <section id="about" className="py-24 lg:py-40 relative">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Reveal direction="up">
              <span className="theme-text uppercase tracking-[0.4em] font-black text-xs block mb-6">{t.about.title}</span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black uppercase text-white mb-12 max-w-4xl mx-auto">{t.about.text}</h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-8 mt-16">
              {[
                { title: t.about.mission, text: t.about.missionText, icon: <Target className="text-theme-primary w-8 h-8" /> },
                { title: t.about.vision, text: t.about.visionText, icon: <Eye className="text-theme-primary w-8 h-8" /> },
                { title: 'Valores', text: t.about.valuesText, icon: <Gem className="text-theme-primary w-8 h-8" /> }
              ].map((item, i) => (
                <Reveal key={i} delay={0.2 * i} direction="up">
                  <div className="p-10 tech-card rounded-sm h-full flex flex-col items-center gap-6">
                    <div className="p-4 bg-white/5 rounded-full">{item.icon}</div>
                    <h4 className="font-bold uppercase tracking-widest text-sm text-theme-primary">{item.title}</h4>
                    <p className="text-white/60 text-xs leading-relaxed max-w-[250px]">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="services" className="py-24 lg:py-32 bg-white/5 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <Reveal direction="up">
                <span className="theme-text uppercase tracking-[0.4em] font-bold text-xs block mb-4">Especialidades</span>
                <h2 className="text-3xl lg:text-6xl font-black uppercase text-white">{t.services.title}</h2>
                <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
              </Reveal>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(Object.entries(t.services.items) as [string, { title: string; desc: string }][]).map(([key, area], i) => (
                <Reveal key={key} delay={i * 0.1} direction="up" className="h-full">
                  <div className="tech-card p-10 group relative h-full flex flex-col justify-between items-center text-center overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-theme-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div>
                      <div className="mb-8 opacity-60 flex justify-center">
                        {key === 'civil' && <Building2 size={48} className="text-theme-primary" />}
                        {key === 'family' && <Ruler size={48} className="text-theme-primary" />}
                        {key === 'labor' && <Factory size={48} className="text-theme-primary" />}
                        {key === 'business' && <BarChart size={48} className="text-theme-primary" />}
                        {key === 'criminal' && <Wrench size={48} className="text-theme-primary" />}
                        {key === 'social' && <Layers size={48} className="text-theme-primary" />}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase text-white">{area.title}</h3>
                      <p className="text-white/40 text-sm mb-10">{area.desc}</p>
                    </div>
                    <button onClick={() => openWhatsApp(`${t.services.btn}${area.title}. ${DEMO_SUFFIX}`)} className="text-[10px] uppercase font-bold tracking-widest text-theme-primary flex items-center gap-2 hover:gap-4 transition-all">
                      Orçamento Técnico <ChevronRight size={14} />
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="diff" className="py-24 lg:py-40">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Reveal direction="up">
              <h2 className="text-3xl lg:text-7xl font-black uppercase text-white mb-20">{t.diff.title}</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.diff.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.1} direction="up">
                  <div className="tech-card p-12 flex flex-col items-center gap-6 h-full justify-center">
                    <div className="mb-4">{getDiffIcon(i)}</div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white">{item}</h3>
                    <div className="w-12 h-1 bg-theme-primary opacity-30"></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="testimonials" className="py-24 lg:py-40 bg-white/5 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Reveal direction="up">
              <span className="theme-text uppercase tracking-[0.4em] font-bold text-xs block mb-4">Feedback</span>
              <h2 className="text-3xl lg:text-7xl font-black uppercase text-white mb-20">{t.testimonials.title}</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.2} direction="up">
                  <div className="tech-card p-10 rounded-sm h-full flex flex-col items-center text-center relative group overflow-hidden">
                    <Quote size={40} className="text-theme-primary/20 absolute top-6 left-6" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={16} className="fill-theme-primary text-theme-primary" />
                      ))}
                    </div>
                    <p className="text-white/60 text-lg italic leading-relaxed mb-8 flex-grow">"{item.text}"</p>
                    <div className="w-10 h-[2px] bg-theme-primary mb-4"></div>
                    <h4 className="font-bold uppercase tracking-widest text-white text-sm">{item.name}</h4>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Do Brasil para o Mundo - FOCO CENTRAL ABSOLUTO RESPONSIVO */}
        <SectionDivider />
        <section id="world" className="py-24 lg:py-56 bg-transparent overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-20">
            <div className="text-center mb-24">
              <Reveal direction="up">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Globe className="text-theme-primary w-8 h-8 animate-spin-slow" />
                  <span className="theme-text uppercase tracking-[0.4em] font-bold text-xs">Conexão Global</span>
                </div>
                <h2 className="text-4xl lg:text-8xl font-black uppercase text-white tracking-tighter interactive-title">
                  Do Brasil para o <span className="text-theme-primary">Mundo</span>
                </h2>
              </Reveal>
            </div>

            <div className="relative h-[350px] md:h-[500px] flex items-center justify-center perspective-container">
              {/* O Trilho Centralizado com cálculo responsivo de offset */}
              <motion.div 
                className="flex items-center absolute"
                animate={{
                  // Centralização Magnética baseada no tamanho do item + gap
                  x: isMobile 
                    ? `calc(50vw - 80px - (${activeFlagIdx} * 200px) - (50vw - 50%))`
                    : `calc(50vw - 150px - (${activeFlagIdx} * 340px) - (50vw - 50%))`
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                drag="x"
                dragConstraints={{ 
                  left: isMobile ? -FLAGS_WORLD.length * 200 : -FLAGS_WORLD.length * 340, 
                  right: 340 
                }}
                onDragStart={() => setIsInteractingWithFlags(true)}
                onDragEnd={(_, info) => {
                  setIsInteractingWithFlags(false);
                  const dragOffset = info.offset.x;
                  if (dragOffset > 50) setActiveFlagIdx(prev => Math.max(0, prev - 1));
                  else if (dragOffset < -50) setActiveFlagIdx(prev => Math.min(FLAGS_WORLD.length - 1, prev + 1));
                }}
              >
                {FLAGS_WORLD.map((code, idx) => {
                  const isActive = idx === activeFlagIdx;
                  return (
                    <motion.div
                      key={code}
                      animate={{
                        // Escala reduzida no mobile para manter a visibilidade total
                        scale: isActive ? (isMobile ? 1.4 : 1.8) : 0.6,
                        opacity: isActive ? 1 : 0.1,
                        rotateY: isActive ? 0 : (idx < activeFlagIdx ? 45 : -45),
                        filter: isActive ? 'grayscale(0%) brightness(1.3)' : 'grayscale(100%) brightness(0.4)',
                        zIndex: isActive ? 100 : 10,
                      }}
                      transition={{ type: "spring", stiffness: 120, damping: 15 }}
                      onClick={() => setActiveFlagIdx(idx)}
                      // Largura reduzida no mobile (160px vs 300px)
                      className="w-[160px] h-[100px] md:w-[300px] md:h-[180px] flex-shrink-0 mx-5 relative group cursor-pointer flex items-center justify-center"
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activeGlow"
                          className="absolute inset-0 bg-theme-primary blur-[80px] md:blur-[100px] opacity-40 -z-10" 
                        />
                      )}

                      <motion.div
                        animate={isActive ? {
                          rotateX: [-1, 1, -1],
                          rotateY: [-2, 2, -2],
                          y: [-2, 2, -2]
                        } : {}}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`w-full h-full rounded-xl md:rounded-2xl overflow-hidden border-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-700 ${isActive ? 'border-theme-primary' : 'border-white/5'}`}
                        style={{
                          boxShadow: isActive ? `0 0 50px var(--primary-shadow)` : 'none'
                        }}
                      >
                        <img 
                          src={getFlagUrl(code)} 
                          alt={code} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            className="absolute -bottom-24 md:-bottom-32 left-0 right-0 flex flex-col items-center justify-center text-center w-full pointer-events-none"
                          >
                            <span className="text-[16px] md:text-[22px] font-black uppercase tracking-[0.6em] theme-text whitespace-nowrap block leading-tight">
                              {code.toUpperCase()}
                            </span>
                            <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-white/50 whitespace-nowrap block mt-1">
                              {COUNTRY_NAMES[code]}
                            </span>
                            <div className="w-8 md:w-12 h-1 bg-theme-primary mt-3 rounded-full shadow-[0_0_10px_var(--primary-color)]" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
            
            <div className="mt-24 md:mt-40 flex justify-center items-center gap-2 md:gap-3">
               {FLAGS_WORLD.map((_, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setActiveFlagIdx(idx)}
                  className={`h-1 md:h-1.5 transition-all duration-700 rounded-full ${idx === activeFlagIdx ? 'w-10 md:w-20 bg-theme-primary shadow-[0_0_15px_var(--primary-color)]' : 'w-2 md:w-4 bg-white/5 hover:bg-white/20'}`}
                 />
               ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="contact" className="py-24 lg:py-40">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <Reveal direction="up">
                <h2 className="text-3xl lg:text-7xl font-black uppercase text-white mb-6">{t.contact.title}</h2>
                <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold">Inicie seu projeto com quem entende de alta performance.</p>
              </Reveal>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const msg = `Sua Logo Engenharia: Novo Orçamento\nNome: ${fd.get('name')}\nContato: ${fd.get('whatsapp')}\nProjeto: ${fd.get('message')}\n\n${DEMO_SUFFIX}`;
              openWhatsApp(msg);
            }} className="space-y-8 glass p-8 lg:p-16 rounded-3xl border border-white/10 shadow-2xl relative">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] uppercase font-black text-theme-primary tracking-widest pl-1">{t.contact.name}</label>
                  <input required name="name" type="text" placeholder="Ex: João Silva" className="bg-white/5 border border-white/10 p-5 focus:border-theme-primary transition-all text-sm w-full outline-none text-white rounded-xl" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] uppercase font-black text-theme-primary tracking-widest pl-1">{t.contact.phone}</label>
                  <input required name="whatsapp" type="tel" placeholder="Ex: (86) 99999-9999" className="bg-white/5 border border-white/10 p-5 focus:border-theme-primary transition-all text-sm w-full outline-none text-white rounded-xl" />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase font-black text-theme-primary tracking-widest pl-1">{t.contact.message}</label>
                <textarea required name="message" rows={5} placeholder="Descreva brevemente sua obra..." className="bg-white/5 border border-white/10 p-5 focus:border-theme-primary transition-all text-sm w-full outline-none text-white rounded-xl resize-none"></textarea>
              </div>
              <button type="submit" className="w-full btn-primary-3d py-6 flex items-center justify-center gap-3 rounded-xl">
                <Phone size={20} /> {t.contact.send}
              </button>
            </form>
          </div>
        </section>

        <footer className="py-24 border-t border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex flex-col items-center gap-10 mb-20">
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollTo('home')}>
                <HardHat className="text-theme-primary w-12 h-12" />
                <span className="text-4xl font-black uppercase text-white">SUA<span className="text-theme-primary">LOGO</span></span>
              </div>
              <div className="flex gap-8 items-center justify-center">
                <a href="https://www.instagram.com/eurivancarlospro" target="_blank" className="text-xs font-black uppercase tracking-[0.4em] text-white/40 hover:text-theme-primary transition-all">Instagram</a>
                <a onClick={() => openWhatsApp(DEFAULT_WA_MSG)} className="text-xs font-black uppercase tracking-[0.4em] text-white/40 hover:text-theme-primary transition-all cursor-pointer">WhatsApp</a>
              </div>
            </div>
            <div className="border-t border-white/5 pt-12 text-[10px] text-white/20 uppercase tracking-[0.3em]">
              <p>© 2026 SUA LOGO ENGINEERING. TODOS OS DIREITOS RESERVADOS.</p>
            </div>
          </div>
        </footer>

        <motion.button 
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} 
          onClick={() => openWhatsApp(DEFAULT_WA_MSG)}
          className="fixed bottom-8 right-8 z-[100] w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl"
        >
          <WhatsAppIcon />
        </motion.button>
      </div>
    </>
  );
};

export default App;
