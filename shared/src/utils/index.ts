// Utility functions will be added here
export const timeUtils = {
  formatTime: (time: string) => time,
  parseTime: (time: string) => time,
};

export const dateUtils = {
  formatDate: (date: Date) => date.toISOString(),
  parseDate: (dateStr: string) => new Date(dateStr),
};