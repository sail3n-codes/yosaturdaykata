import config from "@/config";
import { Phone, Mail, Send, HelpCircle } from "lucide-react";

export default function BookingPage() {
  const { bookingFormId } = config;
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="hero bg-base-100 text-white py-24 ">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Book Your Adventure</h1>
            <p className="text-xl">
              Complete the form below to start planning your perfect getaway
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Main Booking Form Section */}
          <div className="lg:col-span-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  Confirm your seat by filling up this form
                </h2>

                {/* Google Form Embed */}
                <div className="w-full h-[980px]">
                  <iframe
                    src={`https://docs.google.com/forms/d/e/${bookingFormId}/viewform?embedded=true&hl=en`}
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                    title="Travel Booking Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            {/* Contact Information */}
            <div className="card bg-base-100 shadow-xl mb-6">
              <div className="card-body">
                <h2 className="card-title text-lg">Contact Us</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-base-content/60" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-base-content/80">
                        +977 9800000000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-base-content/60" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-base-content/80">
                        email@yosaturdaykata.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Send className="h-4 w-4 text-base-content/60 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Social Media</p>
                      <div></div>
                      <p className="text-sm text-base-content/80">
                        @yosaturdaykata
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-center mt-4">
                  <a
                    href="tel:+9779800000000"
                    className="btn btn-primary btn-sm w-full"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="card bg-base-100 shadow-xl mb-6">
              <div className="card-body">
                <h3 className="card-title text-lg">Why Book With Us?</h3>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <span className="text-sm">Expert travel planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <span className="text-sm">24/7 customer support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <span className="text-sm">Best price guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="badge badge-secondary badge-xs"></div>
                    <span className="text-sm">Flexible cancellation</span>
                  </li>
                </ul>

                <div className="alert alert-success mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs">
                    We&apos;ll respond within 24 hours!
                  </span>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <HelpCircle className="h-5 w-5 text-secondary" />
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title text-sm font-medium">
                      How long does it take to get a quote?
                    </div>
                    <div className="collapse-content">
                      <p className="text-sm text-base-content/70">
                        We typically respond within 24 hours with a detailed
                        quote and itinerary.
                      </p>
                    </div>
                  </div>

                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-sm font-medium">
                      Can I make changes to my booking?
                    </div>
                    <div className="collapse-content">
                      <p className="text-sm text-base-content/70">
                        Yes, changes can be made subject to availability and may
                        incur additional fees.
                      </p>
                    </div>
                  </div>

                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-sm font-medium">
                      Do you offer group discounts?
                    </div>
                    <div className="collapse-content">
                      <p className="text-sm text-base-content/70">
                        Yes, we offer special rates for groups of 8 or more
                        travelers.
                      </p>
                    </div>
                  </div>

                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-sm font-medium">
                      Is travel insurance included?
                    </div>
                    <div className="collapse-content">
                      <p className="text-sm text-base-content/70">
                        Sorry, we don&apos;t provide any insurance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
