export type CaseStudyItem = {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

export const caseStudies: CaseStudyItem[] = [
  {
    title: 'E-Commerce System',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: 'Scalable e-commerce platform designed to support high-traffic retail operations and smoother digital transactions.',
    link: '/post/e-commerce-system',
  },
  {
    title: 'Smart Manufacturing',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: 'Integrated manufacturing control platform built to improve production visibility, workflow coordination, and operational efficiency.',
    link: '/post/smart-manufacturing',
  },
  {
    title: 'Bill Of Material',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?auto=format&fit=crop&q=80&w=1600',
    description: 'Digital BOM system for aluminium manufacturing with stronger planning, costing accuracy, and end-to-end traceability.',
    link: '/post/software-bill-of-material-aluminium-industry',
  },
  {
    title: 'Document Management System',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1771922748624-b205cf5d002d?q=80&w=1420&auto=format',
    description: 'Centralized document management solution for secure storage, faster retrieval, controlled access, and more efficient approval workflows.',
    link: '/post/document-management-system',
  },
  {
    title: 'FinTech App',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Secure financial services application focused on intuitive experience, reliability, and trusted transaction workflows.',
    link: '/post/fintech-app-platform',
  },
];
