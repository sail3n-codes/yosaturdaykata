import FeaturedDestinations from "@/sections/FeaturedDestinations";
import ParallaxHero from "@/sections/ParallexHero";
import TravelStats from "@/sections/TravelStats";
import TravelStories from "@/sections/TravelStories";

export default function Home() {
  return (
    <>
      <ParallaxHero />
      <FeaturedDestinations />
      <TravelStats />
      <TravelStories />
    </>
  );
}
