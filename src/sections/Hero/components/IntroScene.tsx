import { motion } from "framer-motion";

import techsuiteLogo from "../../../assets/logos/techsuite-logo.svg";
import techsuiteText from "../../../assets/logos/techsuite.svg";

export default function IntroScene() {
    return (
        <motion.div
            className="intro-scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="intro-scene__brand">

                <img
                    src={techsuiteLogo}
                    alt="Techsuite"
                    className="intro-scene__logo"
                />

                <img
                    src={techsuiteText}
                    alt="Techsuite"
                    className="intro-scene__text"
                />

            </div>
        </motion.div>
    );
}