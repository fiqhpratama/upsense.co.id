import React from 'react';
import Link from 'next/link';

interface CtaSectionProps {
  showButton?: boolean;
  heading?: string;
  description?: string;
}

const CtaSection = ({
  showButton = true,
  heading = 'Strategic Inquiry? Our Executive Team is Prepared to Assist.',
  description = 'We provide comprehensive technical resources to enhance your operational efficiency and institutional effectiveness through mission-critical digital solutions.',
}: CtaSectionProps) => {
  return (
    <section
      id="sub"
      className="py-16 md:py-20 bg-gradient-to-r from-[#013e78] to-[#012d56] relative overflow-hidden"
    >
      {/* Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className={showButton ? "md:w-9/12" : "w-full text-center"}>
              <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
                {heading}
              </h2>
              <p className={`text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto${showButton ? ' md:mx-0' : ''}`}>
                {description}
              </p>
            </div>
            {showButton && (
              <div className="md:w-3/12 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center bg-white text-[#013e78] font-black py-4 px-10 rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-100 active:scale-95 text-xl"
                >
                  ENGAGE OUR TEAM
                </Link>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
