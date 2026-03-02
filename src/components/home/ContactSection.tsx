import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-20" id="contact">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-navy to-slate-800 dark:from-card dark:to-slate-900 rounded-3xl p-8 sm:p-16 text-center shadow-2xl relative overflow-hidden border dark:border-gold/20">
                    {/* Decorative blurs */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gold/20 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-navy/40 blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="font-display text-3xl font-bold text-white mb-4">
                            Ready to build something robust?
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                            Whether you need a full-stack overhaul, AI integration, or technical
                            leadership for your next big project, I&apos;m just a message away.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-navy hover:bg-gray-100 rounded-lg"
                            >
                                <a href="mailto:mmpagaran64@gmail.com">
                                    <Mail className="mr-2 h-5 w-5 text-navy" />
                                    Send Email
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="text-white border-white/30 hover:bg-white/10 rounded-lg bg-transparent"
                            >
                                <a
                                    href="https://www.linkedin.com/in/michael-martin-pagaran-67a459203/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
