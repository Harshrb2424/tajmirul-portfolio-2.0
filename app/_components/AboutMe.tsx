'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section pt-24" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-4xl font-thin mb-20 slide-up-and-fade">
                    Plexus is a vibrant student-led initiative dedicated to empowering learners through a variety of technical, non-technical, and hackathon events.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is unity.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, we&apos;re Plexus.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                Our approach emphasizes inclusivity, skill development, and real-world impact. By organizing well-structured workshops, competitions, and interactive experiences, we ensure that every participant gains valuable knowledge and hands-on experience while enjoying a fun and dynamic environment.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Through Plexus, we aim to foster a community of enthusiastic and motivated individuals, providing them with the resources and support needed to develop leadership, teamwork, and problem-solving skills. We believe that by nurturing curiosity and creativity, we can help students achieve their full potential and make a lasting impact on their peers and the wider college community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
