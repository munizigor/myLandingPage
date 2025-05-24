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

export interface Skill {
  id: string;
  name: string;
  Icon?: LucideIcon | React.ElementType;
  category: 'Data Science & Analytics' | 'Development & Engineering' | 'Tools & Platforms' | 'Certifications & Learning';
  level?: number; // Optional: 1-5 or 1-100 for proficiency bar
}
