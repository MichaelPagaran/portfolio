import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skills } from "@/data/portfolio";
import { Code, Blocks, Cloud, Users } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="h-6 w-6" />,
    Blocks: <Blocks className="h-6 w-6" />,
    Cloud: <Cloud className="h-6 w-6" />,
    Users: <Users className="h-6 w-6" />,
};

const colorMap: Record<string, { bg: string; hoverBg: string; text: string; dot: string }> = {
    blue: {
        bg: "bg-blue-100 dark:bg-blue-900/20",
        hoverBg: "group-hover:bg-navy group-hover:text-white",
        text: "text-navy dark:text-blue-400",
        dot: "bg-navy dark:bg-gold",
    },
    purple: {
        bg: "bg-purple-100 dark:bg-purple-900/20",
        hoverBg: "group-hover:bg-purple-600 group-hover:text-white",
        text: "text-purple-600 dark:text-purple-400",
        dot: "bg-purple-500",
    },
    cyan: {
        bg: "bg-cyan-100 dark:bg-cyan-900/20",
        hoverBg: "group-hover:bg-cyan-600 group-hover:text-white",
        text: "text-cyan-600 dark:text-cyan-400",
        dot: "bg-cyan-500",
    },
    orange: {
        bg: "bg-orange-100 dark:bg-orange-900/20",
        hoverBg: "group-hover:bg-orange-600 group-hover:text-white",
        text: "text-orange-600 dark:text-orange-400",
        dot: "bg-orange-500",
    },
};

export function SkillsSection() {
    return (
        <section className="py-20 bg-card dark:bg-muted/20" id="skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                        Core Technical Mastery
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Leveraging a comprehensive stack to build enterprise-grade
                        applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => {
                        const colors = colorMap[skill.color];
                        return (
                            <Card
                                key={skill.title}
                                className="group border border-border hover:border-gold/50 transition-all hover:shadow-lg hover:-translate-y-1 bg-muted/30 dark:bg-card"
                            >
                                <CardHeader className="pb-3">
                                    <div
                                        className={`w-12 h-12 ${colors.bg} ${colors.text} ${colors.hoverBg} rounded-xl flex items-center justify-center mb-4 transition-colors`}
                                    >
                                        {iconMap[skill.icon]}
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-foreground">
                                        {skill.title}
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground text-sm">
                                        {skill.items.map((item) => (
                                            <li key={item} className="flex items-center">
                                                <span
                                                    className={`w-1.5 h-1.5 ${colors.dot} rounded-full mr-2 flex-shrink-0`}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
