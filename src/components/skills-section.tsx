import {
  Code2,
  Layers,
  Server,
  Smartphone,
  Cloud,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillsByCategory, type Skill } from "@/data/skills";

const categories: {
  key: string;
  name: string;
  icon: LucideIcon;
}[] = [
  { key: "languages", name: "Languages", icon: Code2 },
  { key: "frontend", name: "Frontend", icon: Layers },
  { key: "backend", name: "Backend", icon: Server },
  { key: "mobile", name: "Mobile", icon: Smartphone },
  { key: "devops", name: "DevOps", icon: Cloud },
  { key: "marketing", name: "Marketing", icon: TrendingUp },
  { key: "tools", name: "Tools", icon: Wrench },
];

const levelWidth: Record<Skill["level"], string> = {
  beginner: "w-1/4",
  intermediate: "w-1/2",
  advanced: "w-3/4",
  expert: "w-full",
};

export function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
      {categories.map((category) => {
        const skills = skillsByCategory[category.key] || [];
        if (skills.length === 0) return null;

        const Icon = category.icon;

        return (
          <div
            key={category.key}
            className="rounded-2xl border-2 border-border/50 bg-card/60 p-6 sm:p-7"
          >
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-foreground tracking-tight">
                {category.name}
              </h3>
            </div>

            <ul className="space-y-4">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground tabular-nums shrink-0">
                      {skill.years} yr
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-primary/80 transition-all ${levelWidth[skill.level]}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
