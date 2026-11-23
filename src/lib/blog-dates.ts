const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatBlogDate = (isoDate: string): string =>
  dateFormatter.format(new Date(`${isoDate}T00:00:00Z`));