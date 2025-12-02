export default function BannerSkeleton() {
  return (
    <div className="relative w-full h-[25vh] bg-gray-200 animate-pulse">
      {/* 배너 이미지 영역 */}
      <div className="absolute inset-0 bg-gray-300" />

      {/* 텍스트 영역 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 text-center">
        <div className="h-6 w-64 bg-gray-400 rounded-md" />
        <div className="h-6 w-48 bg-gray-400 rounded-md" />
      </div>
    </div>
  );
}
