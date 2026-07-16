import "./HeroBackground.css";

import hexPattern from "../../../assets/backgrounds/hex-pattern.svg";

export default function HeroBackground() {
    return (
        <div className="hero-background">
            <img src={hexPattern} alt="" />
        </div>
    );
}