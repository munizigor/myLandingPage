import { Award, BrainCircuit, Cloud, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Skill, SkillCategory } from "@/types";
import { Section, SectionHeader } from "@/components/ds/section";
import { SkillScale } from "@/components/ds/skill-scale";

const skills: Skill[] = [
  { id: "ds1", name: "Modelagem estatística", category: "Ciência de dados e analytics", level: 4 },
  { id: "ds2", name: "Machine learning supervisionado e não supervisionado", category: "Ciência de dados e analytics", level: 4 },
  { id: "ds3", name: "Visualização de dados (Tableau, Power BI)", category: "Ciência de dados e analytics", level: 5 },
  { id: "ds4", name: "Big Data (Spark, Hadoop)", category: "Ciência de dados e analytics", level: 4 },
  { id: "ds5", name: "Análise preditiva", category: "Ciência de dados e analytics", level: 4 },

  { id: "dev1", name: "Python (Pandas, NumPy, scikit-learn)", category: "Desenvolvimento e engenharia", level: 5 },
  { id: "dev2", name: "Bancos de dados SQL e NoSQL", category: "Desenvolvimento e engenharia", level: 4 },
  { id: "dev3", name: "Pipelines de ETL", category: "Desenvolvimento e engenharia", level: 4 },
  { id: "dev4", name: "APIs REST e GraphQL", category: "Desenvolvimento e engenharia", level: 3 },

  { id: "tool1", name: "AWS (S3, EC2, Redshift, SageMaker)", category: "Ferramentas e plataformas", level: 4 },
  { id: "tool2", name: "Microsoft Azure (Blob, VMs, Synapse)", category: "Ferramentas e plataformas", level: 4 },
  { id: "tool3", name: "Docker e Kubernetes", category: "Ferramentas e plataformas", level: 3 },
  { id: "tool4", name: "Git e CI/CD", category: "Ferramentas e plataformas", level: 4 },

  { id: "cert1", name: "AWS Certified Solutions Architect", category: "Certificações" },
  { id: "cert2", name: "Google Professional Data Engineer", category: "Certificações" },
  { id: "cert3", name: "Certified ScrumMaster (CSM)", category: "Certificações" },
];

const groups: { name: SkillCategory; Icon: LucideIcon }[] = [
  { name: "Ciência de dados e analytics", Icon: BrainCircuit },
  { name: "Desenvolvimento e engenharia", Icon: Code },
  { name: "Ferramentas e plataformas", Icon: Cloud },
];

export function SkillsSection() {
  const certifications = skills.filter((s) => s.category === "Certificações");

  return (
    <Section id="habilidades" tone="muted">
      <SectionHeader
        eyebrow="Habilidades"
        title="Habilidades e proficiências"
        lead="Cinco níveis, de básico a referência, em vez de porcentagens que parecem precisas sem ser."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {groups.map(({ name, Icon }) => (
          <article key={name} className="min-w-0 rounded-lg border border-border bg-card p-6 shadow-ds-sm">
            <h3 className="flex items-center gap-2 text-heading-3 text-foreground">
              <Icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              {name}
            </h3>
            <div className="mt-3">
              {skills
                .filter((s) => s.category === name && s.level)
                .map((s) => (
                  <SkillScale key={s.id} name={s.name} level={s.level!} />
                ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:gap-6">
        <h3 className="flex shrink-0 items-center gap-2 text-label text-foreground">
          <Award className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden="true" />
          Certificações
        </h3>
        <ul className="flex flex-wrap gap-2">
          {certifications.map((c) => (
            <li
              key={c.id}
              className="rounded-sm bg-accent-soft px-2 py-0.5 font-mono text-[0.8125rem] font-medium leading-5 text-accent"
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
