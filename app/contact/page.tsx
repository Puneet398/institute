"use client";

import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Youtube,
    Instagram,
    Send,
    MessageSquare,
    Clock
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info & Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                            Let's <span className="gradient-text">Connect</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                            Have questions about our courses or the enrollment process? We're here to help you start your career journey.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner shrink-0">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Our Location</h3>
                                    <p className="text-muted-foreground"># 2240-A, Near Old Grain Market,<br />Near AstroSpace, Rajpura Town, Punjab</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner shrink-0">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Phone Numbers</h3>
                                    <div className="flex flex-col gap-1">
                                        <Link href="tel:9888605627" className="text-muted-foreground hover:text-primary transition-colors">+91 98886-05627</Link>
                                        <Link href="tel:9888605627" className="text-muted-foreground hover:text-primary transition-colors">+91 98886-05627</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner shrink-0">
                                    <Clock size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Working Hours</h3>
                                    <p className="text-muted-foreground">Monday - Saturday: 8:00 AM - 7:00 PM<br />Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-16">
                            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
                            <div className="flex gap-4">
                                <Link
                                    href="https://www.youtube.com/@ImageCTIRajpura"
                                    target="_blank"
                                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-red-600 hover:bg-red-50 transition-all border border-red-100"
                                >
                                    <Youtube size={24} />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/imagectirajpura/"
                                    target="_blank"
                                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-pink-600 hover:bg-pink-50 transition-all border border-pink-100"
                                >
                                    <Instagram size={24} />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all border border-blue-100"
                                >
                                    <MessageSquare size={24} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass p-10 md:p-12 rounded-[3.5rem] shadow-2xl relative"
                    >
                        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                        <h2 className="text-2xl font-bold mb-8">Send an Enquiry</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full p-4 rounded-2xl border border-muted focus:border-primary focus:outline-none bg-white/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000-00000"
                                        className="w-full p-4 rounded-2xl border border-muted focus:border-primary focus:outline-none bg-white/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Interested Course</label>
                                <select className="w-full p-4 rounded-2xl border border-muted focus:border-primary focus:outline-none bg-white/50 appearance-none">
                                    <option>Select a course</option>
                                    <option>Shorthand (Eng/Hindi/Pun)</option>
                                    <option>Typing Mastery</option>
                                    <option>Tally ERP 9 / Prime</option>
                                    <option>Basic Computer Course</option>
                                    <option>Spoken English</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Your Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your career goals..."
                                    className="w-full p-4 rounded-2xl border border-muted focus:border-primary focus:outline-none bg-white/50 resize-none"
                                />
                            </div>

                            <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 mt-4">
                                Send Message
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Placeholder */}
                <section className="mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-xl overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-center p-6 bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors">
                            <div className="glass p-8 rounded-3xl max-w-sm">
                                <MapPin size={48} className="text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Visit Our Campus</h3>
                                <p className="text-sm text-muted-foreground font-medium mb-6">We are located in the heart of Rajpura. Use Google Maps for precise navigation.</p>
                                <Link
                                    href="https://www.google.com/maps/search/?api=1&query=Image+Computer+%26+Typing+Institute+Rajpura"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                                >
                                    Open in Maps
                                    <Send size={16} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
