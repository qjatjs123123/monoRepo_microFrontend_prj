import { Button } from "@/src/shared/ui/Button/Button";
import { Text } from "@/src/shared/ui/Text/Text";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Text weight="bold" size="1" type="title">123</Text>
      <Button type="primary" style="fill">관심기업 생성</Button>
      <Button type="primary" style="outline">관심기업 생성</Button>
    </>
  );
}
