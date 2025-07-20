import Image from "next/image";
import { Heart, Star, MapPin, Clock, Users } from "lucide-react";
import { BLOGS, EVENTS } from "@/sample";
import config from "@/config";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";

export default function Events() {
  const { imagekitUrl } = config;
  const tours = EVENTS;
  const blogPosts = BLOGS?.slice(0, 4);

  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 space-y-6">
            <h3 className="font-semibold text-center">Filter Events By</h3>

            <div className="card bg-base-100 p-4">
              <h3 className="font-semibold mb-4">Tour Type</h3>
              <div className="space-y-3">
                {["Hike", "Trekking", "Cultural Event", "Camping"].map(
                  (tour) => (
                    <label
                      key={tour}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input type="checkbox" className="checkbox checkbox-sm" />
                      <span className="text-sm">{tour}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="card bg-base-100 p-4">
              <h3 className="font-semibold mb-4">Difficulty Grade</h3>
              <div className="space-y-3">
                {["Beginner", "Medium", "Hard"].map((location) => (
                  <label
                    key={location}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span className="text-sm">{location}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="card bg-base-100 p-4">
              <h3 className="font-semibold mb-4">Duration in Days</h3>
              <div className="w-full max-w-xs">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value="9"
                  className="range range-xs range-primary"
                  step="1"
                />
                <div className="flex justify-between px-2.5 mt-2 text-xs">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 p-4">
              <h3 className="font-semibold mb-4">Rating</h3>
              <div className="rating rating-xl">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-primary"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-primary"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-primary"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-primary"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-primary"
                  aria-label="5 star"
                />
              </div>
            </div>
            <button className="btn btn-primary btn-md text-lg px-8 w-full">
              Filter Results
            </button>
          </div>

          <div className="flex-1">
            <div className="mb-8 flex justify-end w-full">
              <SearchBar />
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="whitespace-nowrap">99 results</span>
              <div className="flex items-center gap-2">
                <span className="text-sm whitespace-nowrap">Sort by:</span>
                <select className="select select-sm select-bordered">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="card-body p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="relative md:w-80 h-48 md:h-auto">
                        <Image
                          src={`${imagekitUrl}/${tour.image}`}
                          alt={tour.title}
                          fill
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                        {tour.featured && (
                          <div className="absolute top-3 left-3">
                            <span className="badge badge-secondary text-xs px-2 py-1">
                              FEATURED
                            </span>
                          </div>
                        )}
                        <button className="absolute top-3 right-3 btn btn-circle btn-sm bg-white border-none hover:bg-primary">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{tour.location}</span>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm mb-1">
                              <Clock className="w-4 h-4" />
                              <span>{tour.duration}</span>
                            </div>
                          </div>
                        </div>

                        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                          {tour.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-yellow-400" />
                            <span className="font-semibold text-sm">
                              {tour.rating}
                            </span>
                            <span className="text-sm">({tour.reviews})</span>
                          </div>
                        </div>

                        <p className="text-sm mb-4 line-clamp-2">
                          {tour.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {tour.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-sm bg-success px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-sm">From </span>
                            <span className="text-xl font-bold">
                              Rs. {tour.price}
                            </span>
                          </div>
                          <button className="btn btn-outline btn-primary">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Pagination />

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">
                Recommended Travel Blogs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </div>
  );
}
