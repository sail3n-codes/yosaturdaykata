import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col text-center w-full justify-center items-center gap-6">
          <Image
            src={`/images/logo.png`}
            alt={"logo"}
            width={150}
            height={150}
          />
          <h2 className="text-4xl md:text-5xl font-bold scale-up-animation">
            About <span className="text-primary">YoSaturdayKata</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            We&apos;re a passionate community of hikers and trekkers, united by
            our love for Nepal&apos;s stunning landscapes and incredible trails.
            From the serene hills surrounding Kathmandu to the challenging
            high-altitude passes of the Himalayas, we organize both free and
            paid adventures for all skill levels. We believe in exploring
            responsibly, fostering a supportive community, and creating
            unforgettable memories, one step at a time. Join us to experience
            the magic of Nepal&apos;s outdoors!
          </p>
        </div>
      </div>
    </section>
  );
}
