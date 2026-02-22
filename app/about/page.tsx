"use client";

import { motion } from "framer-motion";
import {
    History,
    Target,
    Award,
    ShieldCheck,
    Users2,
    Quote
} from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Story Section */}
                <section className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                                Empowering Minds Since <span className="gradient-text">2016</span>
                            </h1>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Founded with a vision to bridge the skill gap in Rajpura, Image Computer & Typing Institute has grown from a humble beginning into a premier destination for technical education.
                                </p>
                                <p>
                                    Under the leadership of <span className="text-foreground font-bold italic">Shakuntala Rani</span>, we have dedicated ourselves to providing quality training in shorthand, typing, and professional computer applications. Our Certified ISO 9001:2015 status is a testament to our commitment to international quality standards.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white"
                        >
                            <img
                                src="/images/institute.png"
                                alt="Image Institute Exterior"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                                <span className="text-sm font-bold text-white uppercase tracking-widest">9+ Years of Excellence</span>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Mission / Vision Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            title: "Our Mission",
                            icon: Target,
                            text: "To provide accessible, high-quality technical training that enables students to secure meaningful employment in both government and private sectors."
                        },
                        {
                            title: "Our Vision",
                            icon: ShieldCheck,
                            text: "To become the leading digital skill center in North India, known for academic excellence and student success stories."
                        },
                        {
                            title: "Core Values",
                            icon: Award,
                            text: "Integrity, excellence, and a student-centric approach. We believe every individual has the potential to excel with the right guidance."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-10 rounded-3xl border-t-4 border-primary"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-inner">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Professional Recognition */}
                <section className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white mb-20 shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    <div className="max-w-3xl mx-auto relative z-10">
                        <Award size={64} className="mx-auto mb-8 text-white/50" />
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 italic">ISO 9001:2015 Certified</h2>
                        <p className="text-xl text-primary-foreground/80 leading-relaxed mb-0 font-medium">
                            Our institute maintains rigorous standards of quality management. We ensure our curriculum, teaching methods, and student assessment processes meet international benchmarks.
                        </p>
                    </div>
                </section>

                {/* Team / Leadership */}
                <section className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-bold text-xs uppercase mb-8">
                            <Users2 size={14} />
                            Leadership Team
                        </div>
                        <div className="relative inline-block mb-8 group">
                            <div className="w-48 h-48 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl relative">
                                <img src="/images/owner.png" alt="Director" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-3 rounded-2xl shadow-lg z-10">
                                <Quote size={20} />
                            </div>
                        </div>

                        <h3 className="text-3xl font-extrabold mb-2">Shakuntala Rani</h3>
                        <p className="text-primary font-bold tracking-widest uppercase text-sm mb-6">Director & Founder</p>
                        <p className="text-muted-foreground italic leading-loose">
                            "Education is the most powerful weapon which you can use to change the world. At Image Institute, we don't just teach software; we build careers and confidence."
                        </p>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
