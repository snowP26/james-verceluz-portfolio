type SectionHeadProps = {
  title: string;
  /** Right-aligned context: counts or status only. */
  meta?: string;
  as?: "h1" | "h2";
};

export function SectionHead({ title, meta, as: Tag = "h2" }: SectionHeadProps) {
  return (
    <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-line pb-3">
      <Tag className="text-xl font-semibold tracking-tight text-ink">{title}</Tag>
      {meta && <p className="nums text-sm text-ink-3">{meta}</p>}
    </div>
  );
}
