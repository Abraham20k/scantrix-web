import { motion } from "framer-motion";

import "./HeroDescription.css";

import type { HeroStageProps } from "../types";

export default function HeroDescription({ stage }: HeroStageProps) {

    return (
        <motion.div
            className="hero-description"
            initial={false}
            animate={{
                opacity: stage >= 1 ? 1 : 0,
                y: stage >= 1 ? 0 : 50
            }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut"
            }}
        >
            <h2>
                A NEXT-GEN INTEGRATED SHOP FLOOR
                <br />
                MOBILITY SOLUTION
            </h2>

            <p>
                that enables you to
                <strong> Scan</strong>,
                <strong> Connect</strong>,
                <strong> Automate</strong>,
                <strong> Navigate</strong> &
                <strong> Track</strong>
                <br />
                shop floor activities with
                <strong> Real-time</strong>
                Integrated eXecutions.
            </p>
        </motion.div>
    );
}