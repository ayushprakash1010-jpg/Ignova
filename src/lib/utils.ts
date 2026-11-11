import { type ClassValue, clsx } from "clsx";

// Simple clsx implementation (we don't need the full library)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Kept minimal — clsx is already included with tailwind
export { clsx };

