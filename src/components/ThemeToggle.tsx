"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className={`w-20 h-10 rounded-full bg-muted animate-pulse ${className || ""}`} />;
    }

    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`group relative w-20 h-10 bg-muted rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 overflow-hidden flex-shrink-0 border border-border cursor-pointer hover:border-gold/60 hover:shadow-md ${className || ""}`}
        >
            {/* Dark background overlay for dark mode transition */}
            <div
                className={`absolute inset-0 bg-slate-900 transition-opacity duration-500 ${isDark ? "opacity-100" : "opacity-0"}`}
            />

            <div className="relative flex items-center justify-between h-full w-full px-1.5">
                {/* Sun Icon (Left Side) */}
                <div
                    className={`z-10 transition-all duration-500 ${isDark ? "text-slate-400 opacity-40 scale-90" : "text-amber scale-100"}`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Moon Icon (Right Side) */}
                <div
                    className={`z-10 transition-all duration-500 ${isDark ? "text-cyan-400 scale-100" : "text-slate-400 opacity-40 scale-90"}`}
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                </div>
            </div>

            {/* Sliding Knob */}
            <div
                className={`absolute top-1 left-1 w-8 h-8 rounded-full shadow-md z-20 transition-transform duration-500 ease-in-out flex items-center justify-center border border-border/50
                    ${isDark ? "translate-x-10 bg-slate-800" : "translate-x-0 bg-white"}`}
            >
                {/* Active Icon inside Knob */}
                <div className="relative flex items-center justify-center w-full h-full">
                    <svg
                        className={`absolute w-4 h-4 text-amber transition-all duration-300 ${isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
                        fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                    >
                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <svg
                        className={`absolute w-4 h-4 text-cyan-400 transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
                        fill="currentColor" viewBox="0 0 24 24"
                    >
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                </div>
            </div>
        </button>
    );
}
