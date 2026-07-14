import type { ReactNode } from 'react';
import "./Container.css";

interface containerprops {
    children: ReactNode;
}

export default function Container({ children }: containerprops) {
    return <div className= "container">{children}</div>;
}