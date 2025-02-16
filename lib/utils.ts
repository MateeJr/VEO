// /lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Globe, Book, YoutubeIcon, Pen, Mountain, Sparkles } from 'lucide-react'
import { Brain, Code, XLogo } from '@phosphor-icons/react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type SearchGroupId = 'web' | 'extreme';

export const searchGroups = [
  {
    id: 'web' as const,
    name: 'Normal Mode',
    description: 'Normal mode for general queries or search',
    icon: Brain,
  },
  {
    id: 'extreme' as const,
    name: 'Deep Research',
    description: 'Deep data analysis from the web, for very detailed answers',
    icon: Sparkles,
  },
] as const;

export type SearchGroup = typeof searchGroups[number];
