import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="lg:col-span-1">
            <div className="flex justify-center items-center md:justify-start gap-2 mb-4">
              <h3 className="logo-text">YoSaturdayKata</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted travel companion for unforgettable adventures. We
              help you discover amazing destinations, plan perfect trips, and
              create memories that last a lifetime.
            </p>
          </div>

          {/* Destinations Column */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations/sailung" className="footer-links">
                  Sailung
                </Link>
              </li>
              <li>
                <Link href="/destinations/north-abc" className="footer-links">
                  North ABC
                </Link>
              </li>
              <li>
                <Link href="/destinations/ama-yangri" className="footer-links">
                  Ama Yangri
                </Link>
              </li>
              <li>
                <Link href="/destinations/mailung" className="footer-links">
                  Mailung
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="footer-links">
                  View All Destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Discover</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/booking" className="footer-links">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="footer-links">
                  Travel Stories
                </Link>
              </li>
              <li>
                <Link href="/events" className="footer-links">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="footer-links">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/shop" className="footer-links">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Support & Info</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="footer-links">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="footer-links">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/booking-policy" className="footer-links">
                  Booking Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="footer-links">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-links">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="footer-links">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-6 mt-8 justify-center md:justify-start">
          <Link href="/privacy" className="footer-links">
            Privacy Policy
          </Link>
          <Link href="/terms" className="footer-links">
            Terms of Service
          </Link>
          <Link href="/cookies" className="footer-links">
            Cookie Policy
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-4 pt-4">
          <div className="text-center">
            <p className="text-sm">
              © 2025 <span className="text-primary">YoSaturdayKata</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
