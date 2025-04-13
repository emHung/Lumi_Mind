import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#fff5fd]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-cormorant-garamond text-gray-900 mb-12 text-center">
            Liên hệ với chúng tôi
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-cormorant-garamond text-gray-900 mb-6">
                Thông tin liên hệ
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-cormorant-garamond text-gray-900">Địa chỉ</p>
                    <p className="text-base font-cormorant-garamond text-gray-600">
                      123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-cormorant-garamond text-gray-900">Điện thoại</p>
                    <p className="text-base font-cormorant-garamond text-gray-600">
                      +84 123 456 789
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-cormorant-garamond text-gray-900">Email</p>
                    <p className="text-base font-cormorant-garamond text-gray-600">
                      info@medicalequipment.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-cormorant-garamond text-gray-900 mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 text-base font-cormorant-garamond text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-cormorant-garamond text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 text-base font-cormorant-garamond text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Nhập địa chỉ email của bạn"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-cormorant-garamond text-gray-900 mb-2">
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 text-base font-cormorant-garamond text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Nhập nội dung tin nhắn của bạn"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-base font-cormorant-garamond text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    Gửi tin nhắn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;