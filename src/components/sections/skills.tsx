import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cpu, Database, BarChart3, BrainCircuit, Award, Leaf, Droplets, Zap, Code, Layers, Cloud } from "lucide-react";
import type { Skill } from '@/types';
import { Progress } from "@/components/ui/progress";


const skillsData: Skill[] = [
  // Data Science & Analytics
  { id: 'ds1', name: 'Modelagem Estatística', Icon: BrainCircuit, category: 'Ciência de Dados & Analytics', level: 90 },
  { id: 'ds2', name: 'Machine Learning (Supervisionado & Não Supervisionado)', Icon: Cpu, category: 'Ciência de Dados & Analytics', level: 85 },
  { id: 'ds3', name: 'Visualização de Dados (Tableau, Power BI)', Icon: BarChart3, category: 'Ciência de Dados & Analytics', level: 95 },
  { id: 'ds4', name: 'Análise de Big Data (Spark, Hadoop)', Icon: Layers, category: 'Ciência de Dados & Analytics', level: 80 },
  { id: 'ds5', name: 'Análise Preditiva', Icon: Zap, category: 'Ciência de Dados & Analytics', level: 88 },

  // Development & Engineering
  { id: 'dev1', name: 'Python (Pandas, NumPy, Scikit-learn)', Icon: Code, category: 'Desenvolvimento & Engenharia', level: 95 },
  { id: 'dev2', name: 'Bancos de Dados SQL & NoSQL', Icon: Database, category: 'Desenvolvimento & Engenharia', level: 90 },
  { id: 'dev3', name: 'Desenvolvimento de Pipelines ETL', Icon: Droplets, category: 'Desenvolvimento & Engenharia', level: 85 },
  { id: 'dev4', name: 'Desenvolvimento de APIs (REST, GraphQL)', Icon: Code, category: 'Desenvolvimento & Engenharia', level: 75 },
  
  // Tools & Platforms
  { id: 'tool1', name: 'AWS (S3, EC2, Redshift, SageMaker)', Icon: Cloud, category: 'Ferramentas & Plataformas', level: 90 },
  { id: 'tool2', name: 'Microsoft Azure (Blob, VMs, Synapse)', Icon: Cloud, category: 'Ferramentas & Plataformas', level: 80 },
  { id: 'tool3', name: 'Docker & Kubernetes', Icon: Layers, category: 'Ferramentas & Plataformas', level: 70 },
  { id: 'tool4', name: 'Git & CI/CD', Icon: Code, category: 'Ferramentas & Plataformas', level: 85 },

  // Certifications & Learning
  { id: 'cert1', name: 'AWS Certified Solutions Architect', Icon: Award, category: 'Certificações & Aprendizado' },
  { id: 'cert2', name: 'Google Professional Data Engineer', Icon: Award, category: 'Certificações & Aprendizado' },
  { id: 'cert3', name: 'Certified ScrumMaster (CSM)', Icon: Award, category: 'Certificações & Aprendizado' },
];

const skillCategories = [
  'Ciência de Dados & Analytics',
  'Desenvolvimento & Engenharia',
  'Ferramentas & Plataformas',
  'Certificações & Aprendizado',
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        Habilidades & Proficiências
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map(categoryName => (
          <Card key={categoryName} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <CardHeader>
              <CardTitle className="text-xl text-accent flex items-center gap-2">
                {categoryName === 'Ciência de Dados & Analytics' && <BrainCircuit className="h-6 w-6" />}
                {categoryName === 'Desenvolvimento & Engenharia' && <Code className="h-6 w-6" />}
                {categoryName === 'Ferramentas & Plataformas' && <Cloud className="h-6 w-6" />}
                {categoryName === 'Certificações & Aprendizado' && <Award className="h-6 w-6" />}
                {categoryName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {skillsData.filter(skill => skill.category === categoryName).map(skill => (
                  <li key={skill.id} className="flex flex-col group">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3">
                        {skill.Icon && <skill.Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />}
                        <span className="font-medium text-foreground/90">{skill.name}</span>
                      </div>
                      {skill.level && (
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      )}
                    </div>
                    {skill.level && (
                      <Progress value={skill.level} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" />
                    )}
                    {!skill.level && ( // For certifications or skills without a level
                      <Badge variant="secondary" className="w-fit bg-accent/20 text-accent-foreground border-accent/50">
                        {skill.category === 'Certificações & Aprendizado' ? 'Certificado' : 'Proficiente'}
                      </Badge>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
