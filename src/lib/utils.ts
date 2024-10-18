import { format } from "date-fns";

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const getCurrentTime = () => {
  const date = new Date();
  return format(date, "hh:mm a");
};
