import Image from "next/image";
import {
  DollarSign,
  Map,
  Calendar,
  Users,
  Shield,
  Headphones,
} from "lucide-react";
import config from "@/config";

export default function AboutPage() {
  const { imagekitUrl } = config;
  const stats = [
    { number: "120+", label: "Total Destination" },
    { number: "500+", label: "Travel Packages" },
    { number: "12k+", label: "Total Travelers" },
    { number: "7k+", label: "Positive Reviews" },
  ];

  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Cheap Rates",
      description:
        "Credibly target visionary portals rather than prospective human capital.",
    },
    {
      icon: <Map className="w-8 h-8 text-primary" />,
      title: "Best Travel Plan",
      description:
        "Credibly target visionary portals rather than prospective human capital.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Easy & Quick Booking",
      description:
        "Credibly target visionary portals rather than prospective human capital.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Hand-picked Tour",
      description:
        "Credibly target visionary portals rather than prospective human capital.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Private Guide",
      description:
        "Credibly target visionary portals rather than prospective human capital.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Customer Care 24/7",
      description:
        "Credibly target visionary portals rather than prospective human capital.",
    },
  ];

  const teamMembers = [
    {
      name: "Anand Shrestha",
      role: "Founder",
      image: "/placeholder.svg?height=300&width=250&text=Anand+Shrestha",
    },
    {
      name: "Andrew Davis",
      role: "Tour Coordinator",
      image: "/placeholder.svg?height=300&width=250&text=Andrew+Davis",
    },
    {
      name: "Orlando Diggs",
      role: "Travel Agent",
      image: "/placeholder.svg?height=300&width=250&text=Orlando+Diggs",
    },
    {
      name: "Philip Martin",
      role: "Tour Manager",
      image: "/placeholder.svg?height=300&width=250&text=Philip+Martin",
    },
    {
      name: "Tamara Bellis",
      role: "Travel Agent",
      image: "/placeholder.svg?height=300&width=250&text=Tamara+Bellis",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className=" text-sm font-medium mb-2">About us</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Select Us for Your Vacation
            </h1>
            <div className="space-y-4 mb-8">
              <p>
                Intrinsically incubate standards compliant solutions rather than
                multidisciplinary solutions. Authoritatively coordinate 24/365
                resources whereas distributed strategic theme areas.
                Authoritatively coordinate 24/365 strategic theme areas whereas
                distributed strategic theme areas.
              </p>
              <p>
                Appropriately deliver user-centric opportunities before
                interactive e-tailers. Efficiently aggregate superior services
                after adaptive web readiness.
              </p>
              <p>
                Dynamically whiteboard client-centric building processes whereas
                tactical web services. Efficiently aggregate superior services
                after adaptive web readiness.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={`${imagekitUrl}/north-abc.jpeg`}
                alt="Mountain traveler in red jacket"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-base-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-medium mb-2">Features</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-base-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-base-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-medium mb-2">Team</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Our Amazing Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`${imagekitUrl}/north-abc.jpeg`}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
