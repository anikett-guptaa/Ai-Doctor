"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Light } from "./light";

export default function Hero() {
    const texts = ["Your AI-Powered Doctor", "Healthcare, Smarter", "Medical Assistance, Redefined"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const speed = isDeleting ? 50 : 100;
        const typing = setTimeout(() => {
            if (!isDeleting && charIndex < texts[index].length) {
                setText((prev) => prev + texts[index][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else {
                setIsDeleting(!isDeleting);
                if (!isDeleting) {
                    setTimeout(() => setIsDeleting(true), 1000);
                } else {
                    setIndex((prev) => (prev + 1) % texts.length);
                    setCharIndex(0);
                }
            }
        }, speed);
        return () => clearTimeout(typing);
    }, [charIndex, isDeleting, index]);

    return (
        <div className="relative ">
            
            <div className="w-full pt-30 sm:pt-40 bg-[#0c2b43]"> 
                <Light className=""> 
                    <div className="flex flex-col items-center justify-center h-full text-center p-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            {text}
                            <span className="text-blue-400">|</span>
                        </h1>
                        <p className="text-lg text-gray-300 mt-4">
                            AI-driven healthcare at your fingertips.
                        </p>
                        <Link
                            href="/home"
                            className="mt-6 relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-[#89c051] focus:ring-offset-2 focus:ring-offset-[#89c051] no-underline"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#89c051_0%,#0c2b43_50%,#89c051_100%)]" />
                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-xl font-semibold text-white backdrop-blur-3xl transition-all hover:bg-slate-800">
                                Get Started
                            </span>
                        </Link>
                    </div>
                </Light>
            </div>

            <div />
        </div>
    );
}