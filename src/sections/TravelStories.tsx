import config from "@/config";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "10 Waterfalls to visit this monsoon",
    excerpt:
      "Discover breathtaking destinations off the beaten path that will leave you speechless and craving for more adventures.",
    image: "/static/waterfall.jpg?updatedAt=1750487126723&height=300&width=400",
    author: "Aakash Silwal",
    date: "June 21, 2025",
    readTime: "8 min read",
    category: "Destinations",
  },
  {
    id: 2,
    title: "Solo Travel Guide: How to Explore the World Safely",
    excerpt:
      "Essential tips and tricks for solo travelers to make the most of their journey while staying safe and confident.",
    image:
      "/static/solo-travel.jpg?updatedAt=1750487164725&height=300&width=400",
    author: "Chokley Kalden",
    date: "June 21, 2025",
    readTime: "12 min read",
    category: "Travel Tips",
  },
  {
    id: 3,
    title: "Budget Travel: Amazing Adventures Under Rs.1000",
    excerpt:
      "Prove that incredible travel experiences don't have to break the bank with these budget-friendly destination ideas.",
    image:
      "/static/budget-travel.jpg?updatedAt=1750487169095&height=300&width=400",
    author: "Sailendra Maharjan",
    date: "June 21, 2025",
    readTime: "6 min read",
    category: "Budget Travel",
  },
];

export default function TravelStories() {
  const { imagekitUrl } = config;
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 scale-up-animation">
            Latest Travel <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Get inspired by real travel experiences, expert tips, and insider
            secrets from fellow adventurers around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <figure className="relative overflow-hidden">
                <Image
                  src={imagekitUrl + post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="badge badge-secondary font-semibold">
                    {post.category}
                  </div>
                </div>
              </figure>

              <div className="card-body">
                <h3 className="card-title text-lg font-bold line-clamp-2 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-sm line-clamp-3 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm mb-4">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn btn-outline btn-lg">
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
