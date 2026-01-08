
export type Language = 'pt' | 'en' | 'es' | 'jp' | 'cn';

export interface TranslationSchema {
  nav: {
    start: string;
    about: string;
    services: string;
    diff: string;
    testimonials: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    btn1: string;
    btn2: string;
  };
  about: {
    title: string;
    text: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    values: string;
    valuesText: string;
  };
  services: {
    title: string;
    btn: string;
    items: {
      civil: { title: string; desc: string };
      family: { title: string; desc: string };
      labor: { title: string; desc: string };
      business: { title: string; desc: string };
      criminal: { title: string; desc: string };
      social: { title: string; desc: string };
    };
  };
  diff: {
    title: string;
    items: string[];
  };
  testimonials: {
    title: string;
    items: { name: string; text: string }[];
  };
  ctaFinal: {
    title: string;
    subtitle: string;
    btn: string;
  };
  contact: {
    title: string;
    name: string;
    phone: string;
    message: string;
    send: string;
    placeholder: string;
  };
}
