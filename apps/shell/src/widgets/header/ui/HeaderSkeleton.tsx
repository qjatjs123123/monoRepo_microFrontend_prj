export default function HeaderSkeleton() {
  return (
    <div className="flex justify-between w-full py-5 animate-pulse">
      {/* 로고 영역 */}
      <div className="h-6 w-[117px] bg-gray-300 rounded-sm" />

      {/* 텍스트 영역 */}
      <div className="h-4 w-24 bg-gray-300 rounded-sm" />
    </div>
  );
}
