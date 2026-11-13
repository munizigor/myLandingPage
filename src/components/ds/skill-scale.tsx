import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/types";

export const LEVEL_NAMES: Record<SkillLevel, string> = {
  1: "Básico",
  2: "Intermediário",
  3: "Avançado",
  4: "Especialista",
  5: "Referência",
};

/** Escala de proficiência em cinco segmentos com o nome do nível. */
export function SkillScale({ name, level }: { name: string; level: SkillLevel }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 border-b border-border py-3 last:border-b-0">
      <div className="min-w-0">
        <div className="text-body text-foreground">{name}</div>
        <div className="font-mono text-[0.8125rem] leading-5 text-muted-foreground">{LEVEL_NAMES[level]}</div>
      </div>
      <div className="flex gap-[3px]" role="img" aria-label={`${level} de 5`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={cn(
              "h-2 w-[18px] rounded-[2px]",
              i <= level ? "bg-primary" : "bg-secondary ring-1 ring-inset ring-border"
            )}
          />
        ))}
      </div>
    </div>
  );
}
