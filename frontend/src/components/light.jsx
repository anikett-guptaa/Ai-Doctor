"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "./utils";

export const Light = ({ children, className }) => {
    return (
        <div
            className={cn(
                "relative flex min-h-[700px] flex-col items-center justify-center overflow-visible bg-[#0c2b43] w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">

                {/* Left Side Light */}
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "6rem" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="absolute left-[10%] z-30 h-36 w-4 -translate-y-[15.5rem] rounded-full bg-[#89c051] blur-2xl"
                />

                {/* Left Side Beam */}
                <motion.div
                    initial={{ width: "15rem", x: "-50%" }}
                    whileInView={{ width: "5rem", x: "-50%" }} 
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="absolute left-[21%] sm:left-[13.5%] z-50 h-0.5 w-[5rem] -translate-y-[15.5rem] bg-[#89c051]"
                    style={{
                        transform: "translateY(-15.5rem)" 
                    }}
                />

                {/* Right Side Light */}
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "6rem" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="absolute right-[10%] z-30 h-36 w-4 -translate-y-[15.5rem] rounded-full bg-[#89c051] blur-2xl"
                />

                {/* Right Side Beam */}
                <motion.div
                    initial={{ width: "15rem", x: "50%" }} 
                    whileInView={{ width: "5rem", x: "50%" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="absolute right-[21%] sm:right-[13.5%] z-50 h-0.5 w-[5rem] -translate-y-[15.5rem] bg-[#89c051]"
                    style={{ transform: "translateY(-15.5rem)" }}
                />

                {/* Bottom Cover */}
                <div className="absolute inset-auto z-40 h-28 w-full  -translate-y-[18.5rem] bg-[#0c2b43]"></div>
            </div>

            {/* Children Container */}
            <div className="relative z-50 flex -translate-y-70 flex-col items-center px-5 ">
                {children}
            </div>
        </div>
    );
};