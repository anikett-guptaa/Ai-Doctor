"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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
        <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-white to-gray-200">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                {text}
                <span className="text-blue-600">|</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">AI-driven healthcare at your fingertips.</p>
            <Link
                href="/home"
                className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
                Get Started
            </Link>

        </section>
    );
}
