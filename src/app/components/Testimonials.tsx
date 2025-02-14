import React from 'react';
 // Make sure to create this file or use global styles

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content:
      'Working with ModernAgency has been a game-changer for our business. Their innovative solutions and dedicated team have helped us achieve remarkable growth.',
    image: '/placeholder.svg', // Dummy image for the avatar
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, GrowthCo',
    content:
      'The expertise and creativity of ModernAgency\'s team are unmatched. They\'ve transformed our digital presence and significantly boosted our ROI.',
    image: '/placeholder.svg',
  },
  {
    name: 'Alex Johnson',
    role: 'Founder, StartupX',
    content:
      'ModernAgency\'s consulting services provided us with invaluable insights and strategies that have been crucial to our startup\'s success.',
    image: '/placeholder.svg',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-white rounded-lg shadow-lg p-6 mb-8 border-yellow-600">
                <div className="flex flex-col items-center text-center mb-4">
                  {/* Avatar Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mb-4" // Custom styling for avatar image
                  />
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{testimonial.role}</p>
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
