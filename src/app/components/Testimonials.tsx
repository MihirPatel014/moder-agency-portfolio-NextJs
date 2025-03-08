import React from "react";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

 const testimonialsdata: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "Working with ModernAgency has been a game-changer for our business. Their innovative solutions and dedicated team have helped us achieve remarkable growth.",
    image: "https://mighty.tools/mockmind-api/content/human/104.jpg",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, GrowthCo",
    content:
      "The expertise and creativity of ModernAgency's team are unmatched. They’ve transformed our digital presence and significantly boosted our ROI.",
    image: "https://mighty.tools/mockmind-api/content/human/125.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Founder, StartupX",
    content:
      "ModernAgency's consulting services provided us with invaluable insights and strategies that have been crucial to our startup's success.",
    image: "https://mighty.tools/mockmind-api/content/human/122.jpg",
  },
  {
    name: "Sarah Lee",
    role: "CMO, InnovateInc",
    content:
      "Their team is filled with experts who truly understand the digital landscape. We saw immediate improvements in our brand engagement.",
    image: "https://mighty.tools/mockmind-api/content/human/124.jpg",
  },
  {
    name: "Michael Brown",
    role: "CTO, FutureTech",
    content:
      "ModernAgency’s strategies and execution helped us stay ahead of the competition. Highly recommended!",
    image: "https://mighty.tools/mockmind-api/content/human/90.jpg",
  },
];

const firstRow = testimonialsdata.slice(0, testimonialsdata.length / 2);
const secondRow = testimonialsdata.slice(testimonialsdata.length / 2);

const TestimonialCard = ({
  image,
  name,
  role,
  content,
}: Testimonial) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={image} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">&ldquo;{content}&rdquo;</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>

          {/* Gradient Overlays for Better Visibility */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
