import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays } from "lucide-react";
import type { Experience } from '@/types';

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Lead Data Strategist',
    company: 'Innovatech Dynamics',
    period: '2021 - Present',
    description: [
      'Architected and implemented scalable data infrastructure on cloud platforms (AWS, Azure).',
      'Developed and deployed machine learning models for predictive analytics, improving forecast accuracy by 25%.',
      'Led cross-functional teams to deliver data-driven solutions for key business challenges.',
      'Championed data governance and quality initiatives across the organization.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    logoAiHint: 'tech company logo',
  },
  {
    id: '2',
    role: 'Senior Data Analyst',
    company: 'Future Systems Co.',
    period: '2018 - 2021',
    description: [
      'Performed complex data analysis to identify trends, insights, and opportunities for growth.',
      'Created interactive dashboards and reports to communicate findings to stakeholders.',
      'Collaborated with product teams to define data requirements for new features.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    logoAiHint: 'corporate logo',
  },
  {
    id: '3',
    role: 'Data Engineer',
    company: 'DataWeavers Inc.',
    period: '2016 - 2018',
    description: [
      'Designed, built, and maintained ETL pipelines for data ingestion and transformation.',
      'Optimized database performance and ensured data integrity.',
      'Worked with large datasets using big data technologies like Spark and Hadoop.',
    ],
    logoUrl: 'https://placehold.co/100x100.png',
    logoAiHint: 'abstract logo',
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        Professional Journey
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <div className="md:flex">
              {exp.logoUrl && (
                <div className="md:w-1/4 p-6 flex items-center justify-center bg-secondary/30">
                   <Image
                    src={exp.logoUrl}
                    alt={`${exp.company} logo`}
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
