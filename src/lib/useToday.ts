"use client";

import { useSyncExternalStore } from "react";

const BUILD_DATE = process.env.NEXT_PUBLIC_BUILD_DATE ?? "2026-01-01";
const subscribe = () => () => {};
const today = () => new Date().toISOString().slice(0, 10);

/**
 * Today's date as "YYYY-MM-DD". The pages are prerendered, so the HTML holds
 * the build date: hydration starts from that same value (no mismatch) and
 * React then updates anything derived from it (age, time at ITESOFT) to the
 * real date, even when the last deployment is months old.
 */
export function useToday(): string {
  return useSyncExternalStore(subscribe, today, () => BUILD_DATE);
}
