'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        particlesRef.current.forEach((particle) => {
            gsap.set(particle, {
                width: Math.random() * 4 + 2, // slightly bigger particles
                height: Math.random() * 4 + 2,
                opacity: Math.random() * 0.8 + 0.2,
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
                backgroundColor: gsap.utils.random([
                    'hsl(var(--extra-1))', // pastel pink
                    'hsl(var(--chart-1))', // electric blue
                    'hsl(var(--chart-2))', // neon purple
                    'hsl(var(--chart-5))', // pink-magenta
                ]),
                boxShadow: `0 0 8px hsl(var(--extra-1))`,
            });

            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 8 + 8,
                opacity: 0,
                repeat: -1,
                ease: 'none',
            });
        });
    }, []);

    return (
        <div
            className="fixed inset-0 z-[-10] pointer-events-none"
            style={{
                background: `linear-gradient(135deg,
                  hsl(var(--extra-4)) 0%,
                  hsl(var(--extra-5)) 100%)`,
            }}
        >
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        particlesRef.current[i] = el!;
                    }}
                    className="absolute rounded-full"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;