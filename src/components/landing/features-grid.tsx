import React from 'react';
import Image from 'next/image';

const FeaturesGrid = () => {
  const features = [
    {
      title: 'Tổ Chức Doanh Nghiệp',
      description: 'Giúp các tổ chức, doanh nghiệp nâng cao hiệu suất lao động, kiến toàn môi trường làm việc thông qua các hoạt động cùng có tâm lý cho nhân sự.',
      image: '/certs/2.jpg'
    },
    {
      title: 'Cá Nhân',
      description: 'Giúp đỡ các cá nhân giải quyết các vấn đề tâm lý, khúc mắc của bản thân để nâng cao tinh thần, điều kiện sống giúp giải tỏa những căng thẳng lo âu',
      image: '/certs/1.jpg'
    }
  ];

  return (
    <section className="py-16 bg-[#f0faff]" id="Service">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-cormorant-garamond text-gray-900 mb-12 text-center">
            Dịch vụ của chúng tôi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="shadow-xl p-4 rounded-xl overflow-hidden items-center border-2 border-gray-400">
                <div className="relative w-full h-[300px] p-4">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-fill rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-cormorant-garamond text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base font-cormorant-garamond text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid; 