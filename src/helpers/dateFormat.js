export const isDate = (val) => isNaN(val) && !isNaN(new Date(val).getDate());

export const shortDate = (date) => {
  const currentDate = new Date(date);
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const yyyy = currentDate.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};
