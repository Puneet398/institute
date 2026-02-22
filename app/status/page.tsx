"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    Search,
    CheckCircle,
    Clock,
    XCircle,
    AlertCircle,
    ArrowRight,
    ShieldCheck,
    FileDown,
    Loader2
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

export default function StatusPage() {
    const [studentId, setStudentId] = useState("");
    const [searchResult, setSearchResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!studentId.trim()) return;

        setLoading(true);
        setHasSearched(true);

        const { data, error } = await supabase
            .from("students")
            .select("*")
            .ilike("id", studentId.trim())
            .single();

        if (!error && data) {
            setSearchResult(data);
        } else {
            setSearchResult(null);
        }

        setLoading(false);
    };

    const getStatusConfig = (status: string) => {
        switch (status.toLowerCase()) {
            case "accepted":
                return {
                    icon: CheckCircle,
                    color: "text-green-600",
                    bg: "bg-green-50",
                    label: "Accepted",
                    border: "border-green-200",
                    desc: "Great news! Your application is accepted. You can now download your digital certificate."
                };
            case "in-progress":
                return {
                    icon: Clock,
                    color: "text-amber-600",
                    bg: "bg-amber-50",
                    label: "In Progress",
                    border: "border-amber-200",
                    desc: "We are currently processing your file. Please check back in a few days."
                };
            case "rejected":
                return {
                    icon: XCircle,
                    color: "text-red-600",
                    bg: "bg-red-50",
                    label: "Rejected",
                    border: "border-red-200",
                    desc: "Your application was not successful at this time. Please contact the office for more details."
                };
            default:
                return {
                    icon: AlertCircle,
                    color: "text-gray-600",
                    bg: "bg-gray-50",
                    label: "Unknown",
                    border: "border-gray-200",
                    desc: "Invalid status code. Contact administration."
                };
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Student Portal</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Track Your <span className="gradient-text">Success</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Enter your Student ID (provided during registration) to check your application status or download your digital certificate.
                    </p>
                </motion.div>

                {/* Search Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative z-10 border border-white/20 mb-12"
                >
                    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors w-5 h-5 md:w-6 md:h-6" />
                            <input
                                type="text"
                                placeholder="Enter Student ID"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                className="w-full pl-12 md:pl-16 pr-4 md:pr-6 py-4 md:py-6 rounded-2xl md:rounded-3xl border-2 border-muted focus:border-primary focus:outline-none transition-all text-base md:text-xl font-bold placeholder:font-normal placeholder:text-muted-foreground shadow-inner bg-white/50"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-primary text-white px-8 md:px-10 py-4 md:py-6 rounded-2xl md:rounded-3xl font-extrabold text-lg md:text-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Track Now"}
                            {!loading && <ArrowRight size={20} className="md:w-6 md:h-6" />}
                        </button>
                    </form>

                    <div className="mt-8 flex items-center justify-center gap-6 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><ShieldCheck size={16} /> Secure Verification</span>
                        <span className="w-1.5 h-1.5 bg-muted rounded-full" />
                        <span className="flex items-center gap-2"><CheckCircle size={16} /> ISO Certified</span>
                    </div>
                </motion.div>

                {/* Results Area */}
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-20"
                        >
                            <Loader2 className="animate-spin text-primary mx-auto mb-4" size={48} />
                            <p className="text-xl font-bold text-primary italic">Verifying your records...</p>
                        </motion.div>
                    ) : hasSearched && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid gap-8"
                        >
                            {searchResult ? (
                                <div className={cn(
                                    "p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-4 shadow-2xl transition-all hover:scale-[1.01]",
                                    getStatusConfig(searchResult.status).border,
                                    getStatusConfig(searchResult.status).bg
                                )}>
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left w-full">
                                            <div className={cn(
                                                "w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] flex items-center justify-center shadow-lg shrink-0",
                                                getStatusConfig(searchResult.status).bg,
                                                getStatusConfig(searchResult.status).color,
                                                "border-2 md:border-4 border-white"
                                            )}>
                                                {(() => {
                                                    const Icon = getStatusConfig(searchResult.status).icon;
                                                    return <Icon size={32} className="md:w-10 md:h-10" />;
                                                })()}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-2xl md:text-3xl font-extrabold mb-1 truncate">Hi, {searchResult.name}</h3>
                                                <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px] md:text-sm flex flex-wrap items-center justify-center sm:justify-start gap-2">
                                                    ID: <span className="text-primary">{searchResult.id}</span>
                                                    <span className="hidden sm:inline w-1.5 h-1.5 bg-muted rounded-full" />
                                                    <span className="w-full sm:w-auto">{searchResult.course}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={cn(
                                            "px-4 md:px-6 py-2 rounded-full font-black uppercase tracking-tighter text-sm md:text-lg border-2 bg-white shrink-0",
                                            getStatusConfig(searchResult.status).color,
                                            getStatusConfig(searchResult.status).border
                                        )}>
                                            {getStatusConfig(searchResult.status).label}
                                        </div>
                                    </div>

                                    <hr className="my-8 border-current opacity-10" />

                                    <p className="text-lg font-medium text-slate-700 leading-relaxed max-w-2xl">
                                        {getStatusConfig(searchResult.status).desc}
                                    </p>

                                    {searchResult.certificate_url && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="mt-10"
                                        >
                                            <a
                                                href={searchResult.certificate_url}
                                                target="_blank"
                                                className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95 group w-full sm:w-auto"
                                            >
                                                <FileDown size={20} className="md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
                                                <span className="text-sm md:text-base">Download Digital Certificate</span>
                                            </a>
                                            <p className="mt-4 text-[10px] md:text-sm text-green-700 font-bold flex items-center justify-center sm:justify-start gap-2">
                                                <ShieldCheck size={14} className="md:w-4 md:h-4" /> Digitally Signed and Verified
                                            </p>
                                        </motion.div>
                                    )}
                                </div>
                            ) : (
                                <div className="p-12 rounded-[3.5rem] bg-slate-100 border-2 border-slate-200 text-center shadow-xl">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                                        <Search size={40} />
                                    </div>
                                    <h3 className="text-2xl font-black mb-2">Student Not Found</h3>
                                    <p className="text-slate-500 font-medium">We couldn't find any record matching "<span className="text-red-500 font-bold">{studentId}</span>". Please double-check your ID or contact the office.</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
