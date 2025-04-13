import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface VisionMissionProps {
  title: string;
  description: string;
  icon: string;
}

function VisionMissionCard({ title, description, icon }: VisionMissionProps) {
  return (
    <Card className="overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-none">
      <CardContent className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-[#3365b5]/10 flex items-center justify-center flex-shrink-0">
            <Image
              src={icon}
              alt={title}
              width={24}
              height={24}
              className="text-[#3365b5]"
            />
          </div>
          <div>
            <h3 className="text-2xl font-cormorant-garamond text-gray-900 mb-4">{title}</h3>
            <p className="text-lg font-cormorant-garamond text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function VisionMissionSection() {
  const content = [
    {
      title: "Tầm nhìn",
      description: "Trở thành nền tảng chăm sóc sức khỏe tinh thần đáng tin cậy và dễ tiếp cận cho các chuyên gia, sinh viên và tất cả những ai đang tìm kiếm sự cân bằng cảm xúc. Nơi mỗi cá nhân có thể tìm thấy sự đồng hành, động lực và những công cụ hỗ trợ để phát triển, duy trì sự tích cực và thành công trong công việc, học tập và cuộc sống.",
      icon: "/icons/vision.svg"
    },
    {
      title: "Sứ mệnh",
      description: "LumiMind Haven cam kết hỗ trợ mọi người quan tâm đến sức khỏe tinh thần thông qua các giải pháp toàn diện - từ tư vấn tâm lý và liệu pháp trị liệu đến nội dung giáo dục và các hoạt động cộng đồng. Chúng tôi đặt ưu tiên vào sự an toàn, bảo mật và trải nghiệm cá nhân hóa của khách hàng, đảm bảo rằng mọi người đều cảm thấy thoải mái và được tôn trọng trong hành trình chăm sóc sức khỏe tinh thần của mình.",
      icon: "/icons/mission.svg"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#f0faff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-cormorant-garamond text-gray-900 mb-4 text-center">
            Về chúng tôi
          </h2>
          <p className="text-xl font-cormorant-garamond text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Cam kết mang đến giải pháp chăm sóc sức khỏe tinh thần toàn diện và chuyên nghiệp
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.map((item) => (
              <VisionMissionCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}