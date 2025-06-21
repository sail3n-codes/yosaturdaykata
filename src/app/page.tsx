import CallToActionSection from "@/sections/CallToActionSection";
import FeaturedDestinations from "@/sections/FeaturedDestinations";
import ParallaxHero from "@/sections/ParallexHero";
import TravelStats from "@/sections/TravelStats";
import TravelStories from "@/sections/TravelStories";
import UpcomingEvents from "@/sections/UpcomingEvents";

export default function Home() {
  return (
    <>
      <ParallaxHero />
      <UpcomingEvents />
      <FeaturedDestinations />
      <TravelStats />
      <TravelStories />
      <CallToActionSection />
    </>
  );
}
