"use client";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <svg
                viewBox="0 0 240 80"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* The Mouse/Computer Icon */}
                <path
                    d="M20 45 C 20 38, 26 38, 26 45 L 26 60 C 26 67, 20 67, 20 60 Z"
                    fill="#1e3a8a"
                />
                <rect x="22" y="47" width="2" height="6" rx="1" fill="white" opacity="0.5" />
                <path d="M23 45 L 23 35 C 23 35, 40 35, 40 40" fill="none" stroke="#1e3a8a" strokeWidth="1.5" />

                {/* The "C" Graphic with internal blue fill */}
                <path
                    d="M65 15 C 45 15, 35 35, 35 45 C 35 65, 55 70, 75 65 C 90 60, 100 45, 100 30 C 100 15, 85 5, 65 5"
                    fill="none"
                    stroke="#1e3a8a"
                    strokeWidth="4"
                />
                <path
                    d="M70 20 C 55 20, 50 35, 50 40 C 50 55, 60 60, 70 57 C 80 55, 85 45, 85 35 C 85 25, 80 20, 70 20"
                    fill="#93c5fd"
                    opacity="0.4"
                />

                {/* The "image" text in cursive/serif style */}
                <text
                    x="105"
                    y="50"
                    fontFamily="'Brush Script MT', cursive, serif"
                    fontSize="45"
                    fill="#1e3a8a"
                    fontStyle="italic"
                >
                    image
                </text>

                {/* Pen/Flame element at top */}
                <path
                    d="M65 5 C 67 0, 63 0, 65 -5"
                    stroke="#ca8a04"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    transform="translate(0, 10)"
                />

                {/* Bottom Text Label */}
                <text
                    x="40"
                    y="78"
                    fontFamily="sans-serif"
                    fontSize="11"
                    fontWeight="900"
                    fill="#64748b"
                    letterSpacing="0.5"
                    className="uppercase"
                >
                    Computer & Typing Institute
                </text>
            </svg>
        </div>
    );
}

export function FaviconLogo() {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="16" fill="#1e3a8a" />
            <path d="M45 20 C 35 20, 30 30, 30 35 C 30 45, 40 48, 50 45 C 58 42, 62 35, 62 25" stroke="white" strokeWidth="3" fill="none" />
            <text x="12" y="45" fill="white" fontSize="32" fontWeight="bold" fontStyle="italic">i</text>
        </svg>
    );
}
