import { AxiosSuccess, AxiosSuccessDTO } from "@/shared/model/AxiosSuccess";

export function mapAxiosSuccessMsg(dto: AxiosSuccessDTO): AxiosSuccess {
  return {
    message: dto.message,
  };
}
