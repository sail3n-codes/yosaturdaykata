"use client";

import Image from "next/image";
import {
  Clock,
  Calendar,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Eye,
  Users,
} from "lucide-react";
import config from "@/src/config";
import { BLOGS, EVENTS } from "@/src/sample";

export default function BlogDetailPage() {
  const { imagekitUrl } = config;
  const blogPosts = BLOGS.slice(0, 3);
  const events = EVENTS.slice(0, 3);
  const blogPost = {
    id: 1,
    title: "Langtang trek: Affected by Baotuwa trek, is it okay to travel now?",
    excerpt:
      "A comprehensive guide to understanding the current situation of Langtang trek after the Baotuwa trek impact and safety considerations for travelers.",
    content: `
      <p>The Langtang region, once a pristine trekking destination in Nepal, has faced significant challenges in recent years. The impact of the Baotuwa trek development has raised questions about the safety and accessibility of this beautiful Himalayan valley.</p>

      <h2>Current Situation Overview</h2>
      <p>Following extensive research and consultation with local authorities, we can provide you with the most up-to-date information about trekking in the Langtang region. The area has undergone substantial rehabilitation efforts since the 2015 earthquake, and recent developments have further shaped the trekking landscape.</p>

      <h2>Safety Considerations</h2>
      <p>Safety remains the top priority for any trekking expedition. The Langtang region has implemented new safety protocols and infrastructure improvements that make it more accessible than ever before. Local communities have been actively involved in trail maintenance and emergency response systems.</p>

      <blockquote>
        "The resilience of the Langtang community is truly inspiring. They have rebuilt not just their homes, but their entire tourism infrastructure with a focus on sustainability and safety." - Local Trek Guide
      </blockquote>

      <h2>What to Expect</h2>
      <p>Modern trekkers can expect well-maintained trails, improved accommodation facilities, and enhanced communication systems throughout the region. The local communities have embraced sustainable tourism practices while preserving their cultural heritage.</p>

      <h2>Best Time to Visit</h2>
      <p>The optimal trekking seasons remain unchanged - spring (March to May) and autumn (September to November) offer the best weather conditions and clearest mountain views. Winter treks are possible but require additional preparation and experience.</p>

      <h2>Preparation and Planning</h2>
      <p>Proper preparation is essential for a successful Langtang trek. This includes physical conditioning, appropriate gear selection, and understanding local customs and regulations. We recommend booking with reputable local operators who prioritize safety and community benefit.</p>
    `,
    image: "north-abc.jpeg",
    author: {
      name: "Author huh huh",
      avatar: "north-abc.jpeg",
      bio: "Experienced trekking guide and travel writer with over 10 years of experience in the Himalayas. Passionate about sustainable tourism and community development.",
      social: {
        twitter: "@authorhuh",
        instagram: "@authorhuh",
        facebook: "authorhuh",
      },
    },
    category: "Health",
    tags: ["Langtang", "Trekking", "Nepal", "Safety", "Travel Guide"],
    readTime: "2 Hours",
    publishDate: "March 15, 2024",
    views: "2.4k",
    likes: 156,
    comments: 23,
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="relative h-96 bg-base-100 overflow-hidden">
        <Image
          src={`${imagekitUrl}/${blogPost.image}`}
          alt={blogPost.title}
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="badge badge-primary">{blogPost.category}</span>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPost.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{blogPost.views}</span>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                {blogPost.title}
              </h1>
              <p className="text-xl opacity-90 max-w-3xl">{blogPost.excerpt}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                className="leading-relaxed space-y-6"
              />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-outline badge-secondary hover:badge-primary cursor-pointer"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Author Info */}
            <div className="flex items-center justify-between mb-8 p-6 bg-base-100 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      src={`${imagekitUrl}/${blogPost.author.avatar}`}
                      alt={blogPost.author.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{blogPost.author.name}</h3>
                  <p className="text-sm">{blogPost.author.bio}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-sm"
                  >
                    <Share2 className="w-4 h-4" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <a className="flex items-center gap-2">
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2">
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-xl font-bold">Upcoming Events</h2>

            <div className="flex flex-col gap-4">
              <>
                {events.map((event, index) => (
                  <div
                    key={event.id}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <figure className="relative overflow-hidden">
                      <Image
                        src={`${imagekitUrl}/${event.image}`}
                        alt={event.title}
                        width={600}
                        height={400}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="badge badge-primary font-semibold">
                          Rs. {event.price}
                        </div>
                      </div>
                    </figure>

                    <div className="card-body">
                      <h3 className="card-title text-lg font-bold">
                        {event.title}
                      </h3>
                      <p className="text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
              </>
              <button className="btn btn-primary btn-outline btn-sm w-full">
                View all events
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Related Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <figure className="relative h-48">
                  <Image
                    src={`${imagekitUrl}/${post.image}`}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <h3 className="card-title font-semibold line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="card-actions justify-end mt-3">
                    <button className="btn btn-md btn-primary w-full">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
