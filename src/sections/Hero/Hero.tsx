import Container from "../../components/common/Container/Container";

import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">

            <Container>

                <div className="hero__content">

                    <p className="hero__eyebrow">
                        INTRODUCING
                    </p>

                    <h1 className="hero__title">
                        SCANTRIX
                    </h1>

                    <p className="hero__subtitle">
                        Smart QR Attendance System
                    </p>

                </div>

            </Container>

        </section>
    );
}