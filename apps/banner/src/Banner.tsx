import { Text } from "@monorepo/ui";
import { Banner as bannerImg } from "@monorepo/ui";
import "./global.css";

interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  return (
    <div className="banner:relative banner:w-full banner:h-[25vh]">
      <img
        src={bannerImg}
        alt="배너 이미지"
        className="banner:object-cover banner:w-full banner:h-full"
      />
      <div className="banner:absolute banner:top-1/2 banner:left-1/2 banner:-translate-x-1/2 banner:-translate-y-1/2 banner:flex banner:flex-col banner:gap-2 banner:text-center">
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
