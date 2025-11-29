"use client";
import Image from "next/image";
import { Text } from "@/shared/ui/Text/Text";
import { useCheckContext } from "@/features/Manager/checkFavoriteCompany";

export function ModalBody() {
  const { checkedIds } = useCheckContext();
  const count = checkedIds.length

  return (
    <>
      <Image src="/close.png" width={80} height={80} alt="close" />

      <Text type="title" weight="bold" size="3">
        총 {count}개를 삭제하시겠습니까?
      </Text>
      <div className="flex flex-col">
        <Text
          type="body"
          weight="bold"
          className="text-[var(--text-color-100)]"
          size="3"
        >
          관심기업 삭제시 복구할 수 없습니다.
        </Text>
        <Text
          type="body"
          weight="bold"
          className="text-[var(--text-color-100)]"
          size="3"
        >
          정말 삭제하시겠습니까?
        </Text>
      </div>
    </>
  );
}
