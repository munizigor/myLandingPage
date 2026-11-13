import type { Experience } from "@/types";
import { Section, SectionHeader } from "@/components/ds/section";

const experiences: Experience[] = [
  {
    id: "1",
    role: "Estrategista Líder de Dados",
    company: "Innovatech Dynamics",
    period: "2021 – atual",
    description: [
      "Arquitetou e implementou infraestrutura de dados escalável em plataformas de nuvem (AWS, Azure).",
      "Desenvolveu e implantou modelos de machine learning para análise preditiva, melhorando a precisão das previsões em 25%.",
      "Liderou equipes multifuncionais para entregar soluções orientadas a dados para desafios de negócio.",
      "Conduziu iniciativas de governança e qualidade de dados em toda a organização.",
    ],
    tools: ["AWS", "Azure", "SageMaker", "Python"],
  },
  {
    id: "2",
    role: "Analista de Dados Sênior",
    company: "Future Systems Co.",
    period: "2018 – 2021",
    description: [
      "Realizou análises de dados complexas para identificar tendências, insights e oportunidades de crescimento.",
      "Criou dashboards e relatórios interativos para comunicar descobertas aos stakeholders.",
      "Colaborou com equipes de produto para definir requisitos de dados para novas funcionalidades.",
    ],
    tools: ["Tableau", "Power BI", "SQL"],
  },
  {
    id: "3",
    role: "Engenheiro de Dados",
    company: "DataWeavers Inc.",
    period: "2016 – 2018",
    description: [
      "Projetou, construiu e manteve pipelines de ETL para ingestão e transformação de dados.",
      "Otimizou o desempenho do banco de dados e garantiu a integridade dos dados.",
      "Trabalhou com grandes conjuntos de dados usando Spark e Hadoop.",
    ],
    tools: ["Spark", "Hadoop", "SQL"],
  },
];

export function ExpertiseSection() {
  return (
    <Section id="experiencia">
      <SectionHeader
        eyebrow="Experiência"
        title="Jornada profissional"
        lead="Da engenharia de pipelines à estratégia de dados, em empresas de tecnologia e consultoria."
      />
      <ol className="mt-12">
        {experiences.map((exp) => (
          <li
            key={exp.id}
            className="grid gap-2 border-t border-border py-6 md:grid-cols-[160px_minmax(0,1fr)] md:gap-6"
          >
            <p className="tabular pt-1 font-mono text-data text-muted-foreground">{exp.period}</p>
            <article className="min-w-0">
              <h3 className="text-heading-3 text-foreground">{exp.role}</h3>
              <p className="mt-0.5 text-body font-medium text-primary">{exp.company}</p>
              <ul className="mt-3 grid max-w-measure list-disc gap-2 pl-[18px] text-body text-foreground marker:text-muted-foreground">
                {exp.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              {exp.tools && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
                  {exp.tools.map((t) => (
                    <li
                      key={t}
                      className="rounded-sm border border-border bg-card px-2 py-0.5 font-mono text-[0.8125rem] leading-5 text-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
