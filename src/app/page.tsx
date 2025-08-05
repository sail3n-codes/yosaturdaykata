import AboutSection from "@/sections/AboutSection";
import CallToActionSection from "@/sections/CallToActionSection";
import FeaturedDestinations from "@/sections/FeaturedDestinations";
import HomeEvents from "@/sections/HomeEvents";
import TravelStats from "@/sections/TravelStats";
import TravelStories from "@/sections/TravelStories";
import UpcomingEvents from "@/sections/UpcomingEvents";

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
