import { Text } from "@monorepo/ui";
import { Logo } from "@monorepo/ui";
import "./global.css";

export default function Header() {
  return (
    <div className="header:flex header:justify-between  header:w-full header:py-5">
      <img src={Logo} alt="회사 로고" width={117} height={24} />

      <div>
        <Text type="body" weight="bold">
          일반과제
        </Text>
      </div>
    </div>
  );
}
