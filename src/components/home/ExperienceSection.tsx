import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
    return (
        <section className="py-20" id="experience">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
                </div>

                <div className="relative timeline-line pl-8 space-y-12">
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative group">
                            {/* Timeline dot */}
                            <div
                                className={`absolute -left-[25px] mt-1.5 w-5 h-5 rounded-full border-4 border-background z-10 transition-colors ${exp.isCurrent
                                        ? "bg-navy dark:bg-gold"
                                        : "bg-muted-foreground/40 group-hover:bg-gold"
                                    }`}
                            />

                            <Card className="border border-border hover:shadow-md transition-shadow bg-card">
                                <CardContent className="p-6">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                                        <div>
                                            <h3 className="font-display text-xl font-bold text-foreground">
                                                {exp.role}
                                            </h3>
                                            <p className="text-gold font-medium">{exp.company}</p>
                                        </div>
                                        <Badge
                                            variant="secondary"
                                            className="mt-2 sm:mt-0 w-fit rounded-full text-xs"
                                        >
                                            {exp.period}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        {exp.description}
                                    </p>
                                    {exp.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="outline"
                                                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
