"use client";

import { Input } from "@/shared/ui/Input/Input";
import { CompanySuggest } from "./common/CompanySuggest";
import { Suspense, useState } from "react";
import { ChevronDownIcon } from "../../../../shared/ui/Icon/ChevronDownIcon";
import { ChevronUpIcon } from "@/shared/ui/Icon/ChevronUpIcon";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryClient } from "@tanstack/react-query";

interface SearchDropDownProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchDropDown({ value, onChange }: SearchDropDownProps) {
  const [showList, setShowList] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const queryClient = useQueryClient();

  return (
    <div className="relative">
      <div className="relative w-full">
        <Input
          value={value}
          placeholder="관심기업 입력해주세요"
          onChange={(e) => {
            onChange(e.target.value);
            setShowList(true);
          }}
        />
        <WrapperIcon isDown={isExist} />
      </div>
      {showList && (
        <ErrorBoundary
          fallback={<></>}
          onError={() => queryClient.removeQueries({ queryKey: ["companies"] })}
        >
          <Suspense>
            <CompanySuggest
              value={value}
              onChange={onChange}
              setShowList={setShowList}
              isExist={isExist}
              setIsExist={setIsExist}
            />
          </Suspense>
        </ErrorBoundary>
      )}
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
