export function formatDate(isoDate: string) {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // 오전/오후 표시
  };

  const formatted = new Intl.DateTimeFormat("ko-KR", options).format(date);
  return formatted.replace(/\./g, ".").replace(/\s\./, "."); 
}