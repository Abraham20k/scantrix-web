import { motion } from "framer-motion";

import "./HeroTitle.css";

import scantrixLogo from "../../../assets/logos/scantrix-logo.svg";

import type { HeroStageProps } from "../types";

export default function HeroTitle({ stage }: HeroStageProps) {

    return (
        <motion.div
            className="hero-title"
            initial={false}
            animate={{
                opacity: stage >= 2 ? 1 : 0,
                y: stage >= 2 ? 0 : 40
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}
        >
            <p className="intro-text">
                INTRODUCING
            </p>

            <img
                src={scantrixLogo}
                className="scantrix-logo"
                alt=""
            />
        </motion.div>
    );
}