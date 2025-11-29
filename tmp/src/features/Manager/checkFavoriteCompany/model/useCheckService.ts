import { useState, useMemo, useCallback } from "react";
import { FavoriteCompanyList } from "@/entities/Manager";

export function useCheckService(data: FavoriteCompanyList) {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const allIds = useMemo(() => data.items.map((item) => item.id), [data.items]);

  const checkedItem = useCallback((id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  }, []);

  const checkedAll = () => {
    setCheckedIds((prev) => {
      const allSelected = allIds.every((id) => prev.includes(id));
      return allSelected ? [] : allIds;
    });
  };

  const isAllChecked =
    data.items.length > 0 && allIds.every((id) => checkedIds.includes(id));

  const isChecked = (id: number) => checkedIds.includes(id);

  return {
    checkedItem,
    checkedAll,
    isAllChecked,
    isChecked,
    checkedIds,
    setCheckedIds,
  };
}
