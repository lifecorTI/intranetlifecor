import { formatDistanceToNow } from "date-fns";

import pt from "date-fns/locale/pt";

export function formatDateJStoDistance(date: any) {
  const dateParsed = new Date(date);
  const distance = formatDistanceToNow(dateParsed, { locale: pt });

  return distance;
}
