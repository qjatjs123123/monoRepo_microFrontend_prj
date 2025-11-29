import { ErrorMessage } from "../Error/ErrorMessage";
import { Text } from "../Text/Text";

export function Empty() {
  return (
    <ErrorMessage
      src="/empty-box.webp"
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
