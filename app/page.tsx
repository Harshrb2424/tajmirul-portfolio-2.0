import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import ClubList from './_components/ClubList';
import Committee from './_components/Committee';
import EventList from './_components/EventList';

export default async function Page() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <ClubList />
            <EventList />
            <Committee />
        </div>
    );
}
