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
                <h2 className="text-2xl md:text-3xl font-thin mb-20 slide-up-and-fade">
                    The Plexus Club is the official student association of the CSE (Artificial Intelligence & Machine Learning) Department, Malla Reddy College of Engineering (MRCE). It was founded to create a platform that unites technical innovation, creativity, leadership, and community spirit.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    Plexus Club - United by Nerves
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Vision
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                To inspire CSE (AI&ML) students to become innovators, leaders, and changemakers through technical excellence, creativity, and social responsibility.
                            </p>
                            {/* <p className="mt-3 slide-up-and-fade">
                                Through Plexus, we aim to foster a community of enthusiastic and motivated individuals, providing them with the resources and support needed to develop leadership, teamwork, and problem-solving skills. We believe that by nurturing curiosity and creativity, we can help students achieve their full potential and make a lasting impact on their peers and the wider college community.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Mission
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                To provide opportunities across technical, non-technical, sports, design, and social media domains, ensuring every student has a place to explore, excel, and contribute.
                            </p>
                            {/* <p className="mt-3 slide-up-and-fade">
                                Through Plexus, we aim to foster a community of enthusiastic and motivated individuals, providing them with the resources and support needed to develop leadership, teamwork, and problem-solving skills. We believe that by nurturing curiosity and creativity, we can help students achieve their full potential and make a lasting impact on their peers and the wider college community.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
