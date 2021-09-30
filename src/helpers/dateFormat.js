export const isDate = (val) => isNaN(val) && !isNaN(new Date(val).getDate());

export const shortDate = (date) => {
  const currentDate = new Date(date);
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const yyyy = currentDate.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

export const getDateByTime = (time) => {
  const today = new Date();
  const timeString = time.split(':');
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDay();
  const hour = timeString[0];
  const minute = timeString[1];

  return new Date(year, month, day, hour, minute, 0);
};

export const getTimeByDate = (date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour}:${minute}`;
};
