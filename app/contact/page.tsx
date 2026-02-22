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
                                        {/* <Link href="tel:9888605627" className="text-muted-foreground hover:text-primary transition-colors">+91 98886-05627</Link> */}
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

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass p-4 rounded-[3.5rem] shadow-2xl relative overflow-hidden h-[500px] lg:h-full min-h-[450px]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110082.25822095766!2d76.56982958178713!3d30.43410135665086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fdbf05f7ff727%3A0x422d249b1de508bd!2sImage%20computer%20%26%20typing%20institute%20Rajpura!5e0!3m2!1sen!2sin!4v1771790502495!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "2.5rem" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Image Computer & Typing Institute Location"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
