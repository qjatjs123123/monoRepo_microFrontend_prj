import { ErrorMessage } from "@monorepo/ui";
import { Text } from "@monorepo/ui";
import Box from "@monorepo/ui/public/box.webp";

export function Empty() {
  return (
    <ErrorMessage
      src={Box}
      title="비어있어요"
      description={
        <div className="flex flex-col">
          <Text
            type="body"
            weight="bold"
            size="3"
            className="text-[var(--text-color-100)]"
          >
            관심기업 생성 버튼을 눌러
          </Text>
          <Text
            type="body"
            weight="bold"
            size="3"
            className="text-[var(--text-color-100)]"
          >
            관심기업을 관리해보세요
          </Text>
        </div>
      }
    />
  );
}
