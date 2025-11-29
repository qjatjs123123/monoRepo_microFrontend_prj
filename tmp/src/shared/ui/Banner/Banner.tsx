import Image from "next/image";
import { Text } from "../Text/Text";

interface BannerProps {
  title: string;
}

export function Banner({ title }: BannerProps) {
  return (
    <div className="relative w-full h-[25vh] relative">
      <Image
        src="/Banner.png"
        alt="배너 이미지"
        fill
        className="object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
        <Text type="title" weight="bold" size="4">
          PwC 삼일 Acceleration Center
        </Text>
        <Text type="title" weight="bold">
          {title}
        </Text>
      </div>
    </div>
  );
}
