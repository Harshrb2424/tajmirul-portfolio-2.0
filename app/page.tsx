import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
// import Skills from './_components/Skills';
import ClubList from './_components/ClubList';
import EventList from './_components/EventList';

export default async function Page() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            {/* <Skills /> */}
            <ClubList />
            <EventList />
        </div>
    );
}
