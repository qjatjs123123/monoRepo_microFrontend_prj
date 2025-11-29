import { SearchDropDown } from "@/features/Manager/searchFavoriteCompany";
import { Text } from "@/shared/ui/Text/Text";
import { TextArea } from "@/shared/ui/TextArea/TextArea";
import { Controller, useFormContext } from "react-hook-form";

export function ModalBody() {
  const { register, control } = useFormContext();

  return (
    <div className="px-4 py-4 border-t border-[var(--color-line-400)] gap-2 flex flex-col justify-start">
      <Text
        size="3"
        type="body"
        weight="bold"
        align="left"
        className="text-[var(--text-color-100)]"
      >
        관심기업 검색
      </Text>

      <Controller
        name="company_name"
        control={control}
        render={({ field }) => (
          <SearchDropDown value={field.value} onChange={field.onChange} />
        )}
      />

      <TextArea {...register("memo")} placeholder="메모를 입력하세요" />
    </div>
  );
}
