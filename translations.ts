
import { TranslationSchema, Language } from './types';

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: { start: 'Home', about: 'Quem Somos', services: 'Serviços', diff: 'Diferenciais', testimonials: 'Depoimentos', contact: 'Contato', cta: 'Solicitar Orçamento' },
    hero: {
      title: 'Construindo com qualidade, engenharia e compromisso com resultados.',
      subtitle: 'Soluções completas, seguras e eficientes para obras residenciais, comerciais e industriais. Excelência técnica do projeto à execução.',
      btn1: 'Falar com um engenheiro',
      btn2: 'Conhecer nossos serviços'
    },
    about: {
      title: 'Quem Somos',
      text: 'Atuamos no setor da construção e engenharia com foco em qualidade, prazos e inovação. Nossa equipe técnica é altamente qualificada para transformar projetos em estruturas sólidas.',
      mission: 'Missão', missionText: 'Entregar obras seguras e inovadoras que superem as expectativas de nossos clientes.',
      vision: 'Visão', visionText: 'Ser referência global em engenharia de alta performance e sustentabilidade.',
      values: 'Valores', valuesText: 'Segurança, Rigor Técnico, Ética e Sustentabilidade.'
    },
    services: {
      title: 'Soluções em Engenharia',
      btn: 'Quero um orçamento para ',
      items: {
        civil: { title: 'Construção Civil', desc: 'Execução de obras residenciais e comerciais com alto padrão de acabamento.' },
        family: { title: 'Projetos Técnicos', desc: 'Cálculo estrutural, arquitetônico e elétrico com precisão técnica.' },
        labor: { title: 'Obras Industriais', desc: 'Galpões, plantas fabris e infraestrutura de alta complexidade.' },
        business: { title: 'Gestão de Obras', desc: 'Fiscalização e gerenciamento completo para garantir prazos e custos.' },
        criminal: { title: 'Reformas Premium', desc: 'Modernização de ambientes com foco em design e funcionalidade.' },
        social: { title: 'Laudos Técnicos', desc: 'Inspeções e consultoria especializada em patologias de estruturas.' }
      }
    },
    diff: {
      title: 'Por que escolher a nossa empresa?',
      items: [
        'Compromisso com prazos',
        'Engenharia qualificada',
        'Materiais de alta qualidade',
        'Gestão eficiente de obras',
        'Atendimento transparente',
        'Tecnologia de ponta'
      ]
    },
    testimonials: {
      title: 'Depoimentos',
      items: [
        { name: 'Ricardo Almeida', text: 'Engenharia de primeira. O projeto residencial foi executado rigorosamente no prazo e com um nível de acabamento impecável. Recomendamos fortemente.' },
        { name: 'Carla Silveira', text: 'A gestão foi fundamental para a inauguração da nossa planta industrial em tempo recorde. Profissionais extremamente técnicos.' },
        { name: 'Shopping Center Premium', text: 'Encontraram soluções estruturais inovadoras que reduziram nossos custos em 15% sem comprometer a segurança da obra.' }
      ]
    },
    ctaFinal: {
      title: 'Pronto para iniciar sua obra?',
      subtitle: 'Fale com nossa equipe técnica e tenha o suporte de engenheiros experientes.',
      btn: 'Solicitar orçamento agora'
    },
    contact: {
      title: 'Contato Técnico',
      name: 'Nome completo',
      phone: 'WhatsApp / Telefone',
      message: 'Fale sobre seu projeto',
      send: 'Enviar para Engenharia',
      placeholder: 'Gostaria de um orçamento para o serviço de: '
    }
  },
  en: {
    nav: { start: 'Home', about: 'About', services: 'Services', diff: 'Difference', testimonials: 'Testimonials', contact: 'Contact', cta: 'Get a Quote' },
    hero: {
      title: 'Building with quality, engineering, and commitment to results.',
      subtitle: 'Complete, safe, and efficient solutions for residential, commercial, and industrial works. Technical excellence from design to execution.',
      btn1: 'Talk to an engineer',
      btn2: 'Explore our services'
    },
    about: {
      title: 'About Us',
      text: 'We operate in the construction and engineering sector focusing on quality, deadlines, and innovation. Our technical team is highly qualified to transform designs into solid structures.',
      mission: 'Mission', missionText: 'Deliver safe and innovative works that exceed our clients\' expectations.',
      vision: 'Vision', visionText: 'To be a global reference in high-performance engineering and sustainability.',
      values: 'Values', valuesText: 'Safety, Technical Rigor, Ethics, and Sustainability.'
    },
    services: {
      title: 'Engineering Solutions',
      btn: 'I want a quote for ',
      items: {
        civil: { title: 'Civil Construction', desc: 'Execution of residential and commercial works with a high standard of finish.' },
        family: { title: 'Technical Design', desc: 'Structural, architectural, and electrical calculations with technical precision.' },
        labor: { title: 'Industrial Works', desc: 'Warehouses, manufacturing plants, and high-complexity infrastructure.' },
        business: { title: 'Project Management', desc: 'Inspection and complete management to ensure deadlines and costs.' },
        criminal: { title: 'Premium Renovation', desc: 'Modernization of environments focusing on design and functionality.' },
        social: { title: 'Technical Reports', desc: 'Inspections and specialized consultancy in structural pathologies.' }
      }
    },
    diff: {
      title: 'Why choose our company?',
      items: [
        'Commitment to deadlines',
        'Qualified engineering',
        'High quality materials',
        'Efficient project management',
        'Transparent service',
        'Cutting-edge technology'
      ]
    },
    testimonials: {
      title: 'Testimonials',
      items: [
        { name: 'Ricardo Almeida', text: 'Top-notch engineering. The residential project was executed strictly on time and with an impeccable level of finish. Highly recommended.' },
        { name: 'Carla Silveira', text: 'Management was essential for the inauguration of our industrial plant in record time. Extremely technical professionals.' },
        { name: 'Premium Shopping Center', text: 'They found innovative structural solutions that reduced our costs by 15% without compromising the safety of the work.' }
      ]
    },
    ctaFinal: {
      title: 'Ready to start your construction?',
      subtitle: 'Talk to our technical team and get support from experienced engineers.',
      btn: 'Request a quote now'
    },
    contact: {
      title: 'Technical Contact',
      name: 'Full Name',
      phone: 'WhatsApp / Phone',
      message: 'Tell us about your project',
      send: 'Send to Engineering',
      placeholder: 'I would like a quote for: '
    }
  },
  es: {
    nav: { start: 'Inicio', about: 'Nosotros', services: 'Servicios', diff: 'Diferenciales', testimonials: 'Testimonios', contact: 'Contacto', cta: 'Pedir Presupuesto' },
    hero: {
      title: 'Construyendo con qualidade, ingeniería y compromiso con resultados.',
      subtitle: 'Soluciones completas, seguras e eficientes para obras residenciales, comerciales e industriales. Excelencia técnica del projeto a la ejecución.',
      btn1: 'Hablar con un ingeniero',
      btn2: 'Conocer servicios'
    },
    about: {
      title: 'Quiénes Somos',
      text: 'Actuamos en el sector de la construcción con enfoque en calidad y plazos. Nuestro equipo técnico transforma projetos en estructuras sólidas.',
      mission: 'Misión', missionText: 'Entregar obras seguras e innovadoras que superen las expectativas.',
      vision: 'Visión', visionText: 'Ser referencia global en ingeniería de alto rendimiento.',
      values: 'Valores', valuesText: 'Seguridad, Rigor Técnico, Ética.'
    },
    services: {
      title: 'Soluciones de Ingeniería',
      btn: 'Quiero un presupuesto para ',
      items: {
        civil: { title: 'Construcción Civil', desc: 'Ejecución de obras residenciales y comerciales con alto estándar.' },
        family: { title: 'Projetos Técnicos', desc: 'Cálculo estrutural y arquitectónico con precisión técnica.' },
        labor: { title: 'Obras Industriais', desc: 'Plantas industriales e infraestructura de alta complejidad.' },
        business: { title: 'Gestión de Obras', desc: 'Gerenciamiento completo para garantizar plazos y custos.' },
        criminal: { title: 'Reformas Premium', desc: 'Modernización de ambientes con foco en diseño.' },
        social: { title: 'Informes Técnicos', desc: 'Inspecciones y consultoría especializada en estruturas.' }
      }
    },
    diff: {
      title: '¿Por qué elegir nossa empresa?',
      items: [
        'Compromiso con los plazos',
        'Ingeniería calificada',
        'Materiales de alta calidad',
        'Gestão eficiente de obras',
        'Atendimento transparente',
        'Tecnologia de punta'
      ]
    },
    testimonials: {
      title: 'Testimonios',
      items: [
        { name: 'Ricardo Almeida', text: 'Ingeniería de primer nivel. El projeto residencial se ejecutó puntualmente y con un acabado impecable. Muy recomendable.' },
        { name: 'Carla Silveira', text: 'La gestión fue clave para la inauguración de nuestra planta industrial en tiempo récord. Profesionales muy técnicos.' },
        { name: 'Shopping Premium', text: 'Encontraron soluciones estruturales que bajaron los costos un 15% sin arriesgar la seguridad de la obra.' }
      ]
    },
    ctaFinal: {
      title: '¿Listo para iniciar su obra?',
      subtitle: 'Hable con nuestro equipo y reciba soporte técnico.',
      btn: 'Pedir presupuesto ahora'
    },
    contact: {
      title: 'Contacto Técnico',
      name: 'Nombre completo',
      phone: 'WhatsApp / Teléfono',
      message: 'Cuéntenos sobre su projeto',
      send: 'Enviar a Ingeniería',
      placeholder: 'Me gustaría un presupuesto para: '
    }
  },
  jp: {
    nav: { start: 'ホーム', about: '私たちについて', services: 'サービス', diff: '特長', testimonials: 'お客様の声', contact: 'お問い合わせ', cta: '見積もりを依頼する' },
    hero: {
      title: '品質、エンジニアリング、そして結果へのコミットメントを持って建設します。',
      subtitle: '住宅、商業、産業向けの完全で安全、かつ効率的なソリューション。設計から施工まで技術的な卓越性を提供。',
      btn1: 'エンジニアに相談する',
      btn2: 'サービスを見る'
    },
    about: {
      title: '会社概要',
      text: '品質、納期、革新に焦点を当てた建設・エンジニアリング分野で活動。専門チームが設計を強固な構造物へと変貌させます。',
      mission: '使命', missionText: '期待を超える安全で革新的な工事を提供します。',
      vision: 'ビジョン', visionText: '高性能エンジニアリングと持続可能性のグローバルリーダー。',
      values: '価値観', valuesText: '安全、技術的厳格さ、倫理。'
    },
    services: {
      title: 'エンジニアリング・ソリューション',
      btn: '見積もりを希望する： ',
      items: {
        civil: { title: '土木・建築', desc: '高品質な仕上げによる住宅および商業施設の施工。' },
        family: { title: '技術設計', desc: '技術的な精密さによる構造、建築、電気計算。' },
        labor: { title: '産業工事', desc: '倉庫、製造工場、高難度のインフラ整備。' },
        business: { title: 'プロジェクト管理', desc: '納期とコストを保証する完全な管理。' },
        criminal: { title: '高級リフォーム', desc: 'デザインと機能に焦点を当てた環境の近代化。' },
        social: { title: '技術報告書', desc: '構造病理学における専門的な検査とコンサルティング。' }
      }
    },
    diff: {
      title: 'なぜ当社を選ぶのですか？',
      items: [
        '納期厳守へのコミットメント',
        '資格を持つエンジニアリング',
        '高品質な素材',
        '効率的な工事管理',
        '透明性のある対応',
        '最先端テクノロジー'
      ]
    },
    testimonials: {
      title: 'お客様の声',
      items: [
        { name: 'Ricardo Almeida', text: '最高峰のエンジニアリング。住宅プロジェクトは納期通り、完璧な仕上がりで完成しました。強くお勧めします。' },
        { name: 'Carla Silveira', text: '記録的な速さで工場を稼働させるために、管理は不可欠でした。非常に技術力の高いプロフェッショナルです。' },
        { name: 'Premium Shopping Center', text: '安全性に妥協することなく、構造コストを15%削減する革新的なソリューションを提案してくれました。' }
      ]
    },
    ctaFinal: {
      title: '建設を開始する準備はできていますか？',
      subtitle: '技術チームに相談し、経験豊富なエンジニアのサポートを受けてください。',
      btn: '今すぐ見積もりを依頼'
    },
    contact: {
      title: '技術相談',
      name: 'フルネーム',
      phone: 'WhatsApp / 電話番号',
      message: 'プロジェクトについて教えてください',
      send: 'エンジニアリングチームへ送信',
      placeholder: '以下の見積もりを希望します： '
    }
  },
  cn: {
    nav: { start: '首页', about: '关于我们', services: '业务领域', diff: '核心优势', testimonials: '客户评价', contact: '联系我们', cta: '获取报价' },
    hero: {
      title: '以品质、工程和结果承诺，打造卓越建筑。',
      subtitle: '为住宅、商业和工业工程提供完整、安全、高效的解决方案。从设计到施工的卓越技术。',
      btn1: '咨询工程师',
      btn2: '了解服务'
    },
    about: {
      title: '关于我们',
      text: '我们专注于质量、进度和创新。我们的专业团队致力于将设计蓝图转化为坚固的建筑实体。',
      mission: '使命', missionText: '交付安全、创新的工程，超越客户期望。',
      vision: '愿景', visionText: '成为高性能工程和可持续发展的全球标杆。',
      values: '价值观', valuesText: '安全、技术严谨、职业道德。'
    },
    services: {
      title: '工程解决方案',
      btn: '我想咨询： ',
      items: {
        civil: { title: '土木建设', desc: '高标准交付住宅和商业工程。' },
        family: { title: '技术设计', desc: '精准的结构、建筑和机电工程计算。' },
        labor: { title: '工业工程', desc: '厂房、生产车间及高复杂度基础设施。' },
        business: { title: '工程管理', desc: '全程监控，确保工期与预算控制。' },
        criminal: { title: '高端改造', desc: '专注设计与功能的空间现代化改造。' },
        social: { title: '技术报告', desc: '结构病理学专业检测与咨询。' }
      }
    },
    diff: {
      title: '为什么选择我们的公司？',
      items: [
        '严守工期承诺',
        '专业工程团队',
        '高品质建筑材料',
        '高效施工管理',
        '透明的服务流程',
        '尖端施工技术'
      ]
    },
    testimonials: {
      title: '客户评价',
      items: [
        { name: 'Ricardo Almeida', text: '顶尖的工程水准。住宅项目严格按时交付，装修细节无可挑剔。强烈推荐。' },
        { name: 'Carla Silveira', text: '管理对于我们工厂在破纪录时间内投产至关重要。非常专业。' },
        { name: 'Premium Shopping Center', text: '他们发现了创新的结构方案，在不牺牲安全的前提下降低了15%的成本。' }
      ]
    },
    ctaFinal: {
      title: '准备好开始您的工程了吗？',
      subtitle: '联系我们的技术团队，获得资深工程师的支持。',
      btn: '立即申请报价'
    },
    contact: {
      title: '技术咨询',
      name: '姓名',
      phone: '联系电话',
      message: '项目简述',
      send: '发送给工程师',
      placeholder: '我想咨询以下业务： '
    }
  }
};
