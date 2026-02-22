"use client";

import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin, Youtube, Instagram, Facebook, ArrowUp } from "lucide-react";


import { Logo } from "@/components/Logo";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl transition-all group-hover:scale-105 group-hover:border-white/40">
                                <img src="/images/logo.png" alt="Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
                            </div>
                        </Link>

                        <p className="text-sm leading-relaxed text-slate-400">
                            Shaping futures in Rajpura since 2016. Certified ISO 9001:2015 institute providing professional shorthand, typing, and computer training.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.youtube.com/@ImageCTIRajpura" target="_blank" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                                <Youtube size={20} />
                            </Link>
                            <Link href="https://www.instagram.com/imagectirajpura/" target="_blank" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://www.facebook.com/imagecti/" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
                        <ul className="space-y-4">
                            {["Home", "Courses", "Status", "About", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}
                                        className="text-sm hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <div className="w-1 h-1 bg-primary/40 rounded-full" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Top Courses</h4>
                        <ul className="space-y-4 text-sm">
                            <li>Shorthand (Eng/Hindi/Pun)</li>
                            <li>Typing Mastery</li>
                            <li>Tally ERP 9 / Prime</li>
                            <li>Basic Computer Course</li>
                            <li>Spoken English</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Find Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm leading-relaxed">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <Link
                                    href="https://www.google.com/maps/search/?api=1&query=Image+Computer+%26+Typing+Institute+Rajpura"
                                    target="_blank"
                                    className="hover:text-primary transition-colors"
                                >
                                    # 2240-A, Near Old Grain Market, Rajpura Town, Punjab
                                </Link>

                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Phone size={18} className="text-primary shrink-0" />
                                <Link href="tel:9888605627" className="hover:text-primary transition-colors">+91 98886-05627</Link>
                            </li>
                            {/* <li className="flex items-center gap-3 text-sm">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span className="text-slate-400 italic">imagecti.rajpura@gmail.com</span>
                            </li> */}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Image Computer & Typing Institute. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="/admin" className="text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-primary transition-colors italic">
                            Staff Login
                        </Link>
                        <button
                            onClick={scrollToTop}
                            className="bg-slate-800 p-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-lg"
                        >
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
