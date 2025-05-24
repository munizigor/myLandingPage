import type { LucideIcon } from 'lucide-react';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  logoUrl?: string; // URL for company logo placeholder
  logoAiHint?: string;
}

export type SkillCategory = 
  | 'Ciência de Dados & Analytics' 
  | 'Desenvolvimento & Engenharia' 
  | 'Ferramentas & Plataformas' 
  | 'Certificações & Aprendizado';

export interface Skill {
  id: string;
  name: string;
  Icon?: LucideIcon | React.ElementType;
  category: SkillCategory;
  level?: number; // Optional: 1-5 or 1-100 for proficiency bar
}
