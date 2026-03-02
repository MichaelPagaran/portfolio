import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/portfolio";
import {
    Building2,
    ShieldCheck,
    Shield,
    LockKeyhole,
    TrendingUp,
    Users,
    PiggyBank,
    Brain,
    Zap,
    Landmark,
    ArrowRight,
    Plus,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Michael Martin Pagaran",
    description:
        "Strategic Project Case Studies – Bridging the gap between technical complexity and business value.",
};

const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="h-6 w-6" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6" />,
    Shield: <Shield className="h-6 w-6" />,
    LockKeyhole: <LockKeyhole className="h-6 w-6" />,
};

const iconColorMap: Record<string, string> = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-800",
    emerald:
        "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800",
    teal: "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 border-teal-100 dark:border-teal-800",
    purple:
        "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-100 dark:border-purple-800",
};

function renderMarkdownBold(text: string) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}

export default function CaseStudiesPage() {
    const standardStudies = caseStudies.filter((s) => !s.isFlagship);
    const flagship = caseStudies.find((s) => s.isFlagship);

    return (
        <div className="relative min-h-screen">
            {/* Grid pattern bg */}
            <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none opacity-60" />

            <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                        Strategic Project{" "}
                        <span className="text-teal dark:text-teal-light">Case Studies</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Bridging the gap between technical complexity and business value. A
                        curated portfolio of initiatives demonstrating leadership, strategic
                        pivots, and measurable bottom-line impact.
                    </p>
                </div>

                {/* Project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {/* Standard cards – first two */}
                    {standardStudies.slice(0, 2).map((study) => (
                        <Card
                            key={study.title}
                            className="group border border-border hover:shadow-lg hover:border-teal/40 dark:hover:border-teal-light/40 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            <CardContent className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className={`p-2 rounded-lg border ${iconColorMap[study.iconColor]}`}
                                    >
                                        {iconMap[study.icon]}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-teal dark:group-hover:text-teal-light transition-colors">
                                            {study.title}
                                        </h3>
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {study.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border border-border">
                                        <div className="flex items-center gap-2 mb-2 text-teal dark:text-teal-light font-semibold text-sm uppercase tracking-wide">
                                            {study.strategicLabel.includes("Pivot") ? (
                                                <Zap className="h-4 w-4" />
                                            ) : (
                                                <Brain className="h-4 w-4" />
                                            )}
                                            {study.strategicLabel}
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {study.strategicDescription}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1">
                                            <TrendingUp className="h-3.5 w-3.5" /> Business Impact
                                        </h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            {study.impacts.map((impact, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                                                    <span>{renderMarkdownBold(impact)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="px-8 pb-8 pt-0 border-t border-border mt-auto pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {study.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}

                    {/* Flagship card – SIEM */}
                    {flagship && (
                        <article className="md:col-span-2 group relative bg-card rounded-xl border-l-4 border-l-teal dark:border-l-teal-light border border-border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal/5 via-transparent to-transparent opacity-30 pointer-events-none" />
                            <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 relative z-10">
                                <div className="md:w-2/3">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <Badge className="bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light border-0 font-bold uppercase tracking-wider text-xs">
                                            Flagship Initiative
                                        </Badge>
                                        <span className="text-xs font-semibold text-muted-foreground">
                                            {flagship.category}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-foreground mb-4">
                                        {flagship.title}
                                    </h3>
                                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                                        {flagship.strategicDescription}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border border-border">
                                            <h4 className="text-xs font-bold text-teal dark:text-teal-light uppercase mb-2 flex items-center gap-2">
                                                <Users className="h-3.5 w-3.5" /> Leadership
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {flagship.leadershipDescription &&
                                                    renderMarkdownBold(flagship.leadershipDescription)}
                                            </p>
                                        </div>
                                        <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border border-border">
                                            <h4 className="text-xs font-bold text-teal dark:text-teal-light uppercase mb-2 flex items-center gap-2">
                                                <PiggyBank className="h-3.5 w-3.5" /> Bottom Line
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {flagship.bottomLineDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/3 flex flex-col justify-between border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
                                    <div>
                                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                                            Core Technology
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {flagship.coreTechPrimary?.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    className="bg-foreground text-background font-bold"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {flagship.coreTechSecondary?.map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-sm font-bold text-teal dark:text-teal-light hover:text-teal/80 transition-colors group-hover:translate-x-1 duration-300"
                                        >
                                            Read Case Study{" "}
                                            <ArrowRight className="ml-1 h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )}

                    {/* Standard card – last one */}
                    {standardStudies.slice(2).map((study) => (
                        <Card
                            key={study.title}
                            className="group border border-border hover:shadow-lg hover:border-teal/40 dark:hover:border-teal-light/40 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            <CardContent className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className={`p-2 rounded-lg border ${iconColorMap[study.iconColor]}`}
                                    >
                                        {iconMap[study.icon]}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-teal dark:group-hover:text-teal-light transition-colors">
                                            {study.title}
                                        </h3>
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {study.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border border-border">
                                        <div className="flex items-center gap-2 mb-2 text-teal dark:text-teal-light font-semibold text-sm uppercase tracking-wide">
                                            <Landmark className="h-4 w-4" />
                                            {study.strategicLabel}
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {study.strategicDescription}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1">
                                            <TrendingUp className="h-3.5 w-3.5" /> Business Impact
                                        </h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            {study.impacts.map((impact, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                                                    <span>{renderMarkdownBold(impact)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="px-8 pb-8 pt-0 border-t border-border mt-auto pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {study.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}

                    {/* Upcoming placeholder */}
                    <Card className="group border border-dashed border-muted-foreground/30 bg-transparent hover:border-teal/50 hover:bg-muted/30 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
                        <div className="h-14 w-14 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Plus className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold text-muted-foreground">
                            Upcoming Case Studies
                        </h3>
                        <p className="text-sm text-muted-foreground/70 mt-2 max-w-xs">
                            AI-driven documentation generator with focus on ROI analysis.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
