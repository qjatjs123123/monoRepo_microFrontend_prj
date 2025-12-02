import { Button, Input, Text } from "@monorepo/ui";
import { useState } from "react";
import {
  Controller,
  FormProvider,
  useForm,
} from "react-hook-form";

export interface ViewerFormProps {
  corp_code: string; // 8자리
  bsns_year: string; // 4자리
  reprt_code: "11011" | "11012" | "11013" | "11014";
  fs_div: "CFS" | "OFS";
}

export function ViewerForm() {
  const methods = useForm<ViewerFormProps>({
    defaultValues: {
      corp_code: "00126380",
      bsns_year: "2024",
      reprt_code: "11013",
      fs_div: "CFS",
    },
  });
  const [iframeUrl, setIframeUrl] = useState("");

  const handleSearch = async () => {
    const values = methods.getValues();

    const query = new URLSearchParams(values as any).toString();
    const url = `https://pwc-scrap.netlify.app/.netlify/functions/api/scrap?${query}`;

    try {
      const res = await fetch(url);
      const json = await res.json();

      if (res.ok && json.data) {
        setIframeUrl(json.data);
      } else {
        alert(json.data ?? "데이터를 가져오지 못했습니다.");
      }
    } catch (e) {
      console.error(e);
      alert("API 요청 오류");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <FormProvider {...methods}>
        <form className="flex flex-col gap-3">
          <Controller
            name="corp_code"
            control={methods.control}
            render={({ field }) => (
              <div className="flex gap-5 items-center">
                <div className="w-[60px]">
                  <Text size="3" type="body" weight="bold">
                    기업명
                  </Text>
                </div>
                <div className="flex-1">
                  <Input
                    {...field}
                    placeholder="기업명을 입력해주세요"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                </div>
              </div>
            )}
          />

          <Controller
            name="bsns_year"
            control={methods.control}
            render={({ field }) => (
              <div className="flex gap-5 items-center">
                <div className="w-[60px]">
                  <Text size="3" type="body" weight="bold">
                    사업연도
                  </Text>
                </div>
                <div className="flex-1">
                  <Input
                    {...field}
                    placeholder="사업연도를 입력해주세요"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                </div>
              </div>
            )}
          />

          <Controller
            name="reprt_code"
            control={methods.control}
            render={({ field }) => (
              <div className="flex gap-5 items-center">
                <div className="w-[60px]">
                  <Text size="3" type="body" weight="bold">
                    보고서명
                  </Text>
                </div>
                <div className="flex-1">
                  <Input
                    {...field}
                    placeholder="보고서명을 선택해주세요"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                </div>
              </div>
            )}
          />

          <Controller
            name="fs_div"
            control={methods.control}
            render={({ field }) => (
              <div className="flex gap-5 items-center">
                <div className="w-[60px]">
                  <Text size="3" type="body" weight="bold">
                    재무제표
                  </Text>
                </div>
                <div className="flex-1">
                  <Input
                    {...field}
                    placeholder="재무제표 유형을 선택해주세요"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                </div>
              </div>
            )}
          />
        </form>

        <div className="px-4 py-4 flex justify-center">
          <Button style="fill" onClick={() => handleSearch()}>
            검색
          </Button>
        </div>

        {iframeUrl && (
          <iframe src={iframeUrl} className="w-full h-[800px] border flex justify-center" />
        )}
      </FormProvider>
    </div>
  );
}
