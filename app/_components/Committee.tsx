'use client';
import SectionTitle from '@/components/SectionTitle';
import { PLEXUS_COMMITTEE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PlexusCommittee = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl = containerRef.current?.querySelectorAll('.slide-up');
            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.2,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="plexus-committee" ref={containerRef}>
            <div className="container">
                <SectionTitle title="Plexus Committee" />
                <p className="mb-10 text-lg text-muted-foreground">
                    {PLEXUS_COMMITTEE.description}
                </p>

                <div className="space-y-20">
                    {Object.entries(PLEXUS_COMMITTEE).map(([key, members]) => {
                        if (key === 'description') return null; // Skip description
                        return (
                            <div className="grid sm:grid-cols-12" key={key}>
                                <div className="sm:col-span-5">
                                    <p className="slide-up text-4xl font-anton leading-none text-muted-foreground uppercase">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </p>
                                </div>
                                <div className="sm:col-span-7 flex flex-wrap gap-4">
                                    {members.map((member: any) => {
                                        const content = (
                                            // Removed 'slide-up' class from this div
                                            <div className="flex items-center gap-3">
                                                {member.icon && Array.isArray(member.icon) && (
                                                    <div className="flex lg:flex-col gap-2">
                                                        {member.icon.map((url, index) => (
                                                            <div
                                                                key={index}
                                                                className="w-10 h-10 relative rounded-full overflow-hidden"
                                                            >
                                                                <Image
                                                                    src={url}
                                                                    alt={`${member.name} icon ${index + 1}`}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="flex flex-col">
                                                    <span className="text-sm sm:text-xl font-semibold">
                                                        {member.name.split('&').map((part, index) => (
                                                            <React.Fragment key={index}>
                                                                {part.trim()}
                                                                {index < member.name.split('&').length - 1 && <br />}
                                                            </React.Fragment>
                                                        ))}
                                                    </span>
                                                    <span className="text-xs sm:text-md text-muted-foreground">
                                                        {member.designation && `${member.designation} - `}{member.role}
                                                    </span>
                                                </div>
                                            </div>
                                        );

                                        return member.link ? (
                                            <a
                                                key={member.name}
                                                href={member.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="slide-up hover:underline" // The class is correctly applied here
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <div key={member.name} className="slide-up">
                                                {content}
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PlexusCommittee;