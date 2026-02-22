"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
    index: number;
}

export function CourseCard({ title, description, icon: Icon, className, index }: CourseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className={cn(
                "group p-8 rounded-3xl glass transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-center text-center",
                className
            )}
        >
            <div className="mb-6 p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
            </p>
            <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-primary/20"
                />
            </div>
        </motion.div>
    );
}
