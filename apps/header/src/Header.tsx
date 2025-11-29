import { Text } from "@monorepo/ui";
import { Logo } from "@monorepo/ui";

export default function Header() {
  return (
    <div className="flex justify-between  w-full py-5">
      <img src={Logo} alt="회사 로고" width={117} height={24} />

      <div>
        <Text type="body" weight="bold">
          일반과제11
        </Text>
      </div>
    </div>
  );
}
