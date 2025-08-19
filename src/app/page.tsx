import AboutSection from "@/src/sections/AboutSection";
import CallToActionSection from "@/src/sections/CallToActionSection";
import FeaturedDestinations from "@/src/sections/FeaturedDestinations";
import HomeEvents from "@/src/sections/HomeEvents";
import TravelStats from "@/src/sections/TravelStats";
import TravelStories from "@/src/sections/TravelStories";
import UpcomingEvents from "@/src/sections/UpcomingEvents";

export default function Home() {
  return (
    <>
      <HomeEvents />
      <UpcomingEvents />
      <AboutSection />
      <FeaturedDestinations />
      <TravelStats />
      <TravelStories />
      <CallToActionSection />
    </>
  );
}
