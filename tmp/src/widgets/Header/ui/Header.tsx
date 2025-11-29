import Image from "next/image";
import { Text } from "@/shared/ui/Text/Text";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex justify-between  w-full py-5">
      <Image src="/logo.png" alt="회사 로고" width={117} height={24} />

      <div>
        <Link href={"/"}>
          <Text type="body" weight="bold">일반과제</Text>
        </Link>
      </div>
    </div>
  );
}
