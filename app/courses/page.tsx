"use client";

import { motion } from "framer-motion";
import {
    Keyboard,
    BookOpen,
    Laptop,
    Languages,
    Award,
    CheckCircle2,
    Clock,
    Target,
    Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const courseCategories = [
    {
        title: "Shorthand & Typing",
        courses: [
            {
                name: "English Shorthand",
                description: "Specialized training for SSC, High Court, and other Govt. exams.",
                duration: "6-12 Months",
                icon: BookOpen,
            },
            {
                name: "Hindi / Punjabi Shorthand",
                description: "Regional language stenography for state government jobs.",
                duration: "6-12 Months",
                icon: BookOpen,
            },
            {
                name: "Fast Typing (Eng/Hindi/Pun)",
                description: "Touch typing methods to reach speed above 40-50 WPM.",
                duration: "3-6 Months",
                icon: Keyboard,
            },
        ]
    },
    {
        title: "Computer Applications",
        courses: [
            {
                name: "Basic Computer Course",
                description: "MS Office, Internet, and operating system fundamentals.",
                duration: "3 Months",
                icon: Laptop,
            },
            {
                name: "Tally ERP 9 / Prime",
                description: "Advanced accounting with GST, TDS, and Payroll management.",
                duration: "3-4 Months",
                icon: Award,
            },
            {
                name: "DCA (Diploma)",
                description: "Yearly diploma in computer applications and management.",
                duration: "1 Year",
                icon: Laptop,
            },
        ]
    },
    {
        title: "Language & Skills",
        courses: [
            {
                name: "Spoken English",
                description: "Grammar, Vocabulary, and Group Discussion modules.",
                duration: "3 Months",
                icon: Languages,
            },
            {
                name: "Job Work Training",
                description: "Practical training on real-world data entry and clerical tasks.",
                duration: "2 Months",
                icon: CheckCircle2,
            },
        ]
    }
];

export default function CoursesPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        Professional Curriculum
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
                    >
                        Our <span className="gradient-text">Courses</span>
                    </motion.h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Choose from a wide range of skill-based courses designed to make you industry-ready and secure your dream career.
                    </p>
                </div>

                <div className="space-y-20">
                    {courseCategories.map((category, catIdx) => (
                        <section key={category.title}>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold mb-8 flex items-center gap-4"
                            >
                                <div className="w-10 h-1 bg-primary rounded-full" />
                                {category.title}
                            </motion.h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.courses.map((course, idx) => {
                                    const Icon = course.icon;
                                    return (
                                        <motion.div
                                            key={course.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-primary"
                                        >
                                            <div className="mb-6 p-4 rounded-2xl bg-primary/5 text-primary group-hover:scale-110 transition-transform w-fit">
                                                <Icon size={28} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{course.name}</h3>
                                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                                {course.description}
                                            </p>
                                            <div className="flex items-center gap-4 pt-4 border-t border-muted">
                                                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase">
                                                    <Clock size={14} className="text-primary" />
                                                    {course.duration}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Value Proposition */}
                <section className="mt-32 glass p-12 md:p-20 rounded-[3rem] text-center">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { label: "Expert Faculty", icon: Users, desc: "Learn from teachers with decades of experience." },
                            { label: "Focused Learning", icon: Target, desc: "Small batches for personalized attention." },
                            { label: "Job Assistance", icon: Award, desc: "Dedicated support for government job applications." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-muted-foreground font-medium mb-6">Not sure which course is right for you?</p>
                    <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                        Get Free Career Counseling
                    </button>
                </div>
            </div>
        </div>
    );
}
