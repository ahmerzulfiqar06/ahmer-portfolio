import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function formatDateRange(start?: string, end?: string): string {
  if (!start && !end) return "";
  if (!end) return `${formatDate(start!)} - Present`;
  return `${formatDate(start!)} - ${formatDate(end)}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function capitalizeFirst(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function getProjectTypeColor(type: string): string {
  const colors = {
    web: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    mobile: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    motion: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  };
  return colors[type as keyof typeof colors] || colors.web;
}

export function getClientTypeColor(type: string): string {
  const colors = {
    startup: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    agency: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    personal: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  };
  return colors[type as keyof typeof colors] || colors.startup;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
