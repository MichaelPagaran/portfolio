import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { projects } from "@/data/portfolio";
import {
    LayoutDashboard,
    ShoppingCart,
    CloudCog,
    Code,
    Link as LinkIcon,
    ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    LayoutDashboard: <LayoutDashboard className="h-16 w-16 text-white/20" />,
    ShoppingCart: <ShoppingCart className="h-16 w-16 text-white/20" />,
    CloudCog: <CloudCog className="h-16 w-16 text-white/20" />,
};

export function ProjectsSection() {
    return (
        <section className="py-20 bg-muted/30 dark:bg-muted/10" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground">
                            Technical highlights from recent work.
                        </p>
                    </div>
                    <a
                        href="/case-studies"
                        className="hidden md:flex items-center text-gold font-medium hover:text-gold-dark transition-colors"
                    >
                        View all projects{" "}
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="overflow-hidden border border-border hover:shadow-lg transition-all group bg-card"
                        >
                            {/* Gradient thumbnail */}
                            <div className="h-48 relative group-hover:opacity-90 transition-opacity">
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                                >
                                    {iconMap[project.icon]}
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg text-foreground mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                            </CardContent>
                            <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-border mt-0 pt-4">
                                <div className="flex gap-2">
                                    <Code className="h-5 w-5 text-muted-foreground hover:text-gold cursor-pointer transition-colors" />
                                    <LinkIcon className="h-5 w-5 text-muted-foreground hover:text-gold cursor-pointer transition-colors" />
                                </div>
                                <span className="text-xs font-mono text-muted-foreground">
                                    {project.techStack}
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
