'use client';

import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useIsTablet from '@/hooks/useTablet';

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

interface ServiceCarouselProps {
  title?: string;
  items: ServiceItem[];
  autoplayInterval?: number; // In milliseconds
}

export const ServiceCarousel = ({
  title,
  items,
  autoplayInterval = 5000,
}: ServiceCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTablet = useIsTablet

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isTablet || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [isTablet, items.length, autoplayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (isTablet) {
    return (
      <div className="w-full">
        {title && (
          <h2 className="mb-8 text-center text-2xl font-bold text-blue-600">
            {title}
          </h2>
        )}

        {/* Mobile Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-blue-300 bg-white p-6">
                {/* Icon Circle */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                  <div className="text-white text-4xl flex items-center justify-center">
                    {items[currentIndex].icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-center text-lg font-semibold text-blue-600">
                  {items[currentIndex].title}
                </h3>

                {/* Description */}
                <p className="text-center text-sm text-gray-600 leading-relaxed">
                  {items[currentIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute -left-10 top-1/2 -translate-y-1/2 transform rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 transition-colors"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-10 top-1/2 -translate-y-1/2 transform rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 transition-colors"
            aria-label="Next slide"
          >
            →
          </button>

          {/* Dot Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-blue-600'
                    : 'w-2 bg-blue-300 hover:bg-blue-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop Grid View
  return (
    <div className="w-full">
      {title && (
        <h2 className="mb-8 text-center text-2xl font-bold text-blue-600">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-blue-300 bg-white p-6 h-full hover:shadow-lg transition-shadow">
              {/* Icon Circle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
              >
                <div className="text-white text-4xl flex items-center justify-center">
                  {item.icon}
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-center text-lg font-semibold text-blue-600">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-center text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
