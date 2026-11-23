import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026.08" → "Aug 2026". Fixed month names, so server and client render identical text. */
export function formatMonth(ym: string) {
  const [year, month] = ym.split(".");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** "Aug 2026 – Present". An en dash, because it is a range. */
export function formatSpan(start: string, end: string | null) {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
