import { useEffect, useState } from "react";

import "./HeroContent.css";

import HeroBackground from "./HeroBackground";
import HeroBrand from "./HeroBrand";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroNavigation from "./HeroNavigation";

export default function HeroContent() {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowDown":
                    setStage((prev) => Math.min(prev + 1, 4));
                    break;

                case "ArrowUp":
                    setStage((prev) => Math.max(prev - 1, 0));
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="hero-content">
            <HeroBackground />

            <HeroBrand stage={stage} />

            <HeroTitle stage={stage} />

            <HeroDescription stage={stage} />

            <HeroNavigation stage={stage} />
        </div>
    );
}