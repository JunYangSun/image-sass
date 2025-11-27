import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// tailwind-merge  可以解决class 类名冲突的问题

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
