export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tools?: string[];
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type SkillCategory = 
  | 'Ciência de dados e analytics'
  | 'Desenvolvimento e engenharia'
  | 'Ferramentas e plataformas'
  | 'Certificações';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level?: SkillLevel; // 1 Básico, 2 Intermediário, 3 Avançado, 4 Especialista, 5 Referência
}
