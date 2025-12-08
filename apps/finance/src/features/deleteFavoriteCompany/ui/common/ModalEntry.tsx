import { setToast } from "@monorepo/core";
import { ModalWrapper } from "./ModalWrapper";
import { useEffect } from "react";
import { useCheckContext } from "../../../checkFavoriteCompany";

export function ModalEntry() {
  const { checkedIds } = useCheckContext();
  const isEntry = checkedIds.length > 0;

  useEffect(() => {
    if (checkedIds.length === 0) {
      setToast("삭제할 항목이 없습니다.");
    }
  }, [checkedIds]);

  return isEntry ? <ModalWrapper /> : null;
}
