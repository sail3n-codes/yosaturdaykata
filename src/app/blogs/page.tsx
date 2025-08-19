import Image from "next/image";
import Link from "next/link";
import { Clock, User, Users } from "lucide-react";
import config from "@/src/config";
import { BLOGS } from "@/src/sample";
import Pagination from "@/src/components/Pagination";

export default function BlogListPage() {
  const { imagekitUrl } = config;
  const blogPosts = BLOGS;
  const popularFeatured = BLOGS[0];
  const popularPosts = BLOGS.slice(0, 4);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Popular Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Popular Post */}
            <div className="lg:col-span-2">
              <Link
                href={`/blogs/${popularFeatured.id}`}
                className="block group h-full"
              >
                <div className="relative h-full bg-base-100 rounded-lg overflow-hidden">
                  <Image
                    src={`${imagekitUrl}/${popularFeatured.image}`}
                    alt={popularFeatured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-white">
                      <div className="text-sm mb-2">
                        {popularFeatured.category}
                      </div>
                      <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-color duration-300">
                        {popularFeatured.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm opacity-90">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{popularFeatured.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{popularFeatured.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Popular Posts List */}
            <div className="space-y-4 flex flex-col justify-center">
              {popularPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.id}`}
                  className="block group"
                >
                  <div className="flex gap-4 p-4 rounded-lg bg-base-100 transition-colors">
                    <div className="relative w-24 h-auto rounded flex-shrink-0 overflow-hidden flex items-center">
                      <Image
                        src={`${imagekitUrl}/${post.image}`}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div className="text-xs mb-1">{post.category}</div>
                        <div className="flex items-center gap-1 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h4 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-color duration-300">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Posts Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-6">All Blogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <figure className="relative h-48">
                  <Image
                    src={`${imagekitUrl}/${post.image}`}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </figure>
                <div className="card-body p-4">
                  <div className="text-sm mb-2 badge badge-accent badge-sm">
                    {post.category}
                  </div>
                  <h3 className="card-title font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-color duration-300">
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
        <Pagination />
      </div>
    </div>
  );
}
