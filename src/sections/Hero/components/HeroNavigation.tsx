import { motion } from "framer-motion";

import "./HeroNavigation.css";

import type { HeroStageProps } from "../types";

export default function HeroNavigation({ stage }: HeroStageProps) {

    return (
        <motion.div
            className="hero-navigation"
            initial={false}
            animate={{
                opacity: stage >= 3 ? 1 : 0,
                y: stage >= 3 ? 0 : 80
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}
        >
            <div className="nav-card">What is Scantrix?</div>

            <div className="nav-card">Why Scantrix?</div>

            <div className="nav-card">What do you gain?</div>

            <div className="nav-card">How do you use it?</div>
        </motion.div>
    );
}