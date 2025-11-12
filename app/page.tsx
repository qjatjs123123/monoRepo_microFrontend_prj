import { Banner } from "@/src/shared/ui/Banner/Banner";
import { Button } from "@/src/shared/ui/Button/Button";
import CheckBox from "@/src/shared/ui/CheckBox/CheckBox";
import { Text } from "@/src/shared/ui/Text/Text";

export default function Home() {
  return (
    <>
      <Text weight="bold" size="1" type="title">123</Text>
      <Button type="primary" style="fill">관심기업 생성</Button>
      <Button type="primary" style="outline">관심기업 생성</Button>
      <Banner title="관심기업 관리 서비스"/>
    </>
  );
}
