import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    author: "TS. Nguyễn Hoàng Khắc Hiếu",
    image: "/certs/dn1.jpg"
  },
  {
    id: 2,
    author: "Coach Ngô Thị Bích Quyên",
    image: "/certs/dn2.jpg"
  },
  {
    id: 3,
    author: "Thạc sĩ Ái Ngọc Phân",
    image: "/certs/dn3.jpg"
  },
  {
    id: 4,
    author: "Cộng đồng chuyên gia từ Better Psychology",
    image: "/certs/dn4.jpg"
  },
  {
    id: 5,
    author: "Cộng đồng chuyên gia từ NHC Việt Nam",
    image: "/certs/dn5.jpg"
  }
];

const TestimonialsSection = () => {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <section id="Team" className="py-16 bg-[#fff5fd]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-cormorant-garamond text-gray-900 mb-4">
            Đội ngũ chuyên gia
          </h2>
        </div>

        {/* First Row - 3 items */}
        <div className="grid grid-cols-3 md:grid-cols-1 gap-8 mb-12">
          {firstRow.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center">
              <div className="w-[200px] h-[200px] mb-4 relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={200}
                  height={200}
                  className="border-2 border-gray-300 p-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-cormorant-garamond text-gray-900 text-center max-w-[200px]">
                {testimonial.author}
              </h3>
            </div>
          ))}
        </div>

        {/* Second Row - 2 items centered */}
        <div className="flex justify-center gap-8">
          {secondRow.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center">
              <div className="w-[200px] h-[200px] mb-4 relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={200}
                  height={200}
                  className="border-2 border-gray-300 p-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-cormorant-garamond text-gray-900 text-center max-w-[200px]">
                {testimonial.author}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;