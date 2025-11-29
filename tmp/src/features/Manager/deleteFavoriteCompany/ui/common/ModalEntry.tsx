import { useToastService } from "@/shared/ui/Toast/model/useToastService";
import { ModalWrapper } from "./ModalWrapper";
import { useEffect } from "react";
import { useCheckContext } from "../../../checkFavoriteCompany";

export function ModalEntry() {
  const toast = useToastService();
  const { checkedIds } = useCheckContext();
  const isEntry = checkedIds.length > 0;

  useEffect(() => {
    if (checkedIds.length === 0) {
      toast.show("삭제할 항목이 없습니다.");
    }
  }, [checkedIds, toast]);

  return isEntry ? <ModalWrapper /> : null;
}
