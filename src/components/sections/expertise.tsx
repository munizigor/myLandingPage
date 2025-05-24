import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays } from "lucide-react";
import type { Experience } from '@/types';

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Estrategista Líder de Dados',
    company: 'Innovatech Dynamics',
    period: '2021 - Presente',
    description: [
      'Arquitetou e implementou infraestrutura de dados escalável em plataformas de nuvem (AWS, Azure).',
      'Desenvolveu e implantou modelos de machine learning para análise preditiva, melhorando a precisão das previsões em 25%.',
      'Liderou equipes multifuncionais para entregar soluções orientadas a dados para desafios de negócios chave.',
      'Defendeu iniciativas de governança e qualidade de dados em toda a organização.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    logoAiHint: 'tech company logo',
  },
  {
    id: '2',
    role: 'Analista de Dados Sênior',
    company: 'Future Systems Co.',
    period: '2018 - 2021',
    description: [
      'Realizou análises de dados complexas para identificar tendências, insights e oportunidades de crescimento.',
      'Criou dashboards e relatórios interativos para comunicar descobertas aos stakeholders.',
      'Colaborou com equipes de produto para definir requisitos de dados para novas funcionalidades.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    logoAiHint: 'corporate logo',
  },
  {
    id: '3',
    role: 'Engenheiro de Dados',
    company: 'DataWeavers Inc.',
    period: '2016 - 2018',
    description: [
      'Projetou, construiu e manteve pipelines de ETL para ingestão e transformação de dados.',
      'Otimizou o desempenho do banco de dados e garantiu a integridade dos dados.',
      'Trabalhou com grandes conjuntos de dados usando tecnologias de big data como Spark e Hadoop.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    logoAiHint: 'abstract logo',
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        Jornada Profissional
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <div className="md:flex">
              {exp.logoUrl && (
                <div className="md:w-1/4 p-6 flex items-center justify-center bg-secondary/30">
                   <Image
                    src={exp.logoUrl}
                    alt={`Logo da ${exp.company}`}
                    width={80}
                    height={80}
                    className="rounded-md object-contain"
                    data-ai-hint={exp.logoAiHint}
                  />
                </div>
              )}
              <div className={exp.logoUrl ? "md:w-3/4" : "w-full"}>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{exp.role}</CardTitle>
                  <CardDescription className="text-lg text-accent flex items-center gap-2">
                    <Briefcase className="h-5 w-5" /> {exp.company}
                  </CardDescription>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" /> {exp.period}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-outside space-y-2 pl-5 text-foreground/90">
                    {exp.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
