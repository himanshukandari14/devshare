import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  const units = [
    { name: "year", seconds: 31536000 },
    { name: "month", seconds: 2592000 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const amount = Math.floor(diffInSeconds / unit.seconds);
    if (amount >= 1) {
      return `${amount} ${unit.name}${amount > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};




export const formatNumber = (upvotes:number):string => {
  if (upvotes >= 1000000) {
    return (upvotes / 1000000).toFixed(1) + "M";
  } else if (upvotes >= 1000) {
    return (upvotes / 1000).toFixed(1) + "K";
  } else {
    return upvotes.toString();
  }
};

