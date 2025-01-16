import { useState, useEffect } from "react";
import { websiteContent } from "../data/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  const { testimonials } = websiteContent;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () =>
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );

  const prev = () =>
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            <div className="mb-8">
              <div className="text-5xl text-primary mb-4">"</div>
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                {testimonials[currentIndex].quote}
              </p>
              <div className="text-primary font-semibold">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-gray-500">
                {testimonials[currentIndex].position}
              </div>
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};