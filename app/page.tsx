"use client";

import { motion } from "framer-motion";
import {
  Keyboard,
  BookOpen,
  Laptop,
  Languages,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  ShieldCheck
} from "lucide-react";
import { CourseCard } from "@/components/CourseCard";
import Link from "next/link";

const courses = [
  {
    title: "Shorthand",
    description: "Master Stenography in English, Hindi, and Punjabi. Specialized training for government job exams.",
    icon: BookOpen,
  },
  {
    title: "Typing Mastery",
    description: "Expert guidance in English, Punjabi, and Hindi typing. Boost your speed and accuracy to 40+ WPM.",
    icon: Keyboard,
  },
  {
    title: "Computer Courses",
    description: "From Basic Computer Skills to advanced HTML and C / C++. Build a strong foundation in tech.",
    icon: Laptop,
  },
  {
    title: "Tally ERP 9",
    description: "Comprehensive accounting course covering GST, Inventory management, and Payroll.",
    icon: Award,
  },
  {
    title: "Spoken English",
    description: "Improve your communication skills, grammar, and confidence for a global career.",
    icon: Languages,
  },
  {
    title: "Job Works",
    description: "We provide professional typing, data entry, and project services with high accuracy.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20 px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">

          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-blue-400/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full sm:mt-0 md:mt-0  -mt-100">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6"
            >
              Certified ISO 9001:2015 Institute
            </motion.span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Shaping Your <span className="gradient-text">Future</span> In Computing
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Image Computer & Typing Institute, Rajpura. The destination for Shorthand, Typing, and Professional Computer Courses since 2016.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                Our Courses
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/status"
                className="inline-flex items-center justify-center gap-2 glass px-8 py-4 rounded-2xl text-lg font-bold shadow-lg hover:bg-white/80 transition-all hover:-translate-y-1 active:scale-95"
              >
                Track Status
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-muted flex items-center justify-center overflow-hidden">
                    <Users className="text-muted-foreground" size={16} />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium">
                <span className="font-bold text-primary">1000+</span> Students Graduated
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px]" />
            <div className="relative z-10 w-[500px] h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src="/images/institute.png"
                alt="Image Institute Exterior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Floating Owner Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-2xl flex items-center gap-4 z-20 border border-white/20"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary shadow-lg">
                <img src="/images/owner.png" alt="Director" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Director's Desk</p>
                <p className="text-sm font-bold text-slate-800 italic uppercase">Leading with Vision</p>
              </div>
            </motion.div>

            {/* Certification Badge */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-10 glass p-5 rounded-2xl shadow-xl z-20 border border-white/20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] font-bold text-muted-foreground uppercase">ISO Certified</p>
                <p className="text-xs font-black text-slate-800">9001:2015</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 -mt-100 sm:mt-0 md:mt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Years Experience", value: "9+" },
              { label: "Courses Offered", value: "10+" },
              { label: "Govt Placements", value: "500+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1 md:mb-2 tracking-tighter">{stat.value}</p>
                <p className="text-muted-foreground text-[10px] md:text-sm font-medium uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-24 px-6 bg-accent/30 rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            >
              Master Your <span className="gradient-text">Skills</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional training designed to make you industry-ready and help you secure government positions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={course.title}
                {...course}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 relative z-10 leading-tight">
            Ready to Start Your <br /> Learning Journey?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-12 max-w-xl mx-auto relative z-10 font-medium">
            Contact us today to enroll in our upcoming batches. Special discounts for early registrations!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link
              href="https://www.instagram.com/imagectirajpura/"
              target="_blank"
              className="bg-white text-primary px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
            >
              Follow on Instagram
            </Link>
            <Link
              href="tel:9888605627"
              className="bg-primary-foreground/10 border border-white/20 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95"
            >
              Call Support
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function GraduationCap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

