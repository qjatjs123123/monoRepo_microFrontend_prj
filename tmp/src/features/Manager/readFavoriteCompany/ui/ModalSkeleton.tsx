
export function ModalSkeleton() {
  return (
    <>
      {/* 제목 Skeleton */}
      <div className="flex justify-center py-3 w-full">
        <span className="h-6 w-32 bg-gray-200 animate-pulse rounded inline-block"></span>
      </div>

      {/* 본문 Skeleton */}
      <div className="bt border-t border-[var(--color-line-400)] p-2 flex-1 space-y-2 w-full">
        {/* 여러 줄 텍스트를 표현 */}
        <span className="block h-4 w-full bg-gray-200 animate-pulse rounded"></span>
        <span className="block h-4 w-5/6 bg-gray-200 animate-pulse rounded"></span>
        <span className="block h-4 w-3/4 bg-gray-200 animate-pulse rounded"></span>
      </div>

      {/* 버튼 Skeleton */}
      <div className="flex justify-end p-2 w-full">
        <span className="h-10 w-24 bg-gray-200 animate-pulse rounded inline-block"></span>
      </div>
    </>
  );
}
