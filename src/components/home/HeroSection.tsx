import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Download, TrendingUp, BadgeCheck } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-b from-muted/50 to-background">
            {/* Decorative skew bg */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 dark:bg-navy/10 skew-x-12 origin-top-right translate-x-32 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left">
                        <Badge
                            variant="outline"
                            className="mb-8 px-4 py-1.5 rounded-full bg-navy/10 dark:bg-white/10 text-navy dark:text-white border-navy/20 dark:border-white/20 font-semibold"
                        >
                            <TrendingUp className="h-4 w-4 text-gold mr-2" />
                            Cybersecurity & AI Platforms
                        </Badge>

                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.15]">
                            Michael Martin Pagaran
                            <br />
                            <span className="text-navy dark:text-gold block mt-2">
                                Senior Full-Stack Engineer
                            </span>
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground block mt-3">
                                specializing in Cybersecurity and AI-Driven Platforms
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Versatile Full-Stack Developer and Technical Project Manager
                            with 3+ years experience driving software innovation. I bridge
                            the gap between technical execution and strategic vision,
                            focusing on architectural integrity and high-velocity delivery.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-navy hover:bg-navy/90 dark:bg-gold dark:text-navy dark:hover:bg-gold-dark text-white shadow-xl shadow-navy/20 dark:shadow-gold/20 rounded-lg"
                            >
                                <a href="#projects">
                                    View Strategic Work
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-lg"
                            >
                                <a href="#contact">
                                    Download Resume
                                    <Download className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right – Profile image */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto group">
                            {/* Decorative blur */}
                            <div className="absolute inset-0 bg-navy rounded-full -rotate-6 opacity-10 blur-xl transition-all duration-500 group-hover:rotate-0 group-hover:opacity-20" />
                            {/* Decorative ring */}
                            <div className="absolute inset-0 border-[3px] border-gold/40 rounded-full rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-100" />
                            {/* Avatar */}
                            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-card z-10">
                                <Avatar className="w-full h-full rounded-full">
                                    <AvatarImage
                                        src="/images/IMG_5246s2x2.jpg"
                                        alt="Michael Martin Pagaran - Business First Developer"
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                    />
                                    <AvatarFallback className="text-4xl font-display font-bold">
                                        MP
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute bottom-4 -right-4 lg:-right-10 bg-card p-5 rounded-xl shadow-2xl border border-border flex items-center gap-4 z-20">
                                <div className="p-3 bg-gold/10 rounded-full">
                                    <BadgeCheck className="h-6 w-6 text-gold" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                                        Leadership
                                    </p>
                                    <p className="text-base font-bold text-foreground">
                                        Technical &amp; Product
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
