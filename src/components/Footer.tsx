import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Separator className="mb-8 opacity-0" />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/">
                            <span className="font-display font-bold text-xl tracking-tight text-foreground">
                                Michael<span className="text-gold">.biz</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                            © {new Date().getFullYear()} Michael Martin Pagaran Portfolio. All
                            rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/MichaelPagaran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-gold transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/michael-martin-pagaran-67a459203/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-gold transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
