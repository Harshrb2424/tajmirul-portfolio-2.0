import { notFound } from 'next/navigation';
import EventDetails from './_components/EventDetails'; // Create this new component
import { EVENTS } from '@/lib/data';
import { Metadata } from 'next';

// This function generates the static paths for all events
export const generateStaticParams = async () => {
    return EVENTS.map((event) => ({ slug: event.title.replace(/\s/g, '-').toLowerCase() }));
};

// This function generates metadata for each event page
export const generateMetadata = async ({
    params,
}: {
    params: { slug: string };
}) => {
    const event = EVENTS.find((event) => event.title.replace(/\s/g, '-').toLowerCase() === params.slug);

    return {
        title: `${event?.title} - ${event?.tags.slice(0, 3).join(', ')}`,
        description: event?.description,
    } as Metadata;
};

// This is the main page component for a single event
const Page = async ({ params }: { params: { slug: string } }) => {
    const event = EVENTS.find((event) => event.title.replace(/\s/g, '-').toLowerCase() === params.slug);

    if (!event) {
        return notFound();
    }

    return <EventDetails event={event} />;
};

export default Page;