// export const formatCurrency = (
//   value: number,
//   currency: string = "PGK",
// ): string => {
//   try {
//     return new Intl.NumberFormat("en-PG", {
//       style: "currency",
//       currency: currency,
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(value);
//   } catch (error) {
//     // Fallback if currency code is invalid or formatting fails
//     const formattedValue = value.toFixed(2);
//     return `K${formattedValue}`;
//   }
// };

import dayjs from "dayjs";

export const formatCurrency = (value: number, currency = "PGK"): string => {
  try {
    return new Intl.NumberFormat("en-PG", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    return `K${value.toFixed(2)}`;
  }
};

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid()
    ? parsedDate.format("MM/DD/YYYY")
    : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
