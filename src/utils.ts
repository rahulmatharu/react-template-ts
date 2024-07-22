export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export const capitaliseFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
