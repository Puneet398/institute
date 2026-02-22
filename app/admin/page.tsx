"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Save, X, Search, UserPlus, LogOut, Loader2, FileUp, CheckCircle, Clock, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
    const [students, setStudents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const [uploadingId, setUploadingId] = useState<string | null>(null);
    const router = useRouter();

    const [newStudent, setNewStudent] = useState({
        id: "",
        name: "",
        status: "in-progress",
        course: "Shorthand",
    });

    useEffect(() => {
        checkAuth();
        fetchStudents();
    }, []);

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            router.push("/admin/login");
        }
    };

    const fetchStudents = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("students")
            .select("*")
            .order("updated_at", { ascending: false });

        if (!error && data) {
            setStudents(data);
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/");
    };

    const handleUpdateStatus = async (id: string, newStatus: string) => {
        const { error } = await supabase
            .from("students")
            .update({ status: newStatus, updated_at: new Date().toISOString() })
            .eq("id", id);

        if (!error) {
            setStudents(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
        }
        setEditingId(null);
    };

    const handleAddStudent = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newStudent.id || !newStudent.name) return;

        const { data, error } = await supabase
            .from("students")
            .insert([{
                ...newStudent,
                id: newStudent.id.toUpperCase().trim(),
                updated_at: new Date().toISOString()
            }])
            .select();

        if (!error && data) {
            setStudents(prev => [data[0], ...prev]);
            setIsAdding(false);
            setNewStudent({ id: "", name: "", status: "in-progress", course: "Shorthand" });
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, studentId: string) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadingId(studentId);

        const fileExt = file.name.split('.').pop();
        const fileName = `${studentId}-${Math.random()}.${fileExt}`;
        const filePath = `certificates/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from("certificates")
            .upload(filePath, file);

        if (!uploadError) {
            const { data: { publicUrl } } = supabase.storage
                .from("certificates")
                .getPublicUrl(filePath);

            await supabase
                .from("students")
                .update({ certificate_url: publicUrl, updated_at: new Date().toISOString() })
                .eq("id", studentId);

            setStudents(prev => prev.map(s => s.id === studentId ? { ...s, certificate_url: publicUrl } : s));
        }
        setUploadingId(null);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this record?")) {
            const { error } = await supabase.from("students").delete().eq("id", id);
            if (!error) {
                setStudents(prev => prev.filter(s => s.id !== id));
            }
        }
    };

    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight mb-2 italic">Admin <span className="gradient-text">Dashboard</span></h1>
                        <p className="text-muted-foreground font-medium">Manage student records and digital certificates.</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setIsAdding(true)}
                            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
                        >
                            <Plus size={20} />
                            Add Student
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 glass px-6 py-3 rounded-2xl font-bold text-red-600 hover:bg-red-50 transition-all active:scale-95"
                        >
                            <LogOut size={20} />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Search & Stats */}
                <div className="glass p-6 rounded-[2rem] shadow-lg mb-8 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <input
                            type="text"
                            placeholder="Search students..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-muted focus:border-primary focus:outline-none transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="px-6 py-3 bg-white rounded-xl border text-sm font-bold shadow-sm">
                        Total Records: {students.length}
                    </div>
                </div>

                {/* Add Form */}
                {isAdding && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass p-8 rounded-[2rem] shadow-xl mb-8 border-2 border-primary/20"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold">New Student Registration</h3>
                            <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-muted rounded-full">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleAddStudent} className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            <input
                                required
                                className="p-3 rounded-xl border focus:border-primary w-full"
                                placeholder="Student ID (e.g. IMG001)"
                                value={newStudent.id}
                                onChange={e => setNewStudent({ ...newStudent, id: e.target.value })}
                            />
                            <input
                                required
                                className="p-3 rounded-xl border focus:border-primary w-full"
                                placeholder="Full Name"
                                value={newStudent.name}
                                onChange={e => setNewStudent({ ...newStudent, name: e.target.value })}
                            />
                            <select
                                className="p-3 rounded-xl border focus:border-primary bg-white w-full"
                                value={newStudent.course}
                                onChange={e => setNewStudent({ ...newStudent, course: e.target.value })}
                            >
                                <option>Shorthand</option>
                                <option>Typing Mastery</option>
                                <option>Tally ERP 9</option>
                                <option>Computer Basics</option>
                            </select>
                            <button type="submit" className="bg-primary text-white py-3 rounded-xl font-bold w-full hover:bg-primary/90 transition-colors">
                                Save Record
                            </button>
                        </form>
                    </motion.div>
                )}

                {/* Table */}
                <div className="glass rounded-[2rem] shadow-xl overflow-hidden overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-primary/5 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest">
                            <tr>
                                <th className="px-4 md:px-8 py-4 md:py-6">Student Info</th>
                                <th className="px-4 md:px-8 py-4 md:py-6 hidden sm:table-cell">Course</th>
                                <th className="px-4 md:px-8 py-4 md:py-6">Status</th>
                                <th className="px-4 md:px-8 py-4 md:py-6">Certificate</th>
                                <th className="px-4 md:px-8 py-4 md:py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-muted">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="py-20 text-center text-muted-foreground italic font-medium">
                                        <Loader2 className="animate-spin mx-auto mb-2" />
                                        Loading secure records...
                                    </td>
                                </tr>
                            ) : filteredStudents.map((s) => (
                                <tr key={s.id} className="hover:bg-white/50 transition-colors group">
                                    <td className="px-4 md:px-8 py-4 md:py-6">
                                        <div className="font-bold text-sm md:text-base">{s.name}</div>
                                        <div className="text-[10px] text-muted-foreground uppercase">{s.id}</div>
                                        <div className="sm:hidden text-[10px] italic mt-1">{s.course}</div>
                                    </td>
                                    <td className="px-4 md:px-8 py-4 md:py-6 text-sm italic hidden sm:table-cell">{s.course}</td>
                                    <td className="px-4 md:px-8 py-4 md:py-6">
                                        {editingId === s.id ? (
                                            <select
                                                autoFocus
                                                defaultValue={s.status}
                                                onChange={(e) => handleUpdateStatus(s.id, e.target.value)}
                                                onBlur={() => setEditingId(null)}
                                                className="p-1 border rounded text-[10px] w-20"
                                            >
                                                <option value="accepted">Accepted</option>
                                                <option value="in-progress">In Progress</option>
                                                <option value="rejected">Rejected</option>
                                            </select>
                                        ) : (
                                            <span className={cn(
                                                "px-2 md:px-3 py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase whitespace-nowrap",
                                                s.status === "accepted" ? "bg-green-50 text-green-700" :
                                                    s.status === "in-progress" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"
                                            )}>
                                                {s.status}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 md:px-8 py-4 md:py-6">
                                        <div className="flex items-center gap-3">
                                            {s.certificate_url ? (
                                                <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                                                    <a href={s.certificate_url} target="_blank" className="text-primary hover:underline text-[10px] md:text-xs font-bold flex items-center gap-1 whitespace-nowrap">
                                                        <CheckCircle size={14} /> <span className="hidden xs:inline">View</span>
                                                    </a>
                                                    <label className="cursor-pointer text-muted-foreground hover:text-primary transition-colors text-[10px] md:text-xs font-bold flex items-center gap-1">
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            onChange={(e) => handleFileUpload(e, s.id)}
                                                            disabled={uploadingId === s.id}
                                                        />
                                                        {uploadingId === s.id ? <Loader2 className="animate-spin" size={14} /> : <FileUp size={14} />}
                                                        Replace
                                                    </label>
                                                </div>
                                            ) : (
                                                <label className="cursor-pointer group/upload text-muted-foreground hover:text-primary transition-colors">
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        onChange={(e) => handleFileUpload(e, s.id)}
                                                        disabled={uploadingId === s.id}
                                                    />
                                                    <div className="flex items-center gap-1 text-[8px] md:text-[10px] font-bold whitespace-nowrap">
                                                        {uploadingId === s.id ? <Loader2 className="animate-spin" size={14} /> : <FileUp size={14} />}
                                                        <span className="hidden xs:inline">Upload</span>
                                                    </div>
                                                </label>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-4 md:px-8 py-4 md:py-6 text-right">
                                        <div className="flex justify-end gap-1 md:gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => setEditingId(s.id)} className="p-1 md:p-2 text-primary hover:bg-primary/5 rounded-lg"><Edit2 size={14} className="md:w-4 md:h-4" /></button>
                                            <button onClick={() => handleDelete(s.id)} className="p-1 md:p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={14} className="md:w-4 md:h-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
