export type ServiceIconName =
  | 'sparkles'
  | 'code'
  | 'bot'
  | 'network'
  | 'globe'
  | 'building'
  | 'smartphone'
  | 'rocket'
  | 'shield';

export type ServiceItem = {
  category: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: ServiceIconName;
  href?: string;
};

export const services: ServiceItem[] = [
  {
    category: 'DEVELOPMENT',
    title: 'Custom Software Development',
    description: 'Solusi software yang dirancang sesuai alur kerja dan tujuan bisnis spesifik perusahaan Anda.',
    capabilities: ['Business Applications', 'Internal Systems', 'Management Systems', 'System Integration', 'Software Modernization'],
    icon: 'code',
    href: '/services/software-development/',
  },
  {
    category: 'AUTOMATION',
    title: 'Workflow & Automation',
    description: 'Implementasi AI untuk otomasi cerdas dan predictive analytics guna menyederhanakan operasional.',
    capabilities: ['Process Automation', 'Workflow Management', 'AI Automation', 'System Integration', 'Data Automation'],
    icon: 'bot',
    href: '/services/analytic-solutions/',
  },
  {
    category: 'DEVELOPMENT',
    title: 'Website Development',
    description: 'Membangun website scalable berperforma tinggi dengan arsitektur modern dan user journey yang berorientasi pada konversi.',
    capabilities: ['Corporate Website', 'Business Website', 'Web Application', 'E-Commerce', 'Website Revamp'],
    icon: 'globe',
    href: '/services/web-development/',
  },
  {
    category: 'ENTERPRISE',
    title: 'ERP Customization',
    description: 'Menyesuaikan modul ERP dengan alur kerja bisnis untuk kontrol, akurasi, dan kelincahan operasional yang lebih baik.',
    capabilities: ['Module Customization', 'Workflow Customization', 'System Integration', 'Reporting & Analytics', 'Data Migration'],
    icon: 'building',
    href: '/services/odoo-erp-customization/',
  },
  {
    category: 'DEVELOPMENT',
    title: 'Mobile App Development',
    description: 'Merancang dan membangun aplikasi mobile berperforma tinggi untuk Android dan iOS dengan backend yang scalable.',
    capabilities: ['Android Apps', 'iOS Apps', 'Cross-Platform Apps', 'Backend Integration', 'App Enhancement'],
    icon: 'smartphone',
    href: '/services/app-design/',
  },
  {
    category: 'PRODUCT',
    title: 'MVP Development',
    description: 'Meluncurkan versi produk yang ringkas dan teruji untuk memvalidasi kebutuhan pasar serta mempercepat iterasi produk.',
    capabilities: ['Product Planning', 'Prototyping', 'MVP Development', 'Product Testing', 'Product Scaling'],
    icon: 'rocket',
    href: '/services/product-design/',
  },
  {
    category: 'SUPPORT',
    title: 'Maintenance & Support',
    description: 'Dukungan berkelanjutan untuk menjaga aplikasi tetap aman, stabil, dan berkinerja optimal.',
    capabilities: ['Application Maintenance', 'Technical Support', 'Performance Monitoring', 'Security Updates', 'Continuous Improvement'],
    icon: 'shield',
    href: '/services/cloud-devops/',
  },
];
