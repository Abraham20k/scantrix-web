import { motion } from "framer-motion";

import "./HeroBrand.css";

import techsuiteLogo from "../../../assets/logos/techsuite-logo.svg";
import techsuiteText from "../../../assets/logos/techsuite.svg";

import type { HeroStageProps } from "../types";

export default function HeroBrand({ stage }: HeroStageProps) {

    const top = stage === 0 ? "50%" : "14%";

    const scale = stage === 0 ? 1 : 0.65;

    return (
        <motion.div
            className="hero-brand"
            animate={{
                top,
                scale
            }}
            transition={{
                duration: 1.2,
                ease: "easeInOut"
            }}
        >
            <img
                src={techsuiteLogo}
                className="brand-icon"
                alt=""
            />

            <img
                src={techsuiteText}
                className="brand-text"
                alt=""
            />
        </motion.div>
    );
}