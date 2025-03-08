import React from "react";
import { Marquee } from "@/components/magicui/marquee";
interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}


const testimonials : Testimonial[] = [
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
const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);
const thirdRow = testimonials.slice(0, testimonials.length / 2);
const fourthRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({ name, role, content, image }: Testimonial) => {
  return (
    <div className="w-64 h-auto bg-white rounded-lg shadow-lg p-4 border border-yellow-600">
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-2"
        />
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-gray-600 text-xs mb-2">{role}</p>
      </div>
      <p className="text-gray-700 text-xs italic">&ldquo;{content}&rdquo;</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        {/* 3D Marquee Effect */}
        <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
            }}
          >
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstRow.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
              {secondRow.map((testimonial, index) => (
                <TestimonialCard key={`reverse-${index}`} {...testimonial} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
              {thirdRow.map((testimonial, index) => (
                <TestimonialCard key={`third-${index}`} {...testimonial} />
              ))}
            </Marquee>

            <Marquee pauseOnHover className="[--duration:20s]" vertical>
              {fourthRow.map((testimonial, index) => (
                <TestimonialCard key={`fourth-${index}`} {...testimonial} />
              ))}
            </Marquee>
          </div>

          {/* Gradient Overlays for Better Visibility */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-100"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-100"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
