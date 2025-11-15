import { ReactElement, ReactNode } from "react";
import { Text } from "../Text/Text";
import Image from "next/image";

interface ErrorMessageProps {
  description?: ReactNode;
  button?: ReactElement;
}

export function ErrorMessage({ description, button }: ErrorMessageProps) {
  return (
    <div className="flex flex-col p-[54px] justify-center items-center gap-2">
      <Image
        src={"/empty-2-spot-apng.png"}
        width={60}
        height={60}
        alt="error-image"
      />
      <Text weight="bold" type="title" size="2">
        다시 시도해주세요
      </Text>

      {description}
      {button && <div className="mt-[15px]">{button}</div>}
    </div>
  );
}
