interface LineProps {
  type?: 200 | 400;
}

export function Line({ type = 200 }: LineProps) {
  return (
    <div className={`shrink-0 h-px w-full bg-[var(--color-line-${type})]`} />
  );
}
