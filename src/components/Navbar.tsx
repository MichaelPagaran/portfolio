"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
];

const sectionLinks = [
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
];

export function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    const isHome = pathname === "/";

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
                                Michael Martin<span className="text-gold"> Pagaran</span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === link.href
                                    ? "text-gold border-b-2 border-gold"
                                    : "text-muted-foreground hover:text-gold"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {isHome &&
                            sectionLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href.replace("/", "")}
                                    className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}

                        {/* Dark mode toggle */}
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                aria-label="Toggle dark mode"
                                className="ml-2"
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-5 w-5 text-amber" />
                                ) : (
                                    <Moon className="h-5 w-5 text-muted-foreground" />
                                )}
                            </Button>
                        )}

                        <Button
                            asChild
                            className="ml-4 bg-navy hover:bg-navy/90 dark:bg-gold dark:text-navy dark:hover:bg-gold-dark text-white rounded-full shadow-lg"
                        >
                            <a href="/#contact">Contact</a>
                        </Button>
                    </div>

                    {/* Mobile */}
                    <div className="flex md:hidden items-center gap-2">
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                aria-label="Toggle dark mode"
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-5 w-5 text-amber" />
                                ) : (
                                    <Moon className="h-5 w-5 text-muted-foreground" />
                                )}
                            </Button>
                        )}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-72">
                                <SheetTitle className="font-display text-lg">
                                    Michael<span className="text-gold">.biz</span>
                                </SheetTitle>
                                <nav className="flex flex-col gap-4 mt-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className={`text-base font-medium transition-colors ${pathname === link.href
                                                ? "text-gold"
                                                : "text-muted-foreground hover:text-gold"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    {isHome &&
                                        sectionLinks.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href.replace("/", "")}
                                                onClick={() => setOpen(false)}
                                                className="text-base font-medium text-muted-foreground hover:text-gold transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
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
