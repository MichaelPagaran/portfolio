"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// The ordered sections to display in the main navigation
const sectionLinks = [
    { label: "Home", href: "/", id: "" }, // Top of page
    { label: "Skills", href: "/#skills", id: "skills" },
    { label: "Experience", href: "/#experience", id: "experience" },
    { label: "Projects", href: "/#projects", id: "projects" },
];

export function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            // If we are at the very top, set active to the empty id (Home)
            if (window.scrollY < 100) {
                setActiveSection("");
                return;
            }

            // Find all section elements
            const sections = sectionLinks
                .map(link => link.id)
                .filter(id => id !== "")
                .map(id => document.getElementById(id))
                .filter((el): el is HTMLElement => el !== null);

            // Determine which section is currently active based on scroll position
            let current = "";
            for (const section of sections) {
                const sectionTop = section.offsetTop;
                // Highlight section when it's just about to hit the top third of the viewport
                if (window.scrollY >= sectionTop - window.innerHeight / 3) {
                    current = section.id;
                }
            }

            setActiveSection(current);
        };

        // Attach scroll listener
        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = pathname === "/";

    // Helper to determine if a link is currently active
    const isActive = (linkHref: string, linkId: string) => {
        if (!isHome) {
            return pathname === linkHref;
        }

        if (linkId === "") {
            return activeSection === "";
        }

        return activeSection === linkId;
    };

    return (
        <nav className="sticky top-0 z-50 glass-effect bg-background/90 border-b border-border transition-all duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                        <Avatar className="h-9 w-9 border-2 border-border shadow-sm">
                            <AvatarImage
                                src="/images/IMG_5246s2x2.jpg"
                                alt="Michael Martin Pagaran"
                            />
                            <AvatarFallback className="text-xs font-bold">MP</AvatarFallback>
                        </Avatar>
                        <div className="hidden sm:block">
                            <span className="font-display font-bold text-lg tracking-tight text-foreground leading-tight">
                                MMP<span className="text-gold">.dev</span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {isHome ? (
                            sectionLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.href, link.id)
                                        ? "text-gold border-b-2 border-gold"
                                        : "text-muted-foreground hover:text-gold"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))
                        ) : (
                            <Link
                                href="/"
                                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
                            >
                                Home
                            </Link>
                        )}

                        <div className="h-6 w-px bg-border mx-2" /> {/* Divider */}

                        {/* "Case Studies" Button */}
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className={`ml-2 border-gold/50 hover:bg-gold/10 hover:text-gold text-foreground transition-all flex items-center gap-1.5 ${pathname === "/case-studies" ? "bg-gold/10 text-gold border-gold" : ""}`}
                        >
                            <Link href="/case-studies">
                                Case Studies
                                <Sparkles className="w-3.5 h-3.5 text-gold" />
                            </Link>
                        </Button>

                        {/* Dark mode toggle */}
                        {mounted && <ThemeToggle className="ml-4" />}

                        <Button
                            asChild
                            className="ml-4 bg-navy hover:bg-navy/90 dark:bg-gold dark:text-navy dark:hover:bg-gold-dark text-white rounded-full shadow-lg"
                        >
                            <a href="/#contact">Contact</a>
                        </Button>
                    </div>

                    {/* Mobile */}
                    <div className="flex md:hidden items-center gap-2">
                        {mounted && <ThemeToggle />}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-72 p-6 flex flex-col">
                                <SheetHeader className="text-left mb-4">
                                    <SheetTitle className="font-display text-xl">
                                        MMP<span className="text-gold">.dev</span>
                                    </SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-5">
                                    {isHome ? (
                                        sectionLinks.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                className={`text-base font-medium transition-colors ${isActive(link.href, link.id)
                                                    ? "text-gold"
                                                    : "text-muted-foreground hover:text-gold"
                                                    }`}
                                            >
                                                {link.label}
                                            </a>
                                        ))
                                    ) : (
                                        <Link
                                            href="/"
                                            onClick={() => setOpen(false)}
                                            className="text-base font-medium text-muted-foreground hover:text-gold transition-colors"
                                        >
                                            Home
                                        </Link>
                                    )}

                                    <div className="h-px bg-border my-2" /> {/* Divider */}

                                    <Link
                                        href="/case-studies"
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-2 text-base font-medium transition-colors ${pathname === "/case-studies" ? "text-gold" : "text-muted-foreground hover:text-gold"}`}
                                    >
                                        Case Studies
                                        <Sparkles className="w-4 h-4 text-gold" />
                                    </Link>

                                    <Button
                                        asChild
                                        className="mt-4 bg-navy hover:bg-navy/90 dark:bg-gold dark:text-navy dark:hover:bg-gold-dark text-white rounded-full"
                                    >
                                        <a href="/#contact" onClick={() => setOpen(false)}>
                                            Contact
                                        </a>
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
