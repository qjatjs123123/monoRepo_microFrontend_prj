import { DropDown } from "@/features/searchFavoriteCompany";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Input,
  SearchDropDown,
} from "@monorepo/ui";
import { Text } from "@monorepo/ui";
import { TextArea } from "@monorepo/ui";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Controller, useFormContext } from "react-hook-form";

export function ModalBody() {
  const { register, control } = useFormContext();

  return (
    <div className="px-4 py-4 border-t border-[var(--color-line-400)] gap-2 flex flex-col justify-start">
      <Text
        size="3"
        type="body"
        weight="bold"
        className="text-[var(--text-color-100)]"
      >
        관심기업 검색
      </Text>

      <Controller
        name="company_name"
        control={control}
        render={({ field }) => (
          <SearchDropDown>
            <SearchDropDown.Input>
              {({ setShowList, isExist }) => (
                <>
                  <Input
                    {...field}
                    placeholder={"관심기업 입력해주세요"}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      setShowList(true);
                    }}
                  />
                  <WrapperIcon isDown={isExist} />
                </>
              )}
            </SearchDropDown.Input>
            <SearchDropDown.Dropdown>
              {({ setShowList, isExist, setIsExist }) => (
                <ErrorBoundary fallback={<></>}>
                  <Suspense fallback={<></>}>
                    <DropDown
                      value={field.value}
                      onChange={field.onChange}
                      setShowList={setShowList}
                      isExist={isExist}
                      setIsExist={setIsExist}
                    />
                  </Suspense>
                </ErrorBoundary>
              )}
            </SearchDropDown.Dropdown>
          </SearchDropDown>
        )}
      />

      <TextArea {...register("memo")} placeholder="메모를 입력하세요" />
    </div>
  );
}

function WrapperIcon({ isDown }: { isDown: boolean }) {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 right-5 ">
      {isDown ? <ChevronDownIcon /> : <ChevronUpIcon />}
    </div>
  );
}
