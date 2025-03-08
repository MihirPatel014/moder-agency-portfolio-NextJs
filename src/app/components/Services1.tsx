"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn,  faPenNib, faCode } from "@fortawesome/free-solid-svg-icons";
import { 
  faMagnifyingGlass,
  faMoneyBill,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    id: 1,
    title: "Social Media Management",
    description:
      "We create, manage, and grow your social media presence across all platforms to build engagement and drive sales.",
    icon: faBullhorn,
    color: "red",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    description:
      "We optimize your website for search engines to ensure higher rankings, better visibility, and increased organic traffic.",
    icon: faMagnifyingGlass,
    color: "blue",
  },
  {
    id: 3,
    title: "Content Marketing",
    description:
      "From compelling copywriting to high-quality visuals and videos, we craft content that resonates with your audience and converts.",
    icon: faPenNib,
    color: "yellow",
  },
  {
    id: 4,
    title: "Paid Advertising",
    description:
      "Data-driven ad campaigns on platforms like Google, Facebook, Instagram, TikTok, and LinkedIn to maximize your ROI.",
    icon: faMoneyBill,
    color: "red",
  },
  {
    id: 5,
    title: "Email & SMS Marketing",
    description:
      "Automated and personalized marketing strategies to boost customer retention and sales.",
    icon: faEnvelope,
    color: "blue",
  },
  {
    id: 6,
    title: "Website Development",
    description:
      "Optimized Shopify, WordPress, and custom websites that drive conversions and provide seamless user experiences.",
    icon: faCode,
    color: "yellow",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">Services We Offer</h2>
          <p className="text-lg opacity-80">
            Helping businesses build a strong online presence with expert
            insights and proven methodologies.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Services */}
          <div className="col-span-3 lg:col-span-1 flex flex-col space-y-10">
            {services.slice(0, 3).map((service) => (
              <ServiceItem key={service.id} service={service} isRightAlign />
            ))}
          </div>

          {/* Center Image */}
          <div className="col-span-3 lg:col-span-1 flex justify-center">
            <div className="w-full max-w-sm">
              <img
                src="https://cdn.easyfrontend.com/pictures/sign-in-up/sign3.jpg"
                alt="Service Illustration"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Services */}
          <div className="col-span-3 lg:col-span-1 flex flex-col space-y-10">
            {services.slice(3, 6).map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({
  service,
  isRightAlign = false,
}: {
  service: { id: number; title: string; description: string; icon: any; color: string };
  isRightAlign?: boolean;
}) => (
  <div className={`flex items-center gap-4 ${isRightAlign ? "lg:text-end lg:flex-row-reverse" : ""}`}>
    {/* Icon */}
    <div
      className={`w-36 h-16 flex justify-center items-center rounded-full text-white text-3xl transition-transform transform hover:scale-110
        ${service.color === "red" ? "bg-red-500" : ""}
        ${service.color === "blue" ? "bg-blue-500" : ""}
        ${service.color === "yellow" ? "bg-yellow-500" : ""}
      `}
    >
      <FontAwesomeIcon icon={service.icon} />
    </div>

    {/* Text Content */}
    <div>
      <h4 className="text-2xl font-medium mb-2">{service.title}</h4>
      <p className="opacity-80 text-sm">{service.description}</p>
    </div>
  </div>
);

export default Services;
