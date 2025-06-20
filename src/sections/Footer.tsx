import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-100 text-base-content p-4 flex flex-col gap-4 items-center">
      <div className="w-full flex gap-8">
        {/* Brand */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-bold">Yo Saturday Kata</h2>
          <p className="text-sm mt-2">
            It&apos;s not just travelling but also building connections.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col flex-1">
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Destinations</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">About Us</a>
        </div>

        {/* Legal */}
        <div className="flex flex-col flex-1">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Cookie Policy</a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col flex-1 justify-center">
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Subscribe to our newsletter</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="email@travel.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full border-t pt-4 text-sm flex justify-center">
        <p>© 2025 YoSaturdayKata. All rights reserved.</p>
      </div>
    </footer>
  );
}
