export const formatDateOfBirth = (dateString) => {
  if (!dateString) return "";
  const dateOfBirth = new Date(parseInt(dateString, 10));
  if (isNaN(dateOfBirth)) return "";
  const year = dateOfBirth.getFullYear();
  const month = (dateOfBirth.getMonth() + 1).toString().padStart(2, "0");
  const day = dateOfBirth.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
