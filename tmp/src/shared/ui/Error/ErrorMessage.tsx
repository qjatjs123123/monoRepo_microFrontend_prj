import { ReactElement, ReactNode } from "react";
import { Text } from "../Text/Text";
import Image from "next/image";

interface ErrorMessageProps {
  src: string;
  description?: ReactNode;
  button?: ReactElement;
  title: string
}

export function ErrorMessage({ src, title, description, button }: ErrorMessageProps) {
  return (
    <div className="flex flex-col p-[54px] justify-center items-center gap-2">
      <Image
        src={src}
        width={60}
        height={60}
        alt="error-image"
      />
      <Text weight="bold" type="title" size="2">
        {title}
      </Text>

      {description}
      {button && <div className="mt-[15px]">{button}</div>}
    </div>
  );
}
