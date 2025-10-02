'use client';
import SectionTitle from '@/components/SectionTitle';
import { EVENTS } from '@/lib/data'; // Updated from PROJECTS to EVENTS
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState, MouseEvent } from 'react';
import Event from './Event'; // You might need to rename this component to 'Event'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EventList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const eventListRef = useRef<HTMLDivElement>(null); // Renamed from projectListRef
    const imageContainer = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [selectedEvent, setSelectedEvent] = useState<string | null>(
        // Note: The slug field is not present in the new IEvent interface, you'll need to decide on a unique identifier, like the title or a new slug field.
        EVENTS[0].title.replace(/\s/g, '-').toLowerCase() // Using title to create a simple slug for the example
    );

    useGSAP(
        (context, contextSafe) => {
            if (window.innerWidth < 768) {
                setSelectedEvent(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current) return;
                if (!imageContainer.current) return;

                if (window.innerWidth < 768) {
                    setSelectedEvent(null);
                    return;
                }

                const containerRect = containerRef.current?.getBoundingClientRect();
                const imageRect = imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef, dependencies: [containerRef.current] }
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef }
    );

    const handleMouseEnter = (eventTitle: string) => {
        if (window.innerWidth < 768) {
            setSelectedEvent(null);
            return;
        }

        setSelectedEvent(eventTitle.replace(/\s/g, '-').toLowerCase());
    };

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="Events Conducted" /> {/* Changed from PROJECTS to EVENTS */}

                <div className="group/events relative" ref={containerRef}> {/* Renamed from group/projects */}
                    {selectedEvent !== null && (
                        <div
                            className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] aspect-[3/4] overflow-hidden opacity-0"
                            ref={imageContainer}
                        >
                            {EVENTS.map((event) => (
                                <Image
                                    src={event.longThumbnail}
                                    alt="Event"
                                    width="400"
                                    height="500"
                                    className={cn(
                                        'absolute inset-0 transition-all duration-500 w-full h-full object-cover',
                                        {
                                            'opacity-0':
                                                event.title.replace(/\s/g, '-').toLowerCase() !==
                                                selectedEvent,
                                        }
                                    )}
                                    ref={imageRef}
                                    key={event.title} // Using title as key
                                />
                            ))}
                        </div>
                    )}

                    <div
                        className="flex flex-col max-md:gap-10"
                        ref={eventListRef} // Renamed from projectListRef
                    >
                        {EVENTS.map((event, index) => (
                            <Event // You'll need to update this component to receive IEvent props
                                index={index}
                                event={event} // Passing event data to the Project component
                                selectedEvent={selectedEvent}
                                onMouseEnter={() => handleMouseEnter(event.title)}
                                key={event.title} // Using title as key
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventList;