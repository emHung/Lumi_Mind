"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = (timestamp - startTimeRef.current) / (duration * 1000);

      if (progress < 1) {
        countRef.current = Math.min(Math.floor(end * progress), end);
        setCount(countRef.current);
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
      countRef.current = 0;
    };
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
};

const stats = [
  { number: 10000, suffix: '+', label: 'Khách hàng hài lòng' },
  { number: 78, suffix: '+', label: 'Chuyên gia tâm lý' },
  { number: 98, suffix: '%', label: 'Tỷ lệ hài lòng' }
];

const slides = [
  {
    title: "Chia sẻ tâm sự, nhận lời",
    highlight: "khuyên từ chuyên gia",
    description: "Chúng tôi lắng nghe và hỗ trợ bạn giải quyết những khó khăn trong cuộc sống, công việc và các mối quan hệ.",
    primaryButton: {
      text: "Bắt đầu tư vấn ngay",
      href: "/consultation"
    },
    secondaryButton: {
      text: "Tìm hiểu thêm",
      href: "/about"
    }
  },
  {
    title: "Kết nối với những người",
    highlight: "đồng điệu",
    description: "Tìm kiếm và kết nối với những người có cùng sở thích, quan điểm sống. Chia sẻ những khoảnh khắc ý nghĩa cùng nhau.",
    primaryButton: {
      text: "Tìm bạn đồng hành",
      href: "/connect"
    },
    secondaryButton: {
      text: "Tìm hiểu thêm",
      href: "/community"
    }
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="bg-[#fff5fd] min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative py-20">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-all group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#3365b5]" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-all group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#3365b5]" />
        </button>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : "opacity-0 absolute inset-0 translate-x-full"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant-garamond text-gray-900 mb-6">
                {slide.title} <br />
                <span className="text-[#3365b5]">{slide.highlight}</span>
              </h1>
              <p className="text-xl font-cormorant-garamond text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="tracking-wide font-cormorant-garamond bg-[#3365b5] text-white px-8 py-3 text-lg rounded-lg hover:bg-[#2855a0] transition-colors w-full sm:w-auto"
                  asChild
                >
                  <a href={slide.primaryButton.href}>{slide.primaryButton.text}</a>
                </Button>
                <Button 
                  className="tracking-wide bg-white text-[#3365b5] px-8 py-3 text-lg rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto font-cormorant-garamond"
                  variant="outline"
                  asChild
                >
                  <a href={slide.secondaryButton.href}>{slide.secondaryButton.text}</a>
                </Button>
              </div>
            </div>

            {/* Stats Section */}
          </div>
        ))}

        {/* Slide Navigation Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-[#3365b5] w-4" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-white rounded-2xl shadow-lg py-6 px-8">
                <div className="grid grid-cols-3 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#3365b5] mb-2">
                        {shouldAnimate && (
                          <CountUp
                            end={stat.number}
                            duration={4}
                            suffix={stat.suffix}
                          />
                        )}
                      </div>
                      <div className="text-gray-600 font-cormorant-garamond text-lg">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default HeroSection;
